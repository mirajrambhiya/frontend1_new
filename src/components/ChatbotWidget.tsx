import { useState, useRef, useEffect } from 'react'
import { X, Send, Bot, ChevronDown, Mic, MicOff } from 'lucide-react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface ISpeechRecognitionResult {
  transcript: string
}

interface ISpeechRecognitionResultList {
  [index: number]: ISpeechRecognitionResult[]
}

interface ISpeechRecognitionEvent {
  results: ISpeechRecognitionResultList
}

interface ISpeechRecognition {
  lang: string
  interimResults: boolean
  maxAlternatives: number
  start(): void
  stop(): void
  onresult: ((event: ISpeechRecognitionEvent) => void) | null
  onend: (() => void) | null
  onerror: (() => void) | null
}

type SpeechRecognitionConstructor = new () => ISpeechRecognition

const FAQ_RESPONSES: Record<string, string> = {
  // Consent Management
  consent:
    'For Consent to Establish (CTE) or Consent to Operate (CTO), visit our Consent Management section. You can download application forms, check procedures, and track your application status online. Call us at 1800-233-5001 (toll-free).',
  cte:
    'Consent to Establish (CTE) is required before setting up an industry. Submit your application with DPR, layout plan, and environmental data at the nearest MPCB regional office or through our online portal.',
  cto:
    'Consent to Operate (CTO) is required before commencing operations. Submit Form-1 with process details, pollution control equipment details, and environmental performance data.',

  // Complaints
  complaint:
    'To file a pollution complaint:\n• Call our 24/7 helpline: 1800-233-5001\n• Email: mpcb@mpcb.gov.in\n• Visit our nearest regional office\n• Use the online complaint portal on our website',
  complain:
    'To register a pollution complaint, you can call 1800-233-5001 (toll-free, 24×7) or email mpcb@mpcb.gov.in. Our officers will investigate within 48 hours.',

  // Office / Contact
  office:
    'MPCB Head Office:\nKalpataru Point, 3rd & 4th Floor, Sion (East), Mumbai – 400022\nPhone: +91-22-24023781\nEmail: mpcb@mpcb.gov.in\n\nWe also have regional offices in Pune, Nagpur, Nashik, Aurangabad, and other districts.',
  contact:
    'MPCB Headquarters: Sion, Mumbai – 400022\nToll-free: 1800-233-5001\nEmail: mpcb@mpcb.gov.in\nWebsite: mpcb.gov.in',
  address:
    'MPCB Head Office: Kalpataru Point, 3rd & 4th Floor, Sion (East), Mumbai – 400022. We have regional offices across Maharashtra.',

  // Air Quality
  air:
    'MPCB monitors air quality across Maharashtra through its CAAQMS (Continuous Ambient Air Quality Monitoring Stations) network. You can view live air quality data in the Air Quality section of our website.',
  'air quality':
    'MPCB operates real-time air quality monitoring stations in Mumbai, Pune, Nagpur, and other cities. Visit our Air Quality section for PM2.5, PM10, NO₂, SO₂, and CO levels.',

  // Water Quality
  water:
    'MPCB regularly monitors water quality of rivers, lakes, and coastal areas. Check our Water Quality section for E-Bulletins, maps, and annual reports.',
  'water quality':
    'MPCB monitors rivers including Ulhas, Mula-Mutha, Godavari, and coastal zones. Water quality data is published in our annual E-Bulletins available on the website.',

  // Noise Pollution
  noise:
    'For noise pollution complaints, call 1800-233-5001. MPCB enforces Noise Pollution (Regulation & Control) Rules, 2000 and issues directions to violators.',

  // Waste Management
  waste:
    'MPCB regulates Hazardous Waste, Biomedical Waste, E-Waste, Plastic Waste, Fly Ash, and Solid Waste. Visit our Waste Management section for rules, authorization procedures, and compliance requirements.',
  hazardous:
    'For Hazardous Waste authorization under HW (M, H & TM) Rules, contact your nearest MPCB office or apply via our website. Importers and exporters require separate permits.',
  biomedical:
    'Biomedical Waste authorization is required for all hospitals, clinics, and labs. Apply through MPCB\'s online portal or at the regional office. Renewal is done annually.',
  ewaste:
    'E-Waste (Management) Rules, 2016 require producers, manufacturers, and dealers to register with MPCB. Visit the E-Waste section for registration details.',
  plastic:
    'MPCB enforces Maharashtra Plastic Bag Ban under Plastic Waste Management Rules. Registration of plastic manufacturers is mandatory. Check the Plastic Waste section for details.',

  // RTI
  rti:
    'Under the Right to Information Act 2005, you can file RTI applications to MPCB. Our Public Information Officers (PIOs) are listed in the RTI section of the website. Applications can be sent to mpcb@mpcb.gov.in.',

  // Tenders
  tender:
    'MPCB publishes all tenders and procurement notices in the Notices & Tenders section. GeM (Government e-Marketplace) purchases are also listed there.',

  // Recruitment
  recruitment:
    'MPCB recruitment notifications are published in the Recruitment section and in leading newspapers. Check the website regularly for vacancy announcements.',

  // Default / Greetings
  hello: 'Hello! I\'m the MPCB Assistant. How can I help you today? You can ask me about consent procedures, complaints, air/water quality, waste management, or contact information.',
  hi: 'Hi there! I\'m here to help you with MPCB-related queries. Ask me about consent management, pollution complaints, office contacts, or any other MPCB matter.',
  help: 'I can assist you with:\n• Consent procedures (CTE/CTO)\n• Filing pollution complaints\n• Air & water quality data\n• Waste management rules\n• Office contact details\n• RTI applications\n• Tenders & Recruitment\n\nWhat do you need help with?',
  thanks: 'You\'re welcome! For urgent matters, please call our helpline at 1800-233-5001 or email mpcb@mpcb.gov.in.',
  'thank you': 'Happy to help! For further assistance, call 1800-233-5001 or visit your nearest MPCB office.',
  bye: 'Goodbye! For any further assistance, reach us at 1800-233-5001 or mpcb@mpcb.gov.in. Have a great day!',
}

