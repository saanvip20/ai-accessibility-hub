const tasks = [
  {
    value: "Reading",
    title: "Read and understand information",
    detail: "Make long text, articles or instructions easier to access.",
  },
  {
    value: "Learning",
    title: "Learn or study",
    detail: "Understand topics, revise notes or practise a skill.",
  },
  {
    value: "Writing",
    title: "Write and express ideas",
    detail: "Plan writing, improve clarity or draft messages and assignments.",
  },
  {
    value: "Organisation",
    title: "Plan and organise",
    detail: "Break tasks into steps, plan a schedule or organise information.",
  },
  {
    value: "Read visual text and identify objects",
    title: "Read visual text or identify objects",
    detail: "Read printed text or get descriptions of objects and surroundings.",
  },
  {
    value: "Follow spoken discussions",
    title: "Follow spoken discussions",
    detail: "Use captions or transcripts to follow speech and discussions.",
  },
];

export default function StepTwo({ answers, setAnswers }) {
  function toggleTask(task) {
    const selected = answers.tasks.includes(task);
    setAnswers({
      ...answers,
      tasks: selected
        ? answers.tasks.filter((item) => item !== task)
        : [...answers.tasks, task],
    });
  }

  return (
    <fieldset className="mt-10">
      <legend className="text-2xl font-bold">
        What would you like support with?
      </legend>
      <p id="task-help" className="mt-2 text-gray-700">
        Choose one or more goals. These describe the task you want help with,
        not a diagnosis or a label for you.
      </p>

      <div
        className="mt-6 grid gap-4 md:grid-cols-2"
        aria-describedby="task-help"
      >
        {tasks.map((task) => {
          const selected = answers.tasks.includes(task.value);
          return (
            <button
              key={task.value}
              type="button"
              aria-pressed={selected}
              onClick={() => toggleTask(task.value)}
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
                    {task.title}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-slate-700">
                    {task.detail}
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-slate-700" aria-live="polite">
        {answers.tasks.length} {answers.tasks.length === 1 ? "goal" : "goals"} selected.
      </p>
    </fieldset>
  );
}
