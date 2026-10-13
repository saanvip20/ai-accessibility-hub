import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
