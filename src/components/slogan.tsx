import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

const maharashtraflag = "/assets/maharshtra.png";
const mpcbfilled = "/assets/mpcb_filled.svg";

function Slogan() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="font-family-helvetica">
      {/* ── Mobile layout ───────────────────────────────────────── */}
      <div className="relative flex flex-col items-center text-center py-8 px-6 overflow-hidden md:hidden">
        {/* map — always visible */}
        <img
          src={maharashtraflag}
          alt=""
          aria-hidden="true"
          className="absolute w-[300px] h-[300px] opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />

        {/* MPCB logo — animates in */}
        <img
          src={mpcbfilled}
          alt="MPCB"
          className={`relative z-10 w-[160px] h-auto mb-5 transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
        />

        {/* content — animates in with slight delay */}
        <div
          className={`relative z-10 flex flex-col items-center gap-4 transition-all duration-700 ease-out delay-300
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div>
            <h2 className="text-[14px] font-bold text-gray-900 mb-1">Our Mission</h2>
            <p className="text-[11px] text-gray-600 leading-relaxed max-w-[300px]">
              To plan and implement comprehensive programs for the prevention,
              control, and abatement of pollution in Maharashtra, ensuring
              protection of the environment and promoting sustainable development.
            </p>
          </div>
          <div>
            <h2 className="text-[14px] font-bold text-gray-900 mb-1">Our Vision</h2>
            <p className="text-[11px] text-gray-600 leading-relaxed max-w-[300px]">
              Improvement in the Board's functional efficiency, transparency in
              operation, and adequate response to the growing needs of
              environmental protection and sustainable development in the State
              of Maharashtra.
            </p>
          </div>
          <Link
            to="/about/introduction"
            className="mt-1 px-5 py-2 bg-[#0096FF] text-white text-[12px] rounded-xl transition-colors duration-300 cursor-pointer hover:bg-[#007acc]"
          >
            Read More
          </Link>
        </div>
      </div>

      {/* ── Desktop layout ───────────────────────────────────────── */}
      <div className="hidden md:flex items-center justify-center relative overflow-visible md:my-[-80px]">
        {/* map — always visible */}
        <img
          src={maharashtraflag}
          alt=""
          aria-hidden="true"
          className="md:w-[980px] md:h-[980px] opacity-10"
        />

        {/* MPCB logo — slides down from above */}
        <img
          src={mpcbfilled}
          alt="MPCB"
          className={`md:w-[670px] md:h-[182px] absolute md:mt-[-500px] transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        />

        {/* text + button — slides up from below */}
        <div
          className={`flex flex-col items-center justify-center text-center md:p-8 md:w-[800px] absolute md:mt-[90px]
            transition-all duration-700 ease-out delay-300
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-6">
            <h2 className="text-[22px] font-bold text-gray-900 mb-2">Our Mission</h2>
            <p className="text-[16px] text-gray-600 leading-snug max-w-[600px]">
              To plan and implement comprehensive programs for the prevention,
              control, and abatement of pollution in Maharashtra, ensuring
              protection of the environment and promoting sustainable development.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-[22px] font-bold text-gray-900 mb-2">Our Vision</h2>
            <p className="text-[16px] text-gray-600 leading-snug max-w-[600px]">
              Improvement in the Board's functional efficiency, transparency in
              operation, and adequate response to the growing needs of
              environmental protection and sustainable development in the State
              of Maharashtra.
            </p>
          </div>
          <Link
            to="/about/introduction"
            className="px-8 py-3 bg-[#0096FF] text-white text-[22px] rounded-2xl transition-colors duration-300 cursor-pointer hover:bg-[#007acc]"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Slogan;
