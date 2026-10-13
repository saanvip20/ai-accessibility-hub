import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import tools from "../data/tools";
import { getToolResources } from "../data/resources";

function explainStep(step, tool, index) {
  const text = step.toLowerCase();
  const common = {
    action: `Complete this action for ${tool.name}. Read the full label before selecting anything. If the page differs from this guide, follow the wording of the control rather than its position on screen.`,
    success: "You should see the next page, a confirmation message, or the option you selected become active.",
    stuck: "Pause and check that you are on the official site or app. Look for a help link, use the browser Back button if you opened the wrong page, and avoid clicking unexpected adverts or payment prompts.",
    access: "Keyboard: press Tab to move forward through controls, Shift + Tab to move backwards, and Enter or Space to activate a focused control. If you use a screen reader, listen to the control name before activating it. These shortcuts may vary by device and app.",
  };

  if (/website|open|visit|launch|start/.test(text) && index === 0) {
    common.action = `Open the official ${tool.name} website using the button near the top of this page, or open the official app if you are using a phone or tablet. Check the address or app publisher before entering any information.`;
    common.success = `The ${tool.name} home page or app opens. Look for a sign-in screen, a main workspace or a clearly labelled getting-started option.`;
    common.stuck = "If the page will not load, check your internet connection and try again. On a managed school or work device, access may be restricted; ask the device administrator rather than downloading an unofficial copy.";
  }
  if (/sign up|account|register|verify|email/.test(text)) {
    common.action = "Choose the sign-up option only if you do not already have an account. Follow the provider's prompts and enter information directly on its official site. If you already have an account, choose Sign in instead. Never share your password with this website or another person.";
    common.success = "You reach the main workspace, receive a verification message, or see instructions for the next account step.";
    common.stuck = "Check the spam or junk folder for verification email. If you already registered, use the official sign-in or password-reset option. Stop if the page asks for payment and you did not intend to choose a paid plan.";
  }
  if (/sign in|log in|login/.test(text)) {
    common.action = "Select Sign in or Log in, then enter your own account details on the official provider page. If your device offers a password manager, make sure the website address is correct before accepting an autofill suggestion.";
    common.success = "The service opens its workspace or asks you to complete a security or email verification step.";
    common.stuck = "Use the provider's password-reset flow if needed. Do not share a one-time verification code with anyone who contacts you unexpectedly.";
  }
  if (/upload|document|file|source|pdf|photo|picture|image/.test(text)) {
    common.action = "Choose the upload, add source, attach file or camera control described by the tool. Select only a file or image you are allowed to share, then wait for its name, preview or progress indicator to appear. If using a camera, frame the relevant text or object and check that the image is clear.";
    common.success = "The filename, image preview or source card appears, and any upload progress finishes. If the tool analyses the file, wait for the result before sending another request.";
    common.stuck = "Check the file type and size limits and try a smaller or clearer file. Do not upload medical records, identity documents, private school records or another person's image unless you have permission and have reviewed the provider's privacy settings.";
  }
  if (/type|prompt|question|message|chat box|enter your|ask/.test(text)) {
    common.action = "Find the message or question field. Type one clear request, including the format that would help you most (for example, short bullet points, plain language or numbered steps). Read or listen to the request before sending it. If typing is difficult, check whether voice input is available and suitable for your environment.";
    common.success = "Your request appears in the conversation and the tool begins responding. Read or listen to the response and decide whether it actually answers your question.";
    common.stuck = "If Enter adds a new line, look for a Send button. If the answer is too complicated, ask the tool to simplify it or complete one step at a time. Do not assume the answer is correct just because it sounds confident.";
  }
  if (/permission|microphone|camera|allow access/.test(text)) {
    common.action = "Read the permission request before choosing. Allow only the access required for the feature you want and only if you are comfortable. If you decline, check whether typing, uploading a saved file or another method is available instead.";
    common.success = "The feature becomes available, or the browser/device shows that permission is enabled.";
    common.stuck = "If you denied access accidentally, review this site's permissions in your browser or device settings. Do not enable camera or microphone access for a feature that does not need it.";
  }
  if (/install|download|app store|play store/.test(text)) {
    common.action = "Use the official Apple App Store, Google Play Store or provider website. Check the app name and publisher before choosing Install/Get. Wait for installation to finish before opening it.";
    common.success = "The store shows Open, or the app icon appears on your device.";
    common.stuck = "Avoid download buttons in advertisements or unfamiliar websites. If the app is unavailable for your device or region, check whether the provider offers an official web version.";
  }
  if (/record|caption|transcri|listen|audio|speech/.test(text)) {
    common.action = "Open the transcription, captioning or audio feature. Check the language, microphone source and any permission prompts. Start only when you are ready, and tell other people if a conversation will be recorded or transcribed when appropriate.";
    common.success = "Captions or text begin appearing, a recording indicator is shown, or the service confirms that audio is being processed.";
    common.stuck = "Check that the microphone is not muted and the correct input device is selected. Background noise, accents, overlapping speech and specialist terms can cause errors. Review important names, dates and decisions against the original audio.";
  }
  if (/save|bookmark|favourite/.test(text)) {
    common.action = "Choose the save, bookmark or favourite control and wait for confirmation. If the tool asks where to save the item, choose a location you can find again.";
    common.success = "The item shows a saved indicator or appears in the saved/favourites area.";
    common.stuck = "Check whether you are signed in and whether saving is available on your current plan. Do not assume a result is saved until you can find it again.";
  }
  return common;
}

