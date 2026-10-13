const levels = [
  {
    value: "Beginner",
    title: "I would like step-by-step support",
    detail: "I may need help setting up an account or finding what to click.",
  },
  {
    value: "Intermediate",
    title: "I can follow simple instructions",
    detail: "I use some digital tools but appreciate clear guidance.",
  },
  {
    value: "Advanced",
    title: "I usually use digital tools independently",
    detail: "I am comfortable exploring a new tool with minimal guidance.",
  },
];

export default function StepFour({ answers, setAnswers }) {
  return (
    <fieldset className="mt-10">
      <legend className="text-2xl font-bold">
        How would you like to be guided?
      </legend>
      <p className="mt-2 leading-6 text-gray-700">
        This helps us prioritise beginner-friendly instructions. There is no
        right or wrong answer.
      </p>

      <div className="mt-6 space-y-4">
        {levels.map((level) => {
          const selected = answers.experience === level.value;
          return (
            <button
              key={level.value}
              type="button"
              aria-pressed={selected}
              onClick={() =>
                setAnswers({ ...answers, experience: level.value })
              }
              className={`w-full rounded-xl border p-5 text-left transition ${
                selected
                  ? "border-blue-700 bg-blue-50 ring-2 ring-blue-200"
                  : "border-slate-300 bg-white hover:border-blue-500"
              }`}
            >
              <span className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-sm ${
                    selected
                      ? "border-blue-700 bg-blue-700 text-white"
                      : "border-slate-500"
                  }`}
                >
                  {selected ? "✓" : ""}
                </span>
                <span>
                  <span className="block font-semibold text-slate-900">
                    {level.title}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-slate-700">
                    {level.detail}
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
