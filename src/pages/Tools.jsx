import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import tools from "../data/tools";

const categories = ["All goals", "Reading", "Learning", "Writing", "Organisation", "Read visual text and identify objects", "Follow spoken discussions"];

export default function Tools() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All goals");

  const filteredTools = useMemo(() => {
    const normalQuery = query.trim().toLowerCase();
    return tools.filter((tool) => {
      const matchesCategory = category === "All goals" || tool.tasks.includes(category);
      const searchable = `${tool.name} ${tool.description} ${tool.tasks.join(" ")} ${tool.accessibilityFeatures.join(" ")}`.toLowerCase();
      return matchesCategory && (!normalQuery || searchable.includes(normalQuery));
    });
  }, [query, category]);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Browse AI tools</h1>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            Search the curated catalogue or filter by the learning goal you want to work on.
            Open a tool guide to compare its listed features, limitations, alternatives and safety tips.
          </p>
        </header>

        <section className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6" aria-label="Search and filter tools">
          <label htmlFor="tool-search" className="block font-semibold text-slate-950">Search tools</label>
          <input
            id="tool-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="For example, summaries, captions or reading"
            className="mt-2 min-h-12 w-full rounded-lg border border-slate-400 bg-white px-4 py-3 text-slate-950 placeholder:text-slate-500"
          />
          <label htmlFor="tool-category" className="mt-4 block font-semibold text-slate-950">Filter by learning goal</label>
          <select
            id="tool-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="mt-2 min-h-12 w-full rounded-lg border border-slate-400 bg-white px-4 py-3 text-slate-950 sm:max-w-md"
          >
            {categories.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <p className="mt-3 text-sm text-slate-700" role="status">
            {filteredTools.length} {filteredTools.length === 1 ? "tool" : "tools"} found.
          </p>
        </section>

        {filteredTools.length ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => (
              <article key={tool.id} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-blue-900">{tool.name}</h2>
                <p className="mt-3 flex-1 leading-6 text-slate-700">{tool.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tool.tasks.map((task) => (
                    <span key={task} className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-950">{task}</span>
                  ))}
                </div>
                <Link to={`/tool/${tool.id}`} className="mt-5 inline-flex min-h-11 items-center font-semibold text-blue-800 underline underline-offset-4 hover:text-blue-950">
                  Open guide for {tool.name} →
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-xl font-bold text-slate-950">No tools found</h2>
            <p className="mt-2 leading-7 text-slate-700">Try another search term or clear the goal filter.</p>
            <button type="button" onClick={() => { setQuery(""); setCategory("All goals"); }} className="mt-4 min-h-11 rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
