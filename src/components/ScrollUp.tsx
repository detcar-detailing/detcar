import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollUp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 !z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-myColor-gray bg-zinc-800 text-white transition-colors duration-300 hover:bg-myColor-orange hover:text-myColor-black md:bottom-10 md:right-4 md:h-16 md:w-16 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ zIndex: 1000 }}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6 md:h-8 md:w-8" />
    </button>
  );
};

export default ScrollUp;