export default function ToolPage() {
  const { id } = useParams();
  const tool = tools.find((item) => item.id === Number(id));
  const [completedSteps, setCompletedSteps] = useState([]);
  const [copyMessage, setCopyMessage] = useState("");
  const guide = tool?.beginnerGuide;
  const resources = useMemo(() => tool ? getToolResources(tool) : [], [tool]);

  if (!tool || !guide) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-bold">Tool guide not found</h1>
          <p className="mt-3 leading-7 text-slate-700">This tool may have been moved or its guide is unavailable.</p>
          <Link to="/tools" className="mt-5 inline-flex min-h-11 items-center rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white">Browse tools</Link>
        </div>
      </main>
    );
  }

  const setupCount = guide.setup.length;
  const totalSteps = setupCount + 2;
  const completedCount = completedSteps.length;

  function toggleComplete(stepKey) {
    setCompletedSteps((current) => current.includes(stepKey)
      ? current.filter((item) => item !== stepKey)
      : [...current, stepKey]);
  }

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(guide.firstPrompt);
      setCopyMessage("Example prompt copied. Return to the tool and paste it into the message box.");
    } catch {
      setCopyMessage("Copying is not available in this browser. Select the example prompt and copy it manually.");
    }
  }

  const alternatives = (tool.alternatives || [])
    .map((alternativeId) => tools.find((item) => item.id === alternativeId))
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-700">
          <Link to="/" className="underline underline-offset-4 hover:text-blue-800">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/tools" className="underline underline-offset-4 hover:text-blue-800">Browse tools</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="font-semibold text-slate-950">{tool.name}</span>
        </nav>

        <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
          <p className="font-semibold text-blue-800">Practical workflow guide</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{tool.name}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">{tool.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {tool.tasks.map((task) => <span key={task} className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-950">{task}</span>)}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={tool.website} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-700 px-6 py-3 text-center font-semibold text-white hover:bg-blue-800">
              Open official {tool.name} website ↗
            </a>
            <Link to="/assessment" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-center font-semibold text-slate-900 hover:bg-slate-100">Reassess needs</Link>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-700">The provider may update its layout. These instructions describe the task, not the exact position of a button. If your screen looks different, use the official help link below.</p>
        </header>

        <section className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8" aria-labelledby="access-heading">
          <h2 id="access-heading" className="text-2xl font-bold text-slate-950">Accessibility features and limitations</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-slate-950">Features to explore</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 leading-6 text-slate-700">{tool.accessibilityFeatures.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-950">Limitations to check</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 leading-6 text-slate-700">{tool.limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}</ul>
            </div>
          </div>
          <p className="mt-5 rounded-lg bg-slate-100 p-4 text-sm leading-6 text-slate-800">These features are starting points, not a guarantee of compatibility. Test the tool with the person's own device, browser, screen reader, captions or other access setup whenever possible.</p>
        </section>

        <section className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8" aria-labelledby="guide-heading">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-semibold text-blue-800">Follow the written steps</p>
              <h2 id="guide-heading" className="mt-1 text-2xl font-bold text-slate-950">Step-by-step workflow</h2>
              <p className="mt-2 max-w-2xl leading-7 text-slate-700">{guide.whatIsIt}</p>
            </div>
            <div className="min-w-40 rounded-xl bg-blue-50 p-4">
              <p className="text-sm font-semibold text-slate-700">Guide progress</p>
              <p className="mt-1 text-2xl font-bold tabular-nums text-blue-900">{completedCount}/{totalSteps}</p>
              <div className="mt-2 h-2 rounded-full bg-blue-100" role="progressbar" aria-label="Guide progress" aria-valuemin={0} aria-valuemax={totalSteps} aria-valuenow={completedCount}>
                <div className="h-2 rounded-full bg-blue-700" style={{ width: `${(completedCount / totalSteps) * 100}%` }} />
              </div>
            </div>
          </div>

          <div className="mt-7 rounded-xl border border-slate-200 p-5">
            <h3 className="text-lg font-bold text-slate-950">Before you begin</h3>
            <p className="mt-2 leading-6 text-slate-700">You do not need prior AI experience. Read one step at a time, take breaks when needed, and ask a trusted supporter to read the instructions with you if useful. Do not share your password with them.</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-6 text-slate-700">{guide.beforeYouBegin.map((item) => <li key={item}>{item}</li>)}</ul>
            <label className="mt-5 flex min-h-11 cursor-pointer items-center gap-3 rounded-lg bg-slate-50 p-3 text-slate-900">
              <input type="checkbox" checked={completedSteps.includes("prepare")} onChange={() => toggleComplete("prepare")} className="h-5 w-5 accent-blue-700" />
              <span className="font-medium">I am ready to start</span>
            </label>
          </div>

          <div className="mt-5 space-y-4">
            {guide.setup.map((step, index) => {
              const key = `setup-${index}`;
              const done = completedSteps.includes(key);
              const detail = explainStep(step, tool, index);
              return (
                <article key={key} className={`rounded-2xl border ${done ? "border-green-300 bg-green-50" : "border-slate-200 bg-white"}`}>
                  <div className="flex items-start gap-3 border-b border-slate-200/80 p-5 sm:p-6">
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white ${done ? "bg-green-700" : "bg-blue-700"}`} aria-hidden="true">{done ? "✓" : index + 1}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold uppercase tracking-wide text-blue-800">Step {index + 1} of {setupCount}</p>
                      <h3 className="mt-1 text-lg font-bold text-slate-950">{step}</h3>
                      <p className="mt-2 leading-7 text-slate-800">{detail.action}</p>
                    </div>
                  </div>
                  <div className="space-y-4 p-5 sm:p-6">
                    <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                      <h4 className="font-bold text-green-950">How do I know it worked?</h4>
                      <p className="mt-1 leading-6 text-green-950">{detail.success}</p>
                    </div>
                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                      <h4 className="font-bold text-amber-950">If you get stuck</h4>
                      <p className="mt-1 leading-6 text-amber-950">{detail.stuck}</p>
                    </div>
                    <details className="rounded-xl border border-slate-200 p-4">
                      <summary className="cursor-pointer py-1 font-bold text-slate-950">Keyboard and assistive-technology guidance</summary>
                      <p className="mt-2 leading-6 text-slate-700">{detail.access} If you use switch access, allow extra time for scanning. If the page cannot be navigated reliably with your access method, stop and try an alternative tool or ask the provider about accessibility support.</p>
                    </details>
                    <label className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-slate-300 bg-white p-3 text-slate-950">
                      <input type="checkbox" checked={done} onChange={() => toggleComplete(key)} className="h-5 w-5 shrink-0 accent-blue-700" />
                      <span className="font-semibold">{done ? "Step completed" : "I have completed this step — move on"}</span>
                    </label>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-5 rounded-xl border border-slate-200 p-5">
            <h3 className="text-lg font-bold text-slate-950">Try a first task</h3>
            <p className="mt-2 leading-6 text-slate-700">Open the official tool in another tab. Find its main input or task control, enter the example below, then read or listen to the response. You can replace the topic with something relevant to your own goal.</p>
            <blockquote className="mt-4 rounded-lg bg-slate-100 p-4 text-slate-950">{guide.firstPrompt}</blockquote>
            <div className="mt-4 flex flex-wrap gap-3">
              <button type="button" onClick={copyPrompt} className="min-h-11 rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800">Copy example prompt</button>
              <label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border border-slate-300 px-4 py-2 text-slate-900">
                <input type="checkbox" checked={completedSteps.includes("try-prompt")} onChange={() => toggleComplete("try-prompt")} className="h-5 w-5 accent-blue-700" />
                <span className="font-medium">I tried the example</span>
              </label>
            </div>
            {copyMessage && <p className="mt-3 text-sm font-medium text-slate-800" role="status">{copyMessage}</p>}
          </div>

          <div className="mt-5 rounded-xl border border-slate-200 p-5">
            <h3 className="text-lg font-bold text-slate-950">What to try next</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-6 text-slate-700">{guide.nextSteps.map((step) => <li key={step}>{step}</li>)}</ul>
          </div>
        </section>

        <section className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8" aria-labelledby="resources-heading">
          <p className="font-semibold text-blue-800">Learn from the provider and educators</p>
          <h2 id="resources-heading" className="mt-1 text-2xl font-bold text-slate-950">Official guides and video tutorials</h2>
          <p className="mt-2 leading-7 text-slate-700">Use these links when you want a second explanation or the interface has changed. Video search results may include third-party content; check the creator, publication date, device version and whether the instructions match your needs.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {resources.map((resource) => (
              <article key={resource.type} className="flex flex-col rounded-xl border border-slate-200 p-5">
                <p className="text-sm font-bold uppercase tracking-wide text-blue-800">{resource.type === "official" ? "Official help" : resource.type === "video" ? "Video learning" : "Accessibility reference"}</p>
                <h3 className="mt-2 text-lg font-bold text-slate-950">{resource.title}</h3>
                <p className="mt-2 flex-1 leading-6 text-slate-700">{resource.description}</p>
                <a href={resource.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 items-center font-semibold text-blue-800 underline underline-offset-4 hover:text-blue-950">Open resource ↗</a>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-7 rounded-2xl border border-amber-300 bg-amber-50 p-6 sm:p-8" aria-labelledby="privacy-heading">
          <h2 id="privacy-heading" className="text-2xl font-bold text-slate-950">Use AI safely and protect privacy</h2>
          <p className="mt-2 leading-7 text-slate-800">AI can make mistakes. Check the response before relying on it, especially for health, safety, money, legal matters or important decisions.</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-6 text-slate-800">
            {tool.safetyTips.map((tip) => <li key={tip}>{tip}</li>)}
            <li>Do not enter another person's information unless you have permission and understand the service's privacy settings.</li>
            <li>For schoolwork, follow your school's rules on AI use and disclose AI assistance when required.</li>
          </ul>
          <p className="mt-4 text-sm leading-6 text-slate-800">Review the tool's official privacy policy and settings. This guide is not legal, medical or emergency advice.</p>
        </section>

        <section className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8" aria-labelledby="alternatives-heading">
          <h2 id="alternatives-heading" className="text-2xl font-bold text-slate-950">Alternatives to compare</h2>
          <p className="mt-2 leading-7 text-slate-700">If this tool is difficult to use, requires a paid plan or does not work with your access setup, compare other options before deciding.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {alternatives.map((alternative) => (
              <article key={alternative.id} className="rounded-xl border border-slate-200 p-5">
                <h3 className="text-lg font-bold text-blue-900">{alternative.name}</h3>
                <p className="mt-2 leading-6 text-slate-700">{alternative.description}</p>
                <Link to={`/tool/${alternative.id}`} className="mt-4 inline-flex min-h-11 items-center font-semibold text-blue-800 underline underline-offset-4 hover:text-blue-950">Compare {alternative.name} guide →</Link>
              </article>
            ))}
          </div>
          <Link to="/assessment" className="mt-6 inline-flex min-h-11 items-center font-semibold text-blue-800 underline underline-offset-4">Start a new assessment</Link>
        </section>
      </div>
    </main>
  );
}
