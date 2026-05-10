import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(`https://wa.me/917045113322`, "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 cursor-pointer"
    >
      <img
        src="/assets/whatsapp.png"
        alt="WhatsApp"
        className="w-16 h-16"
        loading="lazy"
      />
    </motion.button>
  );
};

export default WhatsAppButton;
