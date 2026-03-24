import React from 'react';
import { Facebook } from 'lucide-react';


// Facebook Page Embed Card Component
const FacebookPageEmbed: React.FC<{ pageUrl: string; title: string }> = ({ pageUrl, title }) => {
  const encodedUrl = encodeURIComponent(pageUrl);

  return (
    <div className="flex flex-col bg-white border border-gray-100 rounded-[48px] overflow-hidden shadow-sm h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
        <div className="flex items-center gap-3">
          <Facebook size={24} className="text-white" />
          <div>
            <h3 className="text-white font-bold text-[15px]">{title}</h3>
            <span className="text-white/80 text-[11px]">Official Facebook Page</span>
          </div>
        </div>
      </div>

      {/* Iframe Container */}
      <div className="flex-1 p-4 bg-gray-50">
        <iframe
          src={`https://www.facebook.com/plugins/page.php?href=${encodedUrl}&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
          width="100%"
          height="500"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          className="rounded-xl"
          title={`${title} Facebook Page`}
        />
      </div>

      {/* Footer Actions */}
      <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center">
        <a
          href={pageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-[13px] font-medium transition-colors"
        >
          <Facebook size={16} /> View on Facebook
        </a>
      </div>
    </div>
  );
};


const SocialPresence: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-20 bg-white font-family-helvetica mb-[-100px]">
      <div className="w-full max-w-[1282px] flex flex-col items-center px-4">

        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-[24px] md:text-[48px] font-bold text-gray-900 leading-tight tracking-tight">
            Social Presence
          </h2>
        </div>

        {/* Centered Facebook Embeds Layout */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 w-full items-center md:items-stretch">

          {/* Card 1: PMO India Facebook Page Embed */}
          <div className="w-full max-w-[340px] md:w-auto md:max-w-none flex-1 min-w-[300px]">
            <FacebookPageEmbed
              pageUrl="https://www.facebook.com/PMOIndia/"
              title="PMO India"
            />
          </div>

          {/* Card 2: CMO Maharashtra Facebook Page Embed */}
          <div className="w-full max-w-[340px] md:w-auto md:max-w-none flex-1 min-w-[300px]">
            <FacebookPageEmbed
              pageUrl="https://www.facebook.com/CMOMaharashtra"
              title="CMO Maharashtra"
            />
          </div>

          {/* Card 3: MPCB Facebook Page Embed */}
          <div className="w-full max-w-[340px] md:w-auto md:max-w-none flex-1 min-w-[300px]">
            <FacebookPageEmbed
              pageUrl="https://www.facebook.com/MPCBOfficial/"
              title="MPCB Official"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialPresence;