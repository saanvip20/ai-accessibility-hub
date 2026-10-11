import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import recommendationEngine from "../utils/recommendationEngine";
import tools from "../data/tools";

function buildSummary(answers, recommendations) {
  const goals = answers.tasks.length ? answers.tasks.join(", ") : "Not specified";
  const access = answers.accessibility.length
    ? answers.accessibility.join(", ")
    : "Not specified";
  const top = recommendations.slice(0, 5)
    .map((tool, index) => `${index + 1}. ${tool.name} — ${tool.percentage}% guide match\n   ${tool.description}`)
    .join("\n");
  return [
    "AI Accessibility Hub — learning and study tool shortlist",
    "",
    `Goals: ${goals}`,
    `Access preferences: ${access}`,
    `Preferred guidance: ${answers.experience || "Not specified"}`,
    "",
    "Tools to explore (not a guarantee of accessibility):",
    top,
    "",
    "Please check each tool's current features, account requirements, privacy settings and compatibility with the learner's device and assistive technology before use.",
  ].join("\n");
}

export default function Results() {
  const location = useLocation();
  const answers = location.state;
  const [shareMessage, setShareMessage] = useState("");

  if (!answers) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-bold">No assessment found</h1>
          <p className="mt-3 leading-7 text-slate-700">
            Complete the short assessment first so recommendations can be based
            on your selected goals and preferences.
          </p>
          <Link to="/assessment" className="mt-6 inline-flex min-h-12 items-center rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800">
            Start assessment
          </Link>
        </div>
      </main>
    );
  }

  const recommendations = recommendationEngine(answers, tools);
  const primaryRecommendations = recommendations.slice(0, 5);
  const additionalRecommendations = recommendations.slice(5);
  const summary = buildSummary(answers, recommendations);

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(summary);
      setShareMessage("Shortlist copied. You can paste it into an email or message to a supporter.");
    } catch {
      setShareMessage("Copying is not available in this browser. Use “Print / save as PDF” to create a shareable copy.");
    }
  }

  async function shareSummary() {
    if (!navigator.share) {
      await copySummary();
      return;
    }
    try {
      await navigator.share({ title: "AI Accessibility Hub shortlist", text: summary });
      setShareMessage("Share sheet opened.");
    } catch (error) {
      if (error?.name !== "AbortError") {
        setShareMessage("Sharing did not complete. You can copy or print the shortlist instead.");
      }
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-semibold text-blue-800">Your shortlist</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              AI tools to explore
            </h1>
            <p className="mt-3 max-w-3xl leading-7 text-slate-700">
              These tools are ranked against the goals and guidance preference you selected.
              Start with the strongest matches, then compare alternatives if a tool is not
              suitable for the learner's device or access setup.
            </p>
          </div>
          <Link to="/assessment" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-100">
            Reassess needs
          </Link>
        </div>

        <section className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6" aria-labelledby="share-heading">
          <h2 id="share-heading" className="text-xl font-bold text-slate-950">
            Share this shortlist with a supporter
          </h2>
          <p className="mt-2 max-w-3xl leading-7 text-slate-700">
            Copy or print a summary to discuss with a teacher, family member or support
            professional. The assessment answers are not sent to an organisation by this
            website; sharing happens only when you choose an option below.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={copySummary} className="min-h-11 rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800">
              Copy shortlist
            </button>
            <button type="button" onClick={shareSummary} className="min-h-11 rounded-lg border border-blue-800 bg-white px-5 py-3 font-semibold text-blue-900 hover:bg-blue-100">
              Share…
            </button>
            <button type="button" onClick={() => window.print()} className="min-h-11 rounded-lg border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-100">
              Print / save as PDF
            </button>
          </div>
          {shareMessage && <p className="mt-3 text-sm font-medium text-slate-800" role="status">{shareMessage}</p>}
        </section>

        <div className="mt-8 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          <strong>Important:</strong> the percentage is a guide-match score based on the options
          selected, not a verified accessibility rating. Features can change, and compatibility
          varies by device, browser, assistive technology and individual preference. Try a tool
          with support before relying on it for an important task.
        </div>

        <div className="mt-8 space-y-5">
          {primaryRecommendations.map((tool, index) => (
            <article key={tool.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold text-slate-500">
                    {index < 3 ? `Starting point ${index + 1}` : "Alternative to compare"}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-blue-800">{tool.name}</h2>
                  <p className="mt-3 leading-7 text-slate-700">{tool.description}</p>
                </div>
                <div className="min-w-36 rounded-xl bg-slate-100 p-4 sm:text-right">
                  <p className="text-2xl font-bold tabular-nums text-slate-950">{tool.percentage}%</p>
                  <p className="text-sm font-medium text-slate-700">{tool.rating}</p>
                  <p className="mt-1 text-xs text-slate-600">guide-match score</p>
                </div>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-slate-950">Why it appeared</h3>
                  {tool.reasons.length ? (
                    <ul className="mt-2 list-disc space-y-1 pl-5 leading-6 text-slate-700">
                      {tool.reasons.map((reason) => <li key={reason}>{reason}</li>)}
                    </ul>
                  ) : (
                    <p className="mt-2 leading-6 text-slate-700">
                      This is included as a comparison option. Review its details before deciding.
                    </p>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950">Check before choosing</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 leading-6 text-slate-700">
                    {tool.gaps.length ? tool.gaps.map((gap) => <li key={gap}>{gap}</li>) : <li>Test it with the learner's device and access setup.</li>}
                    <li>Check the current free-plan limits, account requirements and privacy settings.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link to={`/tool/${tool.id}`} className="inline-flex min-h-11 items-center rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800">
                  Open step-by-step guide
                </Link>
                <a href={tool.website} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-900 hover:bg-slate-100">
                  Official website ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        {additionalRecommendations.length > 0 && (
          <details className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <summary className="min-h-11 cursor-pointer py-2 text-lg font-bold text-slate-950">
              Compare {additionalRecommendations.length} more tools
            </summary>
            <p className="mt-2 leading-7 text-slate-700">
              These options ranked lower for the answers selected, but may still be worth exploring
              if the first options do not fit the learner's access setup or preferences.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {additionalRecommendations.map((tool) => (
                <article key={tool.id} className="rounded-xl border border-slate-200 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-blue-900">{tool.name}</h3>
                    <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-800">{tool.percentage}%</span>
                  </div>
                  <p className="mt-2 leading-6 text-slate-700">{tool.description}</p>
                  <Link to={`/tool/${tool.id}`} className="mt-4 inline-flex min-h-11 items-center font-semibold text-blue-800 underline underline-offset-4">
                    Compare guide →
                  </Link>
                </article>
              ))}
            </div>
          </details>
        )}
      </div>
    </main>
  );
}
