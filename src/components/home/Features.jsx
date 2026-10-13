import { Accessibility, AudioLines, BookOpenCheck, Brain, Captions, ShieldCheck } from "lucide-react";

const features = [
  { icon: Accessibility, number: "01", title: "Match the person, not the label", description: "Choose what would make learning easier: listening instead of reading, breaking work into steps, describing images, or getting help with writing." , tone: "lavender"},
  { icon: BookOpenCheck, number: "02", title: "Real steps, not mystery diagrams", description: "Follow detailed, checkable instructions with example prompts, expected results, and troubleshooting when a button or feature looks different.", tone: "peach"},
  { icon: AudioLines, number: "03", title: "More than one way in", description: "Use readable layouts, larger text, high contrast, keyboard-friendly controls and read-aloud support to explore the hub in a way that suits you.", tone: "mint"},
  { icon: Captions, number: "04", title: "Compare before committing", description: "Check platform requirements, free and paid limits, language support, privacy trade-offs and alternatives before choosing a tool.", tone: "yellow"},
  { icon: Brain, number: "05", title: "Support for different learning needs", description: "Explore options for focus, planning, reading, writing, communication, vision and hearing—with no assumption that one disability looks the same for everyone.", tone: "blue"},
  { icon: ShieldCheck, number: "06", title: "Safer, more independent use", description: "Learn what not to upload, how to verify AI-generated answers, and when to ask a trusted person or professional for support.", tone: "rose"},
];

export default function Features() {
  return (
    <section className="section-paper py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-heading-row">
          <div><p className="section-kicker">Built around real needs</p><h2 className="section-title">Helpful should feel <em>possible.</em></h2></div>
          <p className="max-w-md text-base leading-7 text-[#625d69]">Not another endless list of apps. A practical guide to finding a tool, trying it safely and deciding if it actually helps.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {features.map(({ icon: Icon, number, title, description, tone }) => (
            <article key={number} className={`feature-note tone-${tone}`}>
              <div className="flex items-start justify-between"><span className="feature-number">{number}</span><span className="feature-icon"><Icon size={24} strokeWidth={1.8} aria-hidden="true" /></span></div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-[#282333]">{title}</h3>
              <p className="mt-3 leading-7 text-[#56515f]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
