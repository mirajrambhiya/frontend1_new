import { useState, useEffect, useCallback } from 'react';

const COLUMN_COUNT = 5;

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(() => {
    return !sessionStorage.getItem('splashShown');
  });
  const [phase, setPhase] = useState<'logo' | 'reveal' | 'done'>('logo');

  useEffect(() => {
    if (!isVisible) return;

    sessionStorage.setItem('splashShown', 'true');
    document.body.style.overflow = 'hidden';

    // Show logo for 1s, then trigger shutter reveal
    const timer = setTimeout(() => {
      setPhase('reveal');
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  const handleDone = useCallback(() => {
    document.body.style.overflow = '';
    setPhase('done');
    setIsVisible(false);
  }, []);

  // After shutter animation completes (longest stagger + duration)
  useEffect(() => {
    if (phase !== 'reveal') return;
    const timer = setTimeout(handleDone, 1000);
    return () => clearTimeout(timer);
  }, [phase, handleDone]);

  if (!isVisible || phase === 'done') return null;

  return (
    <div className="splash-container">
      {/* Logo layer — sits behind the shutters */}
      <div className={`splash-logo-layer ${phase === 'reveal' ? 'splash-logo-hidden' : ''}`}>
        <img
          src="/assets/mpcblogofinalnew.png"
          alt="MPCB Logo"
          className="splash-logo"
        />
      </div>

      {/* Shutter columns */}
      <div className="splash-shutters">
        {Array.from({ length: COLUMN_COUNT }).map((_, i) => (
          <div
            key={i}
            className={`splash-col ${phase === 'reveal' ? 'splash-col-exit' : ''}`}
            style={{
              animationDelay: phase === 'reveal' ? `${i * 0.07}s` : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SplashScreen;
