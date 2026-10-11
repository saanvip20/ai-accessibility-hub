import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Assessment from "./pages/Assessment";
import Results from "./pages/Results";
import Tools from "./pages/Tools";
import ToolPage from "./pages/ToolPage";
import About from "./pages/About";

function AppContent() {
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [relaxedSpacing, setRelaxedSpacing] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [readingAloud, setReadingAloud] = useState(false);
  const [keyboardGuideOpen, setKeyboardGuideOpen] = useState(true);
  const guideCloseRef = useCallback((node) => {
    if (node && keyboardGuideOpen) node.focus();
  }, [keyboardGuideOpen]);
  const location = useLocation();

  // Move keyboard and screen-reader users to the new page after navigation.
  useEffect(() => {
    if (keyboardGuideOpen) return;
    const main = document.getElementById("main-content");
    if (!main) return;
    const heading = main.querySelector("h1");
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: false });
    } else {
      main.focus({ preventScroll: false });
    }
  }, [location.pathname, keyboardGuideOpen]);

  useEffect(() => {
    if (!keyboardGuideOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setKeyboardGuideOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const dialog = document.getElementById("keyboard-start-guide");
      const controls = dialog?.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
      if (!controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [keyboardGuideOpen]);

  useEffect(() => {
    document.documentElement.style.fontSize = largeText ? "112.5%" : "100%";
    return () => { document.documentElement.style.fontSize = "100%"; };
  }, [largeText]);

  useEffect(() => {
    document.documentElement.classList.toggle("dyslexia-font", dyslexiaFont);
    document.documentElement.classList.toggle("relaxed-spacing", relaxedSpacing);
    document.documentElement.classList.toggle("reduce-motion", reducedMotion);
    return () => {
      document.documentElement.classList.remove("dyslexia-font", "relaxed-spacing", "reduce-motion");
    };
  }, [dyslexiaFont, relaxedSpacing, reducedMotion]);

  useEffect(() => () => {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  }, []);

  const handleReadAloud = useCallback(() => {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      window.alert("Read aloud is not supported by this browser. Try your device's built-in screen reader or text-to-speech setting.");
      return;
    }
    if (readingAloud) {
      window.speechSynthesis.cancel();
      setReadingAloud(false);
      return;
    }
    const main = document.getElementById("main-content");
    const text = main?.innerText?.trim();
    if (!text) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text.slice(0, 12000));
    utterance.rate = 0.92;
    utterance.onend = () => setReadingAloud(false);
    utterance.onerror = () => setReadingAloud(false);
    setReadingAloud(true);
    window.speechSynthesis.speak(utterance);
  }, [readingAloud]);

  return (
    <div className={`app-shell min-h-screen flex flex-col ${highContrast ? "high-contrast" : ""}`}>
      {keyboardGuideOpen && <div className="keyboard-guide-overlay">
        <section id="keyboard-start-guide" className="keyboard-guide-dialog" role="dialog" aria-modal="true" aria-labelledby="keyboard-guide-title" aria-describedby="keyboard-guide-intro">
          <p className="keyboard-guide-kicker">Welcome · Getting started</p>
          <h2 id="keyboard-guide-title" tabIndex="-1">How to use this website without a mouse</h2>
          <p id="keyboard-guide-intro" className="keyboard-guide-intro">These instructions open automatically so you can learn how to move around the website before you begin. You do not need to use a mouse or touchpad.</p>
          <ol className="keyboard-guide-steps">
            <li><strong>Move to the next item:</strong> Press <kbd>Tab</kbd> to move to the next link or button.</li>
            <li><strong>Go back:</strong> Press <kbd>Shift</kbd> + <kbd>Tab</kbd>.</li>
            <li><strong>Choose or open something:</strong> When the link or button you want is outlined, press <kbd>Enter</kbd>. For buttons, <kbd>Space</kbd> usually works too.</li>
            <li><strong>Move inside a menu or list:</strong> Some menus and choices use the <kbd>↑</kbd> and <kbd>↓</kbd> arrow keys. If they do not work, try <kbd>Tab</kbd>.</li>
            <li><strong>Scroll the page:</strong> Use <kbd>Page Down</kbd> and <kbd>Page Up</kbd>, or the arrow keys when supported.</li>
            <li><strong>If you get lost:</strong> Keep pressing <kbd>Tab</kbd> slowly and look for the visible outline. You can press <kbd>Shift</kbd> + <kbd>Tab</kbd> to go back. Press <kbd>Escape</kbd> to close these instructions.</li>
          </ol>
          <p className="keyboard-guide-reminder"><strong>Take your time.</strong> There is no timer. You can close this guide now and start exploring. You can find the keyboard help again near the top of the website.</p>
          <button ref={guideCloseRef} type="button" className="keyboard-guide-close" onClick={() => setKeyboardGuideOpen(false)}>I've read this — continue to the website</button>
        </section>
      </div>}
      <Navbar largeText={largeText} setLargeText={setLargeText} highContrast={highContrast} setHighContrast={setHighContrast} dyslexiaFont={dyslexiaFont} setDyslexiaFont={setDyslexiaFont} relaxedSpacing={relaxedSpacing} setRelaxedSpacing={setRelaxedSpacing} reducedMotion={reducedMotion} setReducedMotion={setReducedMotion} readingAloud={readingAloud} onReadAloud={handleReadAloud} />
      <main id="main-content" tabIndex="-1" className="flex-1 outline-none">
        <Routes>
          <Route path="/" element={<Home />} /><Route path="/assessment" element={<Assessment />} /><Route path="/results" element={<Results />} /><Route path="/tools" element={<Tools />} /><Route path="/tool/:id" element={<ToolPage />} /><Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return <BrowserRouter><AppContent /></BrowserRouter>;
}
