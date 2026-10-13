import { Link } from "react-router-dom";
import { ArrowDownRight, ArrowUpRight, Ear, Eye, Hand, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-wrap relative overflow-hidden">
      <div className="hero-grid" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
        <div className="relative z-10">
          <div className="eyebrow-pill"><Sparkles size={16} aria-hidden="true" /> AI tools for people with disabilities</div>
          <p className="hero-kicker mt-7">Find tools and learn how to use them.</p>
          <h1 className="hero-title mt-3 max-w-3xl">AI tools for <span>your needs.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#4d4a58] sm:text-xl">
            This website helps people with disabilities find AI tools that may support learning and study, and learn how to use them with clear, step-by-step guides. Families, teachers and support staff can use it too.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/assessment" className="button-primary">Find tools for my needs <ArrowUpRight size={19} aria-hidden="true" /></Link>
            <Link to="/tools" className="button-secondary">Browse all tools <ArrowDownRight size={18} aria-hidden="true" /></Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-[#514b5c]" aria-label="Examples of support needs">
            <span className="inline-flex items-center gap-2"><Eye size={17} aria-hidden="true" /> Help with visual information</span>
            <span className="inline-flex items-center gap-2"><Ear size={17} aria-hidden="true" /> Help with spoken information</span>
            <span className="inline-flex items-center gap-2"><Hand size={17} aria-hidden="true" /> Help with reading, focus or input</span>
          </div>
        </div>

        <div className="hero-art relative mx-auto w-full max-w-xl" role="img" aria-label="Illustration showing different ways to access learning information">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="art-note note-top"><span className="note-dot coral" /> Different people need different support</div>
          <div className="art-note note-bottom"><span className="note-dot lime" /> Go at your own pace</div>
          <div className="tool-sticker sticker-main"><span className="sticker-spark" aria-hidden="true">✳</span><span className="sticker-label">AI<br />ACCESS</span><span className="sticker-small">Find a tool. Learn one step at a time.</span></div>
          <div className="mini-card mini-card-lilac"><span className="mini-icon" aria-hidden="true">Aa</span><span>Make text<br />easier to read</span></div>
          <div className="mini-card mini-card-yellow"><span className="mini-icon" aria-hidden="true">◖))</span><span>Read or listen<br />to information</span></div>
          <div className="mini-card mini-card-green"><span className="mini-icon" aria-hidden="true">✎</span><span>Plan a task<br />step by step</span></div>
          <span className="art-star star-one" aria-hidden="true">✳</span><span className="art-star star-two" aria-hidden="true">✦</span>
        </div>
      </div>
      <div className="hero-bottomline mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 pb-6 sm:px-8">
        <span>You do not need to know technical terms to get started.</span><span className="hero-scribble">Start here ↘</span>
      </div>
    </section>
  );
}
