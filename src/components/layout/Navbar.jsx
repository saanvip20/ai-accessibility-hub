import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Accessibility, AudioLines, BookOpen, Check, Contrast, Type, X } from "lucide-react";

const navClass = ({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`;

export default function Navbar({ largeText, setLargeText, highContrast, setHighContrast, dyslexiaFont, setDyslexiaFont, relaxedSpacing, setRelaxedSpacing, reducedMotion, setReducedMotion, readingAloud, onReadAloud }) {
  const [accessOpen, setAccessOpen] = useState(false);
  return (
    <header className="site-header sticky top-0 z-50">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <nav aria-label="Main navigation" className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex min-h-[76px] flex-wrap items-center justify-between gap-3 py-3">
          <Link to="/" className="brand-lockup" aria-label="AI Accessibility Hub home"><span className="brand-mark" aria-hidden="true">a<span>i</span></span><span className="brand-name">AI Accessibility Hub<small>TOOLS FOR LEARNING AND STUDY</small></span></Link>
          <div className="flex flex-wrap items-center gap-2">
            <button type="button" onClick={() => setAccessOpen(!accessOpen)} aria-expanded={accessOpen} aria-controls="accessibility-panel" className="access-trigger"><Accessibility size={18} aria-hidden="true" /> <span>Access options</span>{accessOpen ? <X size={16} /> : <span className="access-trigger-dot" aria-hidden="true" />}</button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-1 border-t border-[#e9e3eb] py-2" aria-label="Site pages">
          <NavLink to="/" end className={navClass}>Home</NavLink><NavLink to="/assessment" className={navClass}>Find my tools <span aria-hidden="true">↗</span></NavLink><NavLink to="/tools" className={navClass}>Browse tools</NavLink><NavLink to="/about" className={navClass}>About this website</NavLink>
        </div>
        {accessOpen && <div id="accessibility-panel" className="access-panel mb-3" aria-label="Display and reading preferences">
          <div className="flex flex-wrap items-start justify-between gap-2"><div><p className="font-bold text-[#292536]">Make this page work for you</p><p className="mt-1 text-sm text-[#625d69]">These controls change how the hub looks or reads on this device.</p></div><span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#615a70]">Optional settings</span></div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <button type="button" aria-pressed={largeText} onClick={() => setLargeText(!largeText)} className="access-option"><Type size={19}/><span><strong>Larger text</strong><small>Increase reading size</small></span>{largeText && <Check className="ml-auto" size={17}/>}</button>
            <button type="button" aria-pressed={dyslexiaFont} onClick={() => setDyslexiaFont(!dyslexiaFont)} className="access-option"><BookOpen size={19}/><span><strong>Reading-friendly font</strong><small>Use a clearer letter shape</small></span>{dyslexiaFont && <Check className="ml-auto" size={17}/>}</button>
            <button type="button" aria-pressed={relaxedSpacing} onClick={() => setRelaxedSpacing(!relaxedSpacing)} className="access-option"><span className="spacing-icon" aria-hidden="true">↕</span><span><strong>More line spacing</strong><small>Give lines room to breathe</small></span>{relaxedSpacing && <Check className="ml-auto" size={17}/>}</button>
            <button type="button" aria-pressed={highContrast} onClick={() => setHighContrast(!highContrast)} className="access-option"><Contrast size={19}/><span><strong>High contrast</strong><small>Increase text distinction</small></span>{highContrast && <Check className="ml-auto" size={17}/>}</button>
            <button type="button" aria-pressed={reducedMotion} onClick={() => setReducedMotion(!reducedMotion)} className="access-option"><span className="spacing-icon" aria-hidden="true">〰</span><span><strong>Reduce movement</strong><small>Minimise animations</small></span>{reducedMotion && <Check className="ml-auto" size={17}/>}</button>
            <button type="button" aria-pressed={readingAloud} onClick={onReadAloud} className="access-option"><AudioLines size={19}/><span><strong>{readingAloud ? "Stop reading" : "Read page aloud"}</strong><small>Uses your browser's voice</small></span>{readingAloud && <span className="ml-auto text-xs font-bold">ON</span>}</button>
          </div>
          <p className="mt-3 text-xs leading-5 text-[#6a6472]">Reading-friendly fonts and extra spacing help some people, but not everyone. Your device may also have its own screen reader, magnifier, captions or voice-control tools.</p>
        </div>}
      </nav>
    </header>
  );
}
