import React, { useEffect, useRef, useState } from 'react';

const devendra = "/assets/devendra.svg";
const eknath = "/assets/eknath.svg";
const ajit = "/assets/ajitupscaled.jpg";
const pankaja = "/assets/pankaja.svg";
const siddhesh = "/assets/siddheshupscaled.jpg";
const devender = "/assets/devender.svg";

interface Profile {
  name: string;
  role: string;
  subRole?: string;
  imageUrl: string;
}

const profiles: Profile[] = [
  {
    name: "Hon'ble Shri. Devendra Fadnavis",
    role: "Chief Minister, Maharashtra",
    imageUrl: devendra,
  },
  {
    name: "Hon'ble Shri. Eknath Shinde",
    role: "Deputy Chief Minister, Urban Development and Housing",
    imageUrl: eknath,
  },
  {
    name: "Hon'ble Shri. Ajit Pawar",
    role: "Deputy Chief Minister, Finance and Planning",
    imageUrl: ajit,
  },
  {
    name: "Hon'ble Shri. Pankaja Munde",
    role: "Minister of Animal Husbandry & Dairy Development of Maharashtra",
    imageUrl: pankaja,
  },
  {
    name: "Shri. Siddhesh Ramdas Kadam",
    role: "Chairman | M.P.C Board, Mumbai",
    imageUrl: siddhesh,
  },
  {
    name: "Shri. M. Devender Singh (IAS:2011 DR)",
    role: "Member Secretory | M.P.C Board Mumbai, Maharashtra",
    imageUrl: devender,
  },
];

const ProfileCard: React.FC<Profile> = ({ name, role, imageUrl }) => {
  return (
    <div className="flex flex-col items-start rounded-[22px] md:rounded-[30px] bg-white w-[140px] md:w-[168px] h-auto font-helvetica shadow-lg md:shadow-none p-2 md:p-0">
      {/* Profile Image Container */}
      <div className="overflow-hidden rounded-[18px] md:rounded-[30px] mb-2 md:mb-2.5 w-full h-[140px] md:h-[172px] p-[4px] md:p-[4px] border-2 border-gray-200 group">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover rounded-[14px] md:rounded-[26px] transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-1 px-1">
        <h3 className="text-[11px] md:text-[13px] font-bold leading-tight text-gray-900">
          {name}
        </h3>
        <p className="text-[9.5px] md:text-[11.5px] leading-tight text-gray-500 line-clamp-3">
          {role}
        </p>
      </div>
    </div>
  );
};

const ImportantPersonnel: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(100); // percentage to translate down

  useEffect(() => {
    let raf: number;

    const handleScroll = () => {
      raf = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        // Map scroll 0–300px to translateY 100%–0%
        const progress = Math.min(scrollY / 300, 1);
        const newTranslate = 100 * (1 - progress);
        setTranslateY(newTranslate);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount in case page is already scrolled
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="
        relative w-full pt-4 pb-10 md:pt-6 md:pb-14 text-black font-family-helvetica z-30
        -mt-32 md:-mt-48 bg-white rounded-t-[30px] md:rounded-t-[50px] shadow-[0_-10px_40px_rgba(0,0,0,0.12)]
        will-change-transform
      "
      style={{
        transform: `translateY(${translateY}%)`,
      }}
    >
      {/* Cards container */}
      <div
        className="
          flex flex-nowrap justify-center items-start
          gap-4 md:gap-6
          px-4 md:px-8
          w-full md:max-w-[1282px] md:mx-auto
        "
        style={{ overflow: 'hidden' }}
      >
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="
              shrink-0
              z-10
            "
          >
            <ProfileCard
              name={profile.name}
              role={profile.role}
              imageUrl={profile.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantPersonnel;