import { useState, useEffect, useCallback } from 'react';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(() => {
    return !sessionStorage.getItem('splashShown');
  });
  const [phase, setPhase] = useState<'logo' | 'reveal' | 'done'>('logo');

  useEffect(() => {
    if (!isVisible) return;

    sessionStorage.setItem('splashShown', 'true');
    document.body.style.overflow = 'hidden';

    // Show logo for 1s, then trigger slide-up reveal
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

  // After slide-up animation completes
  useEffect(() => {
    if (phase !== 'reveal') return;
    const timer = setTimeout(handleDone, 1000);
    return () => clearTimeout(timer);
  }, [phase, handleDone]);

  if (!isVisible || phase === 'done') return null;

  return (
    <div className="splash-container">
      {/* Logo layer */}
      <div className={`splash-logo-layer ${phase === 'reveal' ? 'splash-logo-hidden' : ''}`}>
        <img
          src="/assets/mpcblogofinalnew.png"
          alt="MPCB Logo"
          className="splash-logo"
        />
      </div>

      {/* Single slide-up panel */}
      <div className={`splash-panel ${phase === 'reveal' ? 'splash-panel-exit' : ''}`} />
    </div>
  );
};

export default SplashScreen;
