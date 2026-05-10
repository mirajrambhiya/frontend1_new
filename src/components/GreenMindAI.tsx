import { useState, useRef, useEffect } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { X, Send, Bot, User, ChevronDown, Minus, Plus, Factory, MapPin, MessageCircle, Phone, Mail, HelpCircle } from "lucide-react";
import chatbotData from "../../store/chatbot.json";
import sroData from "../../store/ro_wise_pincode_details.json";
import faqData from "../../store/faq.json";

// ============================================================================
// Types
// ============================================================================

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  industryResults?: IndustryCategoryEntry[];
  sroResults?: SROEntry[];
}

interface IndustryCategoryEntry {
  heading: string;
  subheading: string;
  category: string;
}

interface SROEntry {
  pincode: number;
  sro_id: string;
  area_name: string;
  address: string;
  jurisdiction: string;
  Phone: string;
  Fax: string;
  Email: string;
}

type ChatMode = "options" | "industry" | "sro" | "general" | "faq";

// ============================================================================
// Industry Search
// ============================================================================

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200" },
  Orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
  Green: { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
  White: { bg: "bg-gray-50", text: "text-gray-600", border: "border-gray-200" },
};

// Levenshtein distance for fuzzy matching
function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

// Check if queryWord fuzzy-matches any word in the text
function fuzzyWordMatch(queryWord: string, text: string): boolean {
  const textWords = text.split(/[\s/,().&\-]+/).filter(w => w.length > 1);
  const maxDist = queryWord.length <= 4 ? 1 : 2;
  return textWords.some(tw => levenshtein(queryWord, tw.toLowerCase()) <= maxDist);
}

