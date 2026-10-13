import { Link } from "react-router-dom";
import { ArrowRight, CheckCheck, Compass, Footprints } from "lucide-react";

const steps = [
  { number: "01", icon: Compass, title: "Tell us what you need help with", description: "Choose a learning task and any support that may help. You can choose “I’m not sure yet”. This is not a test or a diagnosis.", label: "Step 1" },
  { number: "02", icon: CheckCheck, title: "Compare suggested tools", description: "See why each tool was suggested, what it may help with, and what limits or device requirements to check.", label: "Step 2" },
  { number: "03", icon: Footprints, title: "Follow a step-by-step guide", description: "Choose a guide and follow one instruction at a time. You can pause, ask someone for help, or open an official help page whenever you need to.", label: "Step 3" },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="max-w-2xl"><p className="section-kicker">How to use this website</p><h2 className="section-title">Three simple steps to get started</h2><p className="mt-4 text-lg leading-8 text-[#625d69]">You do not need technical knowledge. You can take your time and change your answers whenever you want.</p></div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {steps.map(({ number, icon: Icon, title, description, label }) => (
          <article key={number} className="step-card">
            <div className="flex items-center justify-between"><span className="step-number">{number}</span><Icon size={27} strokeWidth={1.8} aria-hidden="true" /></div>
            <p className="mt-7 text-xs font-bold uppercase tracking-[.14em] text-[#777080]">{label}</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#282333]">{title}</h3>
            <p className="mt-3 leading-7 text-[#625d69]">{description}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#292536] p-6 text-white sm:flex-row sm:items-center sm:p-8">
        <div><p className="text-sm font-semibold text-[#d6c8ff]">Ready to begin</p><h3 className="mt-1 text-xl font-bold sm:text-2xl">What would you like help with?</h3><p className="mt-2 max-w-xl leading-6 text-[#e1dce9]">Answer a few questions to see tools that may suit your needs.</p></div>
        <Link to="/assessment" className="button-light">Find tools for my needs <ArrowRight size={18} /></Link>
      </div>
    </section>
  );
}
