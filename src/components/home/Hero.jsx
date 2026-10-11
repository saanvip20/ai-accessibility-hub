import { Link } from "react-router-dom";
import { ArrowDownRight, ArrowUpRight, Ear, Eye, Hand, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-wrap relative overflow-hidden">
      <div className="hero-grid" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
        <div className="relative z-10">
          <div className="eyebrow-pill"><Sparkles size={16} aria-hidden="true" /> A more human way to explore AI</div>
          <p className="hero-kicker mt-7">Different brains. Different bodies. Different ways to learn.</p>
          <h1 className="hero-title mt-3 max-w-3xl">Find your kind of <span>helpful.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#4d4a58] sm:text-xl">
            A friendly starting point for learners with disabilities, families and educators. Discover existing AI tools, understand what they can (and can’t) do, and learn at your own pace.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/assessment" className="button-primary">Find tools for me <ArrowUpRight size={19} aria-hidden="true" /></Link>
            <Link to="/tools" className="button-secondary">Explore the tool shelf <ArrowDownRight size={18} aria-hidden="true" /></Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-[#514b5c]">
            <span className="inline-flex items-center gap-2"><Eye size={17} /> Vision</span>
            <span className="inline-flex items-center gap-2"><Ear size={17} /> Hearing</span>
            <span className="inline-flex items-center gap-2"><Hand size={17} /> Reading, focus &amp; more</span>
          </div>
        </div>

        <div className="hero-art relative mx-auto w-full max-w-xl" aria-label="Illustration of a collection of helpful learning tools">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="art-note note-top"><span className="note-dot coral" /> No one-size-fits-all</div>
          <div className="art-note note-bottom"><span className="note-dot lime" /> Your pace, your choice</div>
          <div className="tool-sticker sticker-main"><span className="sticker-spark">✳</span><span className="sticker-label">ACCESS<br />YOUR WAY</span><span className="sticker-small">A toolkit, not a test.</span></div>
          <div className="mini-card mini-card-lilac"><span className="mini-icon">Aa</span><span>Read it<br />another way</span></div>
          <div className="mini-card mini-card-yellow"><span className="mini-icon">◖))</span><span>Listen<br />instead</span></div>
          <div className="mini-card mini-card-green"><span className="mini-icon">✎</span><span>Make a plan<br />that fits</span></div>
          <span className="art-star star-one" aria-hidden="true">✳</span><span className="art-star star-two" aria-hidden="true">✦</span>
        </div>
      </div>
      <div className="hero-bottomline mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 pb-6 sm:px-8">
        <span>Curiosity welcome. Perfect tech skills not required.</span><span className="hero-scribble">Start wherever you are ↘</span>
      </div>
    </section>
  );
}
