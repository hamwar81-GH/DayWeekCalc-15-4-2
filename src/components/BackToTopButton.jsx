import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 480);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#top"
      onClick={handleClick}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-dark-900/90 px-4 py-3 text-sm font-semibold text-white shadow-glow backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400/40 hover:bg-dark-900 ${
        isVisible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp size={16} />
      <span>Back to Top</span>
    </a>
  );
}

export default BackToTopButton;
