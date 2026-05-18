import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

const maharashtraflag = "/assets/maharshtra.png";

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
      <div className="relative flex flex-col items-center text-center py-12 px-6 overflow-hidden md:hidden">
        <img
          src={maharashtraflag}
          alt=""
          aria-hidden="true"
          className="absolute w-[320px] h-[320px] opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />

        <div
          className={`relative z-10 flex flex-col items-center gap-6 transition-all duration-700 ease-out delay-300
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-[20px] font-bold text-gray-900 mb-2 tracking-tight">Our Mission</h2>
              <p className="text-[13px] text-gray-600 leading-relaxed max-w-[300px]">
                To plan and implement comprehensive programs for the prevention,
                control, and abatement of pollution in Maharashtra, ensuring
                protection of the environment and promoting sustainable development.
              </p>
            </div>
            <div className="w-12 h-px bg-gray-300 mx-auto" />
            <div>
              <h2 className="text-[20px] font-bold text-gray-900 mb-2 tracking-tight">Our Vision</h2>
              <p className="text-[13px] text-gray-600 leading-relaxed max-w-[300px]">
                Improvement in the Board's functional efficiency, transparency in
                operation, and adequate response to the growing needs of
                environmental protection and sustainable development in the State
                of Maharashtra.
              </p>
            </div>
          </div>
          <Link
            to="/about/introduction"
            className="mt-2 px-7 py-2.5 bg-[#0096FF] text-white text-[13px] font-medium rounded-xl transition-colors duration-300 cursor-pointer hover:bg-[#007acc]"
          >
            Read More
          </Link>
        </div>
      </div>

      {/* ── Desktop layout ───────────────────────────────────────── */}
      <div className="hidden md:flex items-center justify-center relative overflow-visible md:mt-[-200px] md:mb-[-120px]">
        <img
          src={maharashtraflag}
          alt=""
          aria-hidden="true"
          className="md:w-[980px] md:h-[980px] opacity-10"
        />

        <div
          className={`flex flex-col items-center justify-center text-center md:w-[720px] absolute md:mt-[-20px]
            transition-all duration-700 ease-out delay-300
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex flex-col gap-8 mb-10 w-full">
            <div>
              <h2 className="text-[32px] font-bold text-gray-900 mb-3 tracking-tight">Our Mission</h2>
              <p className="text-[17px] text-gray-600 leading-relaxed max-w-[560px] mx-auto">
                To plan and implement comprehensive programs for the prevention,
                control, and abatement of pollution in Maharashtra, ensuring
                protection of the environment and promoting sustainable development.
              </p>
            </div>
            <div className="w-16 h-px bg-gray-300 mx-auto" />
            <div>
              <h2 className="text-[32px] font-bold text-gray-900 mb-3 tracking-tight">Our Vision</h2>
              <p className="text-[17px] text-gray-600 leading-relaxed max-w-[560px] mx-auto">
                Improvement in the Board's functional efficiency, transparency in
                operation, and adequate response to the growing needs of
                environmental protection and sustainable development in the State
                of Maharashtra.
              </p>
            </div>
          </div>
          <Link
            to="/about/introduction"
            className="px-10 py-3 bg-[#0096FF] text-white text-[18px] font-medium rounded-2xl transition-colors duration-300 cursor-pointer hover:bg-[#007acc]"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Slogan;