function searchIndustries(query: string): IndustryCategoryEntry[] {
  if (!query.trim()) return [];
  const lowerQuery = query.toLowerCase().trim();
  const words = lowerQuery.split(/\s+/).filter(w => w.length > 1);
  if (words.length === 0) return [];

  const entries = (chatbotData as { content: IndustryCategoryEntry[] }).content;
  const scored: { entry: IndustryCategoryEntry; score: number }[] = [];

  for (const entry of entries) {
    const headingLower = entry.heading.toLowerCase();
    const subLower = entry.subheading.toLowerCase();
    const combined = headingLower + " " + subLower;
    let score = 0;

    if (headingLower.includes(lowerQuery)) score += 10;
    if (subLower.includes(lowerQuery)) score += 5;
    for (const word of words) {
      if (headingLower.includes(word)) {
        score += 3;
      } else if (fuzzyWordMatch(word, headingLower)) {
        score += 2;
      }
      if (subLower.includes(word)) {
        score += 2;
      } else if (fuzzyWordMatch(word, subLower)) {
        score += 1;
      }
    }
    if (headingLower.startsWith(lowerQuery)) score += 5;
    if (words.some(w => combined.includes(w))) score = Math.max(score, 1);
    if (score === 0 && words.every(w => fuzzyWordMatch(w, combined))) {
      score = 1;
    }

    if (score > 0) scored.push({ entry, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 5).map(s => s.entry);
}

const IndustryResultCard = ({ entry }: { entry: IndustryCategoryEntry }) => {
  const colors = categoryColors[entry.category] || categoryColors.White;
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-start justify-between gap-3 hover:shadow-md transition-shadow">
      <div className="flex-1 min-w-0">
        <p className="font-bold text-[13px] text-gray-800 leading-snug">
          {entry.heading}
        </p>
        {entry.subheading && (
          <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">
            {entry.subheading}
          </p>
        )}
      </div>
      <span className={`shrink-0 px-3 py-1 rounded-full text-[11px] font-semibold ${colors.bg} ${colors.text} border ${colors.border}`}>
        {entry.category.toUpperCase()}
      </span>
    </div>
  );
};

// ============================================================================
// SRO Search
// ============================================================================

function searchSRO(query: string): SROEntry[] {
  if (!query.trim()) return [];
  const lowerQuery = query.toLowerCase().trim();
  const entries = sroData as SROEntry[];
  const scored: { entry: SROEntry; score: number }[] = [];

  const isPincode = /^\d{3,6}$/.test(lowerQuery);

  for (const entry of entries) {
    let score = 0;

    if (isPincode) {
      const pincodeStr = String(entry.pincode);
      if (pincodeStr === lowerQuery) {
        score += 20;
      } else if (pincodeStr.startsWith(lowerQuery)) {
        score += 10;
      }
    } else {
      const sroLower = entry.sro_id.toLowerCase();
      const areaLower = entry.area_name.toLowerCase();
      const jurisdictionLower = entry.jurisdiction.toLowerCase();
      const words = lowerQuery.split(/\s+/).filter(w => w.length > 1);

      if (areaLower === lowerQuery) score += 15;
      if (sroLower.includes(lowerQuery)) score += 12;
      if (areaLower.includes(lowerQuery)) score += 10;
      if (jurisdictionLower.includes(lowerQuery)) score += 8;

      for (const word of words) {
        let wordMatched = false;
        if (sroLower.includes(word)) { score += 4; wordMatched = true; }
        if (areaLower.includes(word)) { score += 3; wordMatched = true; }
        if (jurisdictionLower.includes(word)) { score += 2; wordMatched = true; }
        if (!wordMatched) {
          if (fuzzyWordMatch(word, sroLower)) score += 2;
          if (fuzzyWordMatch(word, areaLower)) score += 2;
          if (fuzzyWordMatch(word, jurisdictionLower)) score += 1;
        }
      }

      if (score === 0) {
        if (fuzzyWordMatch(lowerQuery, areaLower)) score += 2;
        if (fuzzyWordMatch(lowerQuery, sroLower)) score += 2;
        if (fuzzyWordMatch(lowerQuery, jurisdictionLower)) score += 1;
      }
    }

    if (score > 0) scored.push({ entry, score });
  }

  scored.sort((a, b) => b.score - a.score);

  const seen = new Set<string>();
  const unique: SROEntry[] = [];
  for (const s of scored) {
    const key = `${s.entry.pincode}-${s.entry.sro_id}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(s.entry);
    }
    if (unique.length >= 5) break;
  }
  return unique;
}

const SROResultCard = ({ entry }: { entry: SROEntry }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <span className="font-bold text-[14px] text-gray-900">
          {entry.pincode}
        </span>
        <span className="font-semibold text-[13px] text-gray-700">
          {entry.sro_id}
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-600 border border-blue-200 uppercase tracking-wide">
          {entry.area_name}
        </span>
      </div>
      <p className="text-[12px] text-gray-500 leading-relaxed mb-1">
        {entry.address}
      </p>
      <p className="text-[12px] text-gray-600 mb-3">
        {entry.jurisdiction}
      </p>
      <div className="flex flex-wrap gap-2">
        {entry.Phone && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200 text-[11px] text-gray-600">
            <Phone className="w-3 h-3" />
            {entry.Phone}
          </span>
        )}
        {entry.Fax && entry.Fax !== entry.Phone && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200 text-[11px] text-gray-600">
            <Phone className="w-3 h-3" />
            {entry.Fax}
          </span>
        )}
        {entry.Email && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200 text-[11px] text-blue-600">
            <Mail className="w-3 h-3" />
            {entry.Email}
          </span>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// FAQ RAG — BM25 Retrieval + LLM Generation
// ============================================================================

interface FAQEntry {
  question: string;
  answer: string;
}

const FAQ_STOPWORDS = new Set([
  "i", "me", "my", "we", "our", "you", "your", "he", "she", "it", "its",
  "they", "them", "what", "which", "who", "whom", "this", "that", "these",
  "those", "am", "is", "are", "was", "were", "be", "been", "being", "have",
  "has", "had", "having", "do", "does", "did", "doing", "will", "would",
  "shall", "should", "can", "could", "may", "might", "must", "ought",
  "the", "a", "an", "and", "but", "or", "nor", "not", "so", "yet",
  "to", "of", "in", "for", "on", "with", "at", "by", "from", "as",
  "into", "through", "during", "before", "after", "above", "below",
  "up", "down", "out", "off", "over", "under", "again", "further",
  "then", "once", "here", "there", "when", "where", "why", "how",
  "all", "both", "each", "few", "more", "most", "other", "some",
  "such", "no", "if",
]);

function faqTokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !FAQ_STOPWORDS.has(w));
}

const faqEntries = faqData as FAQEntry[];
const faqDocs = faqEntries.map((e) =>
  faqTokenize(e.question + " " + e.answer)
);

const BM25_K1 = 1.5;
const BM25_B = 0.75;
const faqAvgDL =
  faqDocs.reduce((sum, d) => sum + d.length, 0) / faqDocs.length;

const faqDF = new Map<string, number>();
for (const doc of faqDocs) {
  const unique = new Set(doc);
  for (const word of unique) {
    faqDF.set(word, (faqDF.get(word) || 0) + 1);
  }
}

function bm25Score(docTokens: string[], queryTokens: string[]): number {
  const dl = docTokens.length;
  const tf = new Map<string, number>();
  for (const t of docTokens) tf.set(t, (tf.get(t) || 0) + 1);

  let score = 0;
  const N = faqDocs.length;
  for (const qt of queryTokens) {
    const termFreq = tf.get(qt) || 0;
    if (termFreq === 0) continue;
    const docFreq = faqDF.get(qt) || 0;
    const idf = Math.log((N - docFreq + 0.5) / (docFreq + 0.5) + 1);
    const tfNorm =
      (termFreq * (BM25_K1 + 1)) /
      (termFreq + BM25_K1 * (1 - BM25_B + BM25_B * (dl / faqAvgDL)));
    score += idf * tfNorm;
  }
  return score;
}

function retrieveFAQContext(query: string, topK = 3): FAQEntry[] {
  const queryTokens = faqTokenize(query);
  if (queryTokens.length === 0) return [];

  const scored = faqDocs.map((doc, i) => ({
    index: i,
    score: bm25Score(doc, queryTokens),
  }));
  scored.sort((a, b) => b.score - a.score);

  return scored
    .slice(0, topK)
    .filter((s) => s.score > 0.5)
    .map((s) => faqEntries[s.index]);
}

function formatFAQContext(entries: FAQEntry[]): string {
  return entries
    .map(
      (e, i) =>
        `FAQ ${i + 1}:\nQ: ${e.question.trim()}\nA: ${e.answer.trim()}`
    )
    .join("\n\n");
}

// ============================================================================
// Utility Functions
// ============================================================================

function getPersistentSessionId(): string {
  const SESSION_KEY = "mpcb_chatbot_session_id";
  let sessionId = localStorage.getItem(SESSION_KEY);

  if (!sessionId) {
    sessionId = `chat_${Date.now()}_${Math.random()
      .toString(36)
      .substring(2, 15)}`;
    localStorage.setItem(SESSION_KEY, sessionId);
  }

  return sessionId;
}

async function recordAnalytics(
  type: "internal" | "embedded",
  source: "internal-chatbot" | "embedded-chatbot",
  userQuery: string,
  response: string,
  responseTime?: number,
  sessionId?: string,
  userAgent?: string,
  ipAddress?: string,
  metadata?: unknown
) {
  try {
    const baseUrl = import.meta.env.VITE_MPCB_AI_BACKEND_URL as string | undefined;
    if (!baseUrl) return;
    const analyticsUrl = `${baseUrl}/api/analytics/record`;
    fetch(analyticsUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type, source, userQuery, response, responseTime,
        sessionId, userAgent, ipAddress, metadata,
      }),
    }).catch(() => {});
  } catch {
    // Silently ignore
  }
}

// ============================================================================
// Markdown Components
// ============================================================================

type MdProps<T extends React.ElementType> = ComponentPropsWithoutRef<T> & {
  node?: unknown;
};

/* eslint-disable @typescript-eslint/no-unused-vars */
const markdownComponents = {
  p: ({ node, ...props }: MdProps<"p">) => (
    <p className="mb-2 last:mb-0 text-inherit leading-relaxed" {...props} />
  ),
  a: ({ node, ...props }: MdProps<"a">) => (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#0085E2] underline break-all cursor-pointer hover:text-[#0070C0]"
      {...props}
    />
  ),
  ul: ({ node, ...props }: MdProps<"ul">) => (
    <ul className="list-disc ml-4 mb-2 space-y-1" {...props} />
  ),
  ol: ({ node, ...props }: MdProps<"ol">) => (
    <ol className="list-decimal ml-4 mb-2 space-y-1" {...props} />
  ),
  li: ({ node, ...props }: MdProps<"li">) => (
    <li className="text-inherit pl-1" {...props} />
  ),
  h1: ({ node, ...props }: MdProps<"h1">) => (
    <h1 className="text-base font-bold mt-3 mb-2 pb-1 border-b border-gray-200" {...props} />
  ),
  h2: ({ node, ...props }: MdProps<"h2">) => (
    <h2 className="text-[15px] font-bold mt-2 mb-1.5 pb-1 border-b border-gray-200" {...props} />
  ),
  h3: ({ node, ...props }: MdProps<"h3">) => (
    <h3 className="text-[14px] font-semibold mt-2 mb-1" {...props} />
  ),
  h4: ({ node, ...props }: MdProps<"h4">) => (
    <h4 className="text-[13px] font-semibold mt-1.5 mb-1" {...props} />
  ),
  strong: ({ node, ...props }: MdProps<"strong">) => (
    <strong className="font-semibold" {...props} />
  ),
  blockquote: ({ node, ...props }: MdProps<"blockquote">) => (
    <blockquote className="border-l-3 border-[#0085E2]/30 pl-3 italic my-2 text-gray-600" {...props} />
  ),
  code: ({ node, ...props }: MdProps<"code">) => (
    <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-[12px]" {...props} />
  ),
  pre: ({ node, ...props }: MdProps<"pre">) => (
    <pre className="bg-gray-100 rounded-lg p-2 overflow-x-auto my-2 text-[12px]" {...props} />
  ),
};
/* eslint-enable @typescript-eslint/no-unused-vars */

// ============================================================================
// JSON Content Renderer
// ============================================================================

const convertUrlsToLinks = (text: string): string => {
  const urlRegex = /(https?:\/\/[^\s<>"{}|\\^`[\]]+|www\.[^\s<>"{}|\\^`[\]]+)/g;
  return text.replace(urlRegex, (url) => {
    const cleanUrl = url.replace(/[.,;:!?]+$/, "");
    const trailingPunct = url.slice(cleanUrl.length);
    const fullUrl = cleanUrl.startsWith("http") ? cleanUrl : `https://${cleanUrl}`;
    return `[${cleanUrl}](${fullUrl})${trailingPunct}`;
  });
};

const JSONContentRenderer = ({
  content,
}: {
  content: { type: string; data: string | string[] }[];
}) => {
  if (!Array.isArray(content)) return null;

  return (
    <div className="flex flex-col gap-2 text-[13px] leading-relaxed">
      {content.map((block, index) => {
        switch (block.type) {
          case "h3":
            return (
              <h3 key={index} className="text-[14px] font-semibold mt-1 mb-0.5">
                {block.data}
              </h3>
            );
          case "ul":
            return (
              <ul key={index} className="list-disc ml-4 space-y-1">
                {Array.isArray(block.data) &&
                  block.data.map((item: string, i: number) => (
                    <li key={i} className="pl-1">
                      <ReactMarkdown components={markdownComponents}>
                        {convertUrlsToLinks(item)}
                      </ReactMarkdown>
                    </li>
                  ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index} className="list-decimal ml-4 space-y-1">
                {Array.isArray(block.data) &&
                  block.data.map((item: string, i: number) => (
                    <li key={i} className="pl-1">
                      <ReactMarkdown components={markdownComponents}>
                        {convertUrlsToLinks(item)}
                      </ReactMarkdown>
                    </li>
                  ))}
              </ol>
            );
          case "p":
          default: {
            const paragraphText = Array.isArray(block.data)
              ? block.data.join(" ")
              : block.data || "";
            return (
              <div key={index} className="leading-relaxed break-words">
                <ReactMarkdown components={markdownComponents}>
                  {convertUrlsToLinks(paragraphText)}
                </ReactMarkdown>
              </div>
            );
          }
        }
      })}
    </div>
  );
};

const preprocessMarkdown = (text: string) => {
  let processed = text;
  processed = processed.replace(/([a-z0-9])\.([A-Z])/g, "$1. $2");
  processed = processed.replace(/(:)(https?:\/\/)/g, "$1 $2");
  processed = processed.replace(/(\.pdf)([a-zA-Z])/g, "$1 $2");
  processed = processed.replace(/(https?:\/\/[^\s]+)(\s+)/g, "$1\n\n");
  processed = processed.replace(/([^\n])(#{1,6}\s)/g, "$1\n\n$2");
  processed = processed.replace(/(#{1,6}\s[^?\n]+)(\?)([A-Z])/g, "$1$2\n\n$3");
  processed = processed.replace(/(\?)([A-Z])/g, "$1\n\n$2");
  processed = processed.replace(/\n{3,}/g, "\n\n");
  return processed.trim();
};

// ============================================================================
// Main Component
// ============================================================================

const GreenMindAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMode, setChatMode] = useState<ChatMode>("options");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [scale, setScale] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const lastUserMessageRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const ZOOM_STEP = 0.1;
  const MAX_SCALE = 1.2;

  const scrollToLastUserMessage = () => {
    setTimeout(() => {
      lastUserMessageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  useEffect(() => {
    if (chatMode !== "options" && messages.length > 1) {
      scrollToLastUserMessage();
    }
  }, [messages, chatMode]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleOptionSelect = (option: ChatMode) => {
    setChatMode(option);
    if (option === "industry") {
      setMessages([
        {
          id: "industry-welcome",
          text: JSON.stringify({
            content: [
              {
                type: "p",
                data: "Please enter the name of the industry you'd like to classify (e.g. \"cement\", \"dairy\", \"brick manufacturing\").",
              },
            ],
          }),
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    } else if (option === "sro") {
      setMessages([
        {
          id: "sro-welcome",
          text: JSON.stringify({
            content: [
              {
                type: "p",
                data: "Please enter a pincode, SRO name, or jurisdiction to find the relevant Sub-Regional Office details.",
              },
            ],
          }),
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    } else if (option === "general") {
      setMessages([
        {
          id: "welcome",
          text: JSON.stringify({
            content: [
              {
                type: "p",
                data: "Hello! I'm Green Mind AI, your environmental assistant. How can I help you today with pollution control, environmental regulations, or any MPCB-related queries?",
              },
            ],
          }),
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    } else if (option === "faq") {
      setMessages([
        {
          id: "faq-welcome",
          text: JSON.stringify({
            content: [
              {
                type: "p",
                data: "Welcome to the MPCB Helpdesk! I can help you with queries regarding online form submission and procedural steps. What would you like to know?",
              },
            ],
          }),
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }
  };

  const handleBackToOptions = () => {
    setChatMode("options");
    setMessages([]);
    setInputValue("");
  };

  const handleIndustrySearch = (query: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: query,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    const results = searchIndustries(query);

    if (results.length > 0) {
      const resultMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Found ${results.length} matching classification${results.length > 1 ? "s" : ""}:`,
        sender: "bot",
        timestamp: new Date(),
        industryResults: results,
      };
      const followUpMessage: Message = {
        id: (Date.now() + 2).toString(),
        text: JSON.stringify({
          content: [
            {
              type: "p",
              data: "Did you find the industry classification you were looking for? If not, try being more specific about the industry name.",
            },
          ],
        }),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, resultMessage, followUpMessage]);
    } else {
      const noResultMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: JSON.stringify({
          content: [
            {
              type: "p",
              data: "I couldn't find a matching industry classification. Please be more specific about the industry name and try again.",
            },
          ],
        }),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, noResultMessage]);
    }
  };

  const handleSROSearch = (query: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: query,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    const results = searchSRO(query);

    if (results.length > 0) {
      const resultMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Found ${results.length} matching SRO detail${results.length > 1 ? "s" : ""}:`,
        sender: "bot",
        timestamp: new Date(),
        sroResults: results,
      };
      const followUpMessage: Message = {
        id: (Date.now() + 2).toString(),
        text: JSON.stringify({
          content: [
            {
              type: "p",
              data: "Enter specific pincode, SRO name, or jurisdiction for which the details are required",
            },
          ],
        }),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, resultMessage, followUpMessage]);
    } else {
      const noResultMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: JSON.stringify({
          content: [
            {
              type: "p",
              data: "I couldn't find matching SRO details. Please try with a valid pincode, SRO name, or jurisdiction area.",
            },
          ],
        }),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, noResultMessage]);
    }
  };

  const handleFAQSearch = async (query: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: query,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    const retrievedFAQs = retrieveFAQContext(query, 3);

    if (retrievedFAQs.length === 0) {
      const noResultMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: JSON.stringify({
          content: [
            {
              type: "p",
              data: "I'm sorry, I wasn't able to find an answer to that query. I can only assist with questions regarding online form submission and procedural steps on the MPCB portal. Could you please rephrase your question or ask about a different topic related to form submissions and procedures?",
            },
          ],
        }),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, noResultMessage]);
      setIsLoading(false);
      return;
    }

    const faqContext = formatFAQContext(retrievedFAQs);
    const augmentedQuery = [
      "You are the MPCB Helpdesk FAQ assistant. Answer the user's question using ONLY the FAQ context provided below.",
      "If the FAQ context does not contain relevant information to answer the question, respond ONLY with: \"I'm sorry, I wasn't able to find an answer to that query. I can only assist with questions regarding online form submission and procedural steps on the MPCB portal.\" and NOTHING else.",
      "Do NOT make up information. Do NOT answer questions outside the FAQ context.",
      "Do NOT include any sources, references, citations, links, URLs, or \"for reference\" text in your response. Never say \"please see\", \"for more information\", or \"for reference\". Your response must contain ONLY the direct answer, nothing else.",
      "Keep your answer concise and helpful. Respond with plain text only.",
      "",
      "--- FAQ CONTEXT ---",
      faqContext,
      "--- END FAQ CONTEXT ---",
      "",
      `User's question: ${query}`,
    ].join("\n");

    const streamingMessageId = (Date.now() + 1).toString();
    setMessages((prev) => [
      ...prev,
      {
        id: streamingMessageId,
        text: "",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);

    try {
      const baseUrl = import.meta.env.VITE_MPCB_AI_BACKEND_URL as string | undefined;
      if (!baseUrl) throw new Error("Backend URL not configured");

      const response = await fetch(`${baseUrl}/api/embedded-chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-session-id": getPersistentSessionId(),
          "x-start-time": new Date().toISOString(),
        },
        body: JSON.stringify({
          query: augmentedQuery,
          conversationHistory: [],
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Failed to get FAQ response");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let responseContent = "";

      const cleanFAQ = (text: string) => {
        let cleaned = text;
        try {
          const json = JSON.parse(cleaned);
          if (json.content && Array.isArray(json.content)) {
            cleaned = json.content
              .map((b: { data: string | string[] }) =>
                Array.isArray(b.data) ? b.data.join(" ") : b.data || ""
              )
              .join("\n");
          }
        } catch {
          // Not JSON, use as-is
        }
        return cleaned
          .replace(/\bundefined\b/gi, "")
          .replace(/\[([^\]]*)\]\(https?:\/\/[^)]+\)/g, "$1")
          .replace(/https?:\/\/[^\s)}\]]+/g, "")
          .replace(/\s*For (reference|related|more)[^.]*\.?\s*/gi, " ")
          .replace(/\s*[Pp]lease (see|review|visit|refer)[^.]*\.?\s*/gi, " ")
          .replace(/\s{2,}/g, " ")
          .trim();
      };

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let newlineIndex;
        while ((newlineIndex = buffer.indexOf("\n")) !== -1) {
          const line = buffer.slice(0, newlineIndex).trim();
          buffer = buffer.slice(newlineIndex + 1);
          if (!line) continue;
          try {
            const event = JSON.parse(line);
            if (event.type === "content" && typeof event.content === "string") {
              responseContent += event.content;
              const cleaned = cleanFAQ(responseContent);
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === streamingMessageId ? { ...m, text: cleaned } : m
                )
              );
            }
          } catch {
            // ignore partial JSON
          }
        }
      }

      const remaining = buffer.trim();
      if (remaining) {
        try {
          const event = JSON.parse(remaining);
          if (event.type === "content" && typeof event.content === "string") {
            responseContent += event.content;
          }
        } catch {
          // ignore
        }
      }

      const finalText = cleanFAQ(responseContent);
      if (finalText) {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === streamingMessageId ? { ...m, text: finalText } : m
          )
        );
      }
    } catch (error) {
      console.error("FAQ RAG error:", error);
      setMessages((prev) =>
        prev.map((m) =>
          m.id === streamingMessageId
            ? {
              ...m,
              text: JSON.stringify({
                content: [
                  {
                    type: "p",
                    data: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
                  },
                ],
              }),
            }
            : m
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    if (chatMode === "industry") {
      handleIndustrySearch(inputValue.trim());
      return;
    }

    if (chatMode === "sro") {
      handleSROSearch(inputValue.trim());
      return;
    }

    if (chatMode === "faq") {
      handleFAQSearch(inputValue.trim());
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    const startTime = Date.now();

    await recordAnalytics(
      "internal",
      "internal-chatbot",
      userMessage.text,
      "Response pending...",
      undefined,
      getPersistentSessionId(),
      navigator.userAgent,
      undefined,
      { messageCount: messages.length + 1, isFirstMessage: messages.length === 1 }
    );

    try {
      const baseUrl = import.meta.env.VITE_MPCB_AI_BACKEND_URL as string | undefined;
      if (!baseUrl) throw new Error("Backend URL not configured");

      const conversationHistory = messages.slice(-10).map((m) => {
        let content = m.text;
        if (m.sender === "bot") {
          try {
            const json = JSON.parse(m.text);
            if (json.content && Array.isArray(json.content)) {
              content = json.content
                .map((b: { data: string | string[] }) =>
                  Array.isArray(b.data) ? b.data.join(" ") : b.data
                )
                .join("\n");
            }
          } catch {
            // keep raw text
          }
        }
        return { role: m.sender === "user" ? "user" : "assistant", content };
      });

      const streamingMessageId = (Date.now() + 1).toString();
      setMessages((prev) => [
        ...prev,
        { id: streamingMessageId, text: "", sender: "bot", timestamp: new Date() },
      ]);

      const response = await fetch(`${baseUrl}/api/embedded-chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-session-id": getPersistentSessionId(),
          "x-start-time": new Date().toISOString(),
        },
        body: JSON.stringify({ query: userMessage.text, conversationHistory }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Failed to send message");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let responseContent = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let newlineIndex;
        while ((newlineIndex = buffer.indexOf("\n")) !== -1) {
          const line = buffer.slice(0, newlineIndex).trim();
          buffer = buffer.slice(newlineIndex + 1);
          if (!line) continue;
          try {
            const event = JSON.parse(line);
            if (event.type === "content" && typeof event.content === "string") {
              responseContent += event.content;
            } else if (event.type === "error") {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === streamingMessageId
                    ? { ...m, text: JSON.stringify({ content: [{ type: "p", data: event.content || "Sorry, I encountered an error." }] }) }
                    : m
                )
              );
              return;
            }
          } catch {
            // ignore partial JSON
          }
        }
      }

      const remaining = buffer.trim();
      if (remaining) {
        try {
          const event = JSON.parse(remaining);
          if (event.type === "content" && typeof event.content === "string") {
            responseContent += event.content;
          } else if (event.type === "error") {
            setMessages((prev) =>
              prev.map((m) =>
                m.id === streamingMessageId
                  ? { ...m, text: JSON.stringify({ content: [{ type: "p", data: event.content || "Sorry, I encountered an error." }] }) }
                  : m
              )
            );
            return;
          }
        } catch {
          // ignore
        }
      }

      if (responseContent) {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === streamingMessageId ? { ...m, text: responseContent } : m
          )
        );
      }

      const responseTime = Date.now() - startTime;
      await recordAnalytics(
        "internal", "internal-chatbot", userMessage.text, responseContent,
        responseTime, getPersistentSessionId(), navigator.userAgent, undefined,
        { messageCount: messages.length + 2, success: true }
      );
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: JSON.stringify({
          content: [{ type: "p", data: "Sorry, I'm having trouble connecting right now. Please try again later." }],
        }),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderBotMessage = (text: string, isStreaming: boolean) => {
    try {
      const json = JSON.parse(text);
      if (json.content && Array.isArray(json.content)) {
        return <JSONContentRenderer content={json.content} />;
      }
      return <p className="text-[13px] leading-relaxed break-words">{text}</p>;
    } catch {
      if (isStreaming || !text) {
        return (
          <div className="flex items-center gap-1.5 py-1">
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
              className="w-2 h-2 bg-[#0085E2] rounded-full"
            />
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0.15 }}
              className="w-2 h-2 bg-[#0085E2] rounded-full"
            />
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0.3 }}
              className="w-2 h-2 bg-[#0085E2] rounded-full"
            />
          </div>
        );
      }
      return (
        <div className="text-[13px] leading-relaxed break-words">
          <ReactMarkdown components={markdownComponents}>
            {preprocessMarkdown(text)}
          </ReactMarkdown>
        </div>
      );
    }
  };

  const quickQuestions = [
    "How to get consent?",
    "Report pollution",
    "Waste guidelines",
  ];

  const chatOptions = [
    {
      id: "industry" as ChatMode,
      label: "Industry Categorisation",
      sublabel: "Green / Orange / Red / White",
      icon: <Factory className="w-5 h-5" />,
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: "sro" as ChatMode,
      label: "SRO Jurisdiction Identification",
      sublabel: "(Pincode-Based)",
      icon: <MapPin className="w-5 h-5" />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: "general" as ChatMode,
      label: "Circular and Standing Order Query Engine",
      sublabel: "General assistance",
      icon: <MessageCircle className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "faq" as ChatMode,
      label: "Frequently Asked Questions",
      sublabel: "Helpdesk Support",
      icon: <HelpCircle className="w-5 h-5" />,
      color: "from-amber-500 to-orange-500",
    },
  ];

  const chatStyle = {
    "--chat-scale": scale,
  } as React.CSSProperties;

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mr-8 mb-1"
            >
              <div className="bg-white rounded-2xl px-3 py-2 shadow-lg border border-gray-100 text-[12px] font-medium text-gray-700 whitespace-nowrap relative">
                Ask me anything!
                <div className="absolute -bottom-1.5 right-4 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45" />
              </div>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer relative"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-green-400/30"
              />
              <img
                src="/assets/greenmind.svg"
                alt="Green Mind AI"
                className="w-16 h-16 relative z-10"
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={chatStyle}
            className="fixed bottom-6 right-6 z-50 bg-white rounded-[24px] shadow-2xl shadow-black/15 flex flex-col overflow-hidden border border-gray-100"
          >
            <div
              style={{
                width: `calc(380px * ${scale})`,
                height: `calc(500px * ${scale})`,
                maxWidth: "calc(100vw - 48px)",
                maxHeight: "calc(100vh - 100px)",
              }}
              className="flex flex-col"
            >
              {/* Header */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-r from-[#0085E2] to-[#00A3FF] px-4 py-2.5 flex items-center justify-between flex-shrink-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                    <img src="/assets/greenmind.svg" alt="Green Mind AI" className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-[15px] flex items-center gap-2">
                      Green Mind AI
                    </h3>
                    <p className="text-white/80 text-[12px]">Environmental Assistant</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 mr-1">
                    <button
                      onClick={() => setScale((prev) => Math.max(1, prev - ZOOM_STEP))}
                      disabled={scale <= 1}
                      className="w-7 h-7 bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors"
                      title="Decrease size"
                    >
                      <Minus className="w-3.5 h-3.5 text-white" />
                    </button>
                    <button
                      onClick={() => setScale((prev) => Math.min(MAX_SCALE, prev + ZOOM_STEP))}
                      disabled={scale >= MAX_SCALE}
                      className="w-7 h-7 bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors"
                      title="Increase size"
                    >
                      <Plus className="w-3.5 h-3.5 text-white" />
                    </button>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4 text-white" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Messages Container */}
              <div className={`flex-1 overflow-y-auto ${chatMode === "options" ? "p-3" : "p-4"} space-y-4 bg-gradient-to-b from-gray-50 to-white`}>
                {/* Options Screen */}
                {chatMode === "options" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-2 pt-1"
                  >
                    <div className="flex items-start gap-2 mb-1">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#0085E2] to-[#00A3FF]">
                        <Bot className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div className="bg-white border border-gray-100 shadow-sm rounded-[14px] px-3 py-2 text-gray-700">
                        <p className="text-[12px] leading-snug">
                          Hello! I'm Green Mind AI. How can I help you today?
                        </p>
                      </div>
                    </div>

                    <p className="text-[10px] text-gray-500 ml-9 flex items-center gap-1">
                      <ChevronDown className="w-3 h-3" />
                      Choose an option
                    </p>

                    {chatOptions.map((option, index) => (
                      <motion.button
                        key={option.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleOptionSelect(option.id)}
                        className="ml-9 flex items-center gap-2.5 px-3 py-2.5 bg-white border border-gray-200 rounded-xl hover:border-[#0085E2]/40 hover:shadow-md transition-all text-left cursor-pointer group"
                      >
                        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${option.color} flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform`}>
                          {option.icon}
                        </div>
                        <div>
                          <p className="text-[12px] font-semibold text-gray-800 leading-tight">
                            {option.label}
                          </p>
                          <p className="text-[10px] text-gray-400">
                            {option.sublabel}
                          </p>
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                )}

                {/* Chat Messages */}
                {chatMode !== "options" && (
                  <AnimatePresence mode="popLayout">
                    {messages.map((message, index) => {
                      const isStreaming =
                        isLoading &&
                        index === messages.length - 1 &&
                        message.sender === "bot";

                      const isLastUserMessage = message.sender === "user" &&
                        index === messages.reduce((lastIdx, m, i) => m.sender === "user" ? i : lastIdx, -1);

                      return (
                        <motion.div
                          key={message.id}
                          ref={isLastUserMessage ? lastUserMessageRef : undefined}
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ delay: index * 0.03 }}
                          className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", delay: index * 0.03 + 0.05 }}
                            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                              message.sender === "bot"
                                ? "bg-gradient-to-br from-[#0085E2] to-[#00A3FF]"
                                : "bg-gray-200"
                            }`}
                          >
                            {message.sender === "bot" ? (
                              <Bot className="w-4 h-4 text-white" />
                            ) : (
                              <User className="w-4 h-4 text-gray-600" />
                            )}
                          </motion.div>
                          <div className={`max-w-[85%] ${message.sender === "bot" ? "" : "px-4 py-3 rounded-[16px] bg-gradient-to-r from-[#0085E2] to-[#00A3FF] text-white"}`}>
                            {message.sender === "bot" ? (
                              <div className="flex flex-col gap-2">
                                {message.text && (
                                  <div className="px-4 py-3 rounded-[16px] bg-white border border-gray-100 shadow-sm text-gray-700">
                                    {renderBotMessage(message.text, isStreaming)}
                                  </div>
                                )}
                                {message.industryResults && (
                                  <div className="flex flex-col gap-2">
                                    {message.industryResults.map((entry, idx) => (
                                      <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.08 }}
                                      >
                                        <IndustryResultCard entry={entry} />
                                      </motion.div>
                                    ))}
                                  </div>
                                )}
                                {message.sroResults && (
                                  <div className="flex flex-col gap-2">
                                    {message.sroResults.map((entry, idx) => (
                                      <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.08 }}
                                      >
                                        <SROResultCard entry={entry} />
                                      </motion.div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <p className="text-[13px] leading-relaxed">{message.text}</p>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions — only in general mode */}
              {chatMode === "general" && messages.length === 1 && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="px-4 pb-2 flex-shrink-0"
                >
                  <p className="text-[11px] text-gray-500 mb-2 flex items-center gap-1">
                    <ChevronDown className="w-3 h-3" />
                    Quick questions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.map((question, index) => (
                      <motion.button
                        key={question}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setInputValue(question);
                          inputRef.current?.focus();
                        }}
                        className="px-3 py-1.5 bg-[#0085E2]/5 hover:bg-[#0085E2]/10 text-[#0085E2] text-[12px] rounded-full border border-[#0085E2]/20 transition-colors"
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Disclaimer */}
              <div className="px-4 py-1.5 bg-gray-50 border-t border-gray-100 flex-shrink-0">
                <p className="text-[10px] text-gray-400 text-center">
                  AI can make mistakes. Please verify important information.
                </p>
              </div>

              {/* Input Area */}
              {chatMode !== "options" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="p-4 border-t border-gray-100 bg-white flex-shrink-0"
                >
                  <button
                    onClick={handleBackToOptions}
                    className="text-[12px] font-medium text-[#0085E2] bg-[#0085E2]/10 hover:bg-[#0085E2]/20 px-3 py-1.5 rounded-full mb-2 flex items-center gap-1.5 transition-colors cursor-pointer border border-[#0085E2]/20"
                  >
                    ← Back to options
                  </button>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-[16px] px-4 py-2 border border-gray-200 focus-within:border-[#0085E2] focus-within:ring-2 focus-within:ring-[#0085E2]/20 transition-all">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder={
                        chatMode === "industry"
                          ? "Enter industry name..."
                          : chatMode === "sro"
                            ? "Enter pincode, SRO name, or area..."
                            : chatMode === "faq"
                              ? "Ask about form submission or procedures..."
                              : "Type your message..."
                      }
                      disabled={isLoading}
                      className="flex-1 bg-transparent text-[14px] text-gray-700 placeholder-gray-400 outline-none disabled:opacity-50"
                    />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isLoading}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        inputValue.trim() && !isLoading
                          ? "bg-gradient-to-r from-[#0085E2] to-[#00A3FF] text-white shadow-md shadow-blue-500/30"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      <Send className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Branding */}
              <div className="px-4 py-1.5 border-t border-gray-100 flex-shrink-0">
                <p className="text-[10px] text-gray-400">
                  Powered by{" "}
                  <a
                    href="https://www.axionailabs.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0085E2] font-medium hover:underline"
                  >
                    Axion Labs
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GreenMindAI;