const QUICK_REPLIES = [
  'Consent Procedures',
  'File a Complaint',
  'Air Quality',
  'Water Quality',
  'Office Address',
  'Waste Management',
]

const getBotResponse = (input: string): string => {
  const lower = input.toLowerCase().trim()

  for (const key of Object.keys(FAQ_RESPONSES)) {
    if (lower.includes(key)) {
      return FAQ_RESPONSES[key]
    }
  }

  return "I'm sorry, I don't have a specific answer for that. Please contact MPCB directly:\n• Helpline: 1800-233-5001 (Toll-free, 24×7)\n• Email: mpcb@mpcb.gov.in\n• Office: Sion (East), Mumbai – 400022\n\nOr type 'help' to see what I can assist with."
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hello! I'm the MPCB Public Assistant. How can I help you today?\n\nYou can ask me about consent procedures, pollution complaints, air/water quality data, waste management, or our office contacts.",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const recognitionRef = useRef<ISpeechRecognition | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const idCounterRef = useRef(1)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  const sendMessage = (text: string) => {
    if (!text.trim()) return

    const userMsg: Message = {
      id: idCounterRef.current++,
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const botReply: Message = {
        id: idCounterRef.current++,
        text: getBotResponse(text),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, botReply])
      setIsTyping(false)
    }, 800)
  }

  const handleSend = () => sendMessage(input)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend()
  }

  const toggleVoice = () => {
    const SpeechRecognition: SpeechRecognitionConstructor | undefined =
      (window as Window & { SpeechRecognition?: SpeechRecognitionConstructor }).SpeechRecognition ||
      (window as Window & { webkitSpeechRecognition?: SpeechRecognitionConstructor }).webkitSpeechRecognition

    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in your browser.')
      return
    }

    if (isListening) {
      recognitionRef.current?.stop()
      setIsListening(false)
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = 'en-IN'
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onresult = (event: ISpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript
      setInput(transcript)
      setIsListening(false)
    }

    recognition.onend = () => setIsListening(false)
    recognition.onerror = () => setIsListening(false)

    recognitionRef.current = recognition
    recognition.start()
    setIsListening(true)
  }

  const formatText = (text: string) =>
    text.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </span>
    ))

  return (
    <>
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 z-50 w-[340px] max-w-[calc(100vw-40px)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          style={{ height: '480px' }}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 text-white"
            style={{ background: 'linear-gradient(135deg, #1a5276 0%, #2e86c1 100%)' }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm leading-tight">MPCB Assistant</p>
                <p className="text-[10px] text-blue-100">Maharashtra Pollution Control Board</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition-colors"
              aria-label="Close chatbot"
            >
              <ChevronDown size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2 bg-gray-50">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full flex-shrink-0 mt-1 mr-1.5 flex items-center justify-center"
                    style={{ background: '#1a5276' }}>
                    <Bot size={13} className="text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[78%] px-3 py-2 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-white text-gray-800 rounded-bl-sm border border-gray-100'
                  }`}
                >
                  {formatText(msg.text)}
                  <p className={`text-[9px] mt-1 ${msg.sender === 'user' ? 'text-blue-100' : 'text-gray-400'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="w-6 h-6 rounded-full flex-shrink-0 mt-1 mr-1.5 flex items-center justify-center"
                  style={{ background: '#1a5276' }}>
                  <Bot size={13} className="text-white" />
                </div>
                <div className="bg-white border border-gray-100 px-4 py-2.5 rounded-2xl rounded-bl-sm shadow-sm">
                  <div className="flex gap-1 items-center h-4">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          <div className="px-3 py-1.5 bg-gray-50 border-t border-gray-100 flex gap-1.5 overflow-x-auto scrollbar-hide">
            {QUICK_REPLIES.map(reply => (
              <button
                key={reply}
                onClick={() => sendMessage(reply)}
                className="flex-shrink-0 text-[10px] px-2.5 py-1 rounded-full border border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors whitespace-nowrap"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="px-3 py-2.5 bg-white border-t border-gray-200 flex items-center gap-2">
            <button
              onClick={toggleVoice}
              className={`flex-shrink-0 p-1.5 rounded-full transition-colors ${
                isListening ? 'bg-red-100 text-red-600' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
              }`}
              aria-label={isListening ? 'Stop voice input' : 'Start voice input'}
            >
              {isListening ? <MicOff size={16} /> : <Mic size={16} />}
            </button>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question..."
              className="flex-1 text-sm border border-gray-200 rounded-full px-3 py-1.5 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 bg-gray-50"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-110 active:scale-95"
              style={{ background: input.trim() ? '#1a5276' : '#ccc' }}
              aria-label="Send message"
            >
              <Send size={14} className="text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        style={{ background: 'linear-gradient(135deg, #1a5276 0%, #2e86c1 100%)' }}
        aria-label={isOpen ? 'Close chatbot' : 'Open MPCB chatbot'}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <Bot size={24} className="text-white" />
        )}
      </button>
    </>
  )
}

export default ChatbotWidget
