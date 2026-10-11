import { Link } from "react-router-dom";
import { ArrowRight, CheckCheck, Compass, Footprints } from "lucide-react";

const steps = [
  { number: "01", icon: Compass, title: "Tell us what would help", description: "Choose goals and access preferences. Skip anything you do not want to answer—there is no diagnosis and no right or wrong response.", label: "A few guided questions" },
  { number: "02", icon: CheckCheck, title: "Get a shortlist, not a verdict", description: "See why tools were suggested, what they are good at, and which limitations or device requirements to check.", label: "Understand your options" },
  { number: "03", icon: Footprints, title: "Try one small step", description: "Open a practical guide, follow one instruction at a time, and use official help pages or video tutorials when you want another explanation.", label: "Learn by doing" },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="max-w-2xl"><p className="section-kicker">No tech confidence needed</p><h2 className="section-title">A small step is still <em>a step.</em></h2><p className="mt-4 text-lg leading-8 text-[#625d69]">You stay in charge. Explore, compare, leave and come back whenever you want.</p></div>
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
        <div><p className="text-sm font-semibold text-[#d6c8ff]">YOUR NEXT STEP</p><h3 className="mt-1 text-xl font-bold sm:text-2xl">Start with what feels difficult today.</h3><p className="mt-2 max-w-xl leading-6 text-[#e1dce9]">You can change your answers and explore other tools at any time.</p></div>
        <Link to="/assessment" className="button-light">Find my starting point <ArrowRight size={18} /></Link>
      </div>
    </section>
  );
}
