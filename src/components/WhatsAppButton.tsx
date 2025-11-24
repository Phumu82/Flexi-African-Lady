import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/27691297257?text=Hi%2C+I%27m+interested+in+your+beauty+services+or+training+courses.",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-glow hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:animate-pulse" />
    </button>
  );
};

export default WhatsAppButton;
