const needs = [
  {
    value: "Vision",
    title: "Vision access",
    detail: "For example, reading text aloud, screen-reader use or image descriptions.",
  },
  {
    value: "Hearing",
    title: "Hearing access",
    detail: "For example, captions or text transcripts of spoken information.",
  },
  {
    value: "Cognitive / Learning",
    title: "Reading, learning or processing support",
    detail: "For example, simpler explanations, clear structure or fewer steps at once.",
  },
  {
    value: "Motor",
    title: "Motor or alternative input",
    detail: "For example, keyboard navigation or using an alternative way to select controls.",
  },
  {
    value: "No specific access support",
    title: "No specific access support",
    detail: "I mainly want help choosing a tool for the task I selected.",
  },
  {
    value: "Not sure",
    title: "I'm not sure yet",
    detail: "Show options to explore; I do not need to know the name of an access need.",
  },
];

const exclusiveChoices = ["No specific access support", "Not sure"];

export default function StepThree({ answers, setAnswers }) {
  function toggleNeed(need) {
    const selected = answers.accessibility.includes(need);
    let next;

    if (selected) {
      next = answers.accessibility.filter((item) => item !== need);
    } else if (exclusiveChoices.includes(need)) {
      next = [need];
    } else {
      next = [
        ...answers.accessibility.filter(
          (item) => !exclusiveChoices.includes(item)
        ),
        need,
      ];
    }

    setAnswers({ ...answers, accessibility: next });
  }

  return (
    <fieldset className="mt-10">
      <legend className="text-2xl font-bold">
        What access features or support may help?
      </legend>
      <p id="access-help" className="mt-2 leading-6 text-gray-700">
        Choose any that may be useful. You do not need a diagnosis or to know
        specialist terminology. If you are unsure, choose “I'm not sure yet”.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2" aria-describedby="access-help">
        {needs.map((need) => {
          const selected = answers.accessibility.includes(need.value);
          return (
            <button
              key={need.value}
              type="button"
              aria-pressed={selected}
              onClick={() => toggleNeed(need.value)}
              className={`min-h-28 rounded-xl border p-5 text-left transition ${
                selected
                  ? "border-blue-700 bg-blue-50 ring-2 ring-blue-200"
                  : "border-slate-300 bg-white hover:border-blue-500"
              }`}
            >
              <span className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-sm ${
                    selected
                      ? "border-blue-700 bg-blue-700 text-white"
                      : "border-slate-500"
                  }`}
                >
                  {selected ? "✓" : ""}
                </span>
                <span>
                  <span className="block font-semibold text-slate-900">
                    {need.title}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-slate-700">
                    {need.detail}
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-slate-700" aria-live="polite">
        {answers.accessibility.length
          ? `${answers.accessibility.length} access option${answers.accessibility.length === 1 ? "" : "s"} selected.`
          : "Select at least one option to continue."}
      </p>
    </fieldset>
  );
}
