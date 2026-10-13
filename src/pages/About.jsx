export default function About() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <p className="font-semibold text-blue-800">Project purpose and scope</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">About AI Accessibility Hub</h1>
          <p className="mt-6 text-lg leading-8 text-slate-800">
            AI Accessibility Hub helps learners with disabilities and the people who support them
            explore existing AI tools for learning and study. It turns tool discovery into a guided
            process: identify a learning goal, compare possible tools, and follow a beginner-friendly
            guide to try one safely.
          </p>
        </header>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">Who this website is for</h2>
          <p className="mt-3 leading-7 text-slate-700">
            It is for people with disabilities who want to explore AI tools for learning and study. It may also help family members, teachers, caregivers and support professionals who are exploring options with someone. You do not need to know technical terms before you begin.
          </p>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">Optional: help with using a webpage</h2>
          <p className="mt-3 leading-7 text-slate-700">
            You may already use tools such as a screen reader, magnifier, captions or voice control. This section is optional and is mainly for anyone who is supporting another person or would like a reminder.
          </p>
          <details className="mt-4 rounded-xl border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold text-slate-900">Show keyboard navigation tips</summary>
            <div className="mt-3 space-y-3 leading-7 text-slate-700">
              <p><strong>Move between controls:</strong> Press <kbd>Tab</kbd> to move forward and <kbd>Shift</kbd> + <kbd>Tab</kbd> to move back.</p>
              <p><strong>Open a link or button:</strong> Press <kbd>Enter</kbd> or <kbd>Space</kbd> when the control is focused.</p>
              <p><strong>Skip repeated navigation:</strong> At the start of a page, press <kbd>Tab</kbd> to find “Skip to main content”, then press <kbd>Enter</kbd>.</p>
              <p><strong>Need more support?</strong> Your device may have its own accessibility settings, such as screen reading, magnification, captions or voice control.</p>
            </div>
          </details>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">What this website does</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-700">
            <li>Ask about the learning task, access preferences and level of guidance a person wants.</li>
            <li>Suggest a shortlist of existing tools and explain why each one appeared.</li>
            <li>Show alternatives, limitations and setup requirements so a supporter can compare options.</li>
            <li>Provide step-by-step instructions, an example prompt, and reminders about privacy and safe use.</li>
            <li>Let a user choose to copy, share or print a shortlist to discuss with a supporter or organisation.</li>
          </ul>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">Scope and limitations</h2>
          <div className="mt-4 space-y-4 leading-7 text-slate-700">
            <p>
              <strong>Current focus:</strong> learning and study tasks, including reading, writing,
              organising work, understanding spoken information and accessing visual information.
              This narrower focus keeps the tool list and instructions manageable for a student project.
            </p>
            <p>
              <strong>Not a diagnostic tool:</strong> the assessment does not identify a disability or
              replace advice from a learner, family, teacher, assistive-technology specialist or other
              support professional.
            </p>
            <p>
              <strong>Not a guarantee:</strong> a recommendation score reflects the answers selected
              in this website. It is not a formal accessibility audit, and the listed features may
              vary by device, browser, region, subscription or assistive technology.
            </p>
            <p>
              <strong>Not included:</strong> building a new AI system or claiming to make every third-party
              AI product accessible. The purpose is to help people navigate existing options and learn
              enough to decide what to try.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">How tools are included</h2>
          <p className="mt-3 leading-7 text-slate-700">
            The catalogue is a curated starting point, not an exhaustive list. Tools are included
            where their described functions may relate to the learning goals covered by this site.
            Because AI features and pricing change, users should check each official website before
            use. Future revisions should use feedback from learners and service partners to review
            which tools are relevant, which are missing, and whether the instructions are understandable.
          </p>
        </section>

        <section className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-950">Privacy and sharing</h2>
          <p className="mt-3 leading-7 text-slate-800">
            This version uses assessment answers to create recommendations in the current browser
            session and does not send them to a project database. The user must choose to copy, share
            or print a shortlist. Before entering information into a third-party AI tool, check its
            own privacy settings and avoid sharing sensitive information.
          </p>
        </section>
      </div>
    </main>
  );
}
