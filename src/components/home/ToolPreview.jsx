import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, ExternalLink } from "lucide-react";
import tools from "../../data/tools";

export default function ToolPreview() {
  return (
    <section className="bg-[#f3edf7] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="section-heading-row">
          <div><p className="section-kicker">Browse AI tools</p><h2 className="section-title">Examples of tools to explore</h2></div>
          <p className="max-w-md text-base leading-7 text-[#625d69]">These are starting points, not endorsements. Check the details and see whether each tool fits your needs, device and budget.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.slice(0, 4).map((tool, index) => (
            <article key={tool.id} className={`tool-preview-card tool-preview-${index + 1}`}>
              <div className="flex items-center justify-between"><span className="tool-category">{tool.category || tool.tasks?.[0] || "AI learning tool"}</span><span className="tool-index">0{index + 1}</span></div>
              <h3 className="mt-5 text-xl font-extrabold tracking-tight text-[#292536]">{tool.name}</h3>
              <p className="mt-3 flex-1 leading-7 text-[#625d69]">{tool.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{tool.tasks.slice(0, 2).map((task) => <span key={task} className="tool-tag">{task}</span>)}</div>
              <Link to={`/tool/${tool.id}`} className="tool-guide-link">Read the guide <ArrowUpRight size={17} aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#ded2e8] bg-[#fffdf8] p-5 sm:p-6"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#e9def5] text-[#5c3c86]"><BookOpen size={22}/></span><div><p className="font-bold text-[#292536]">Want to see all the tools?</p><p className="text-sm text-[#625d69]">See all tools, their limits and step-by-step instructions.</p></div></div><Link to="/tools" className="button-secondary">See all tools <ExternalLink size={16}/></Link></div>
      </div>
    </section>
  );
}
