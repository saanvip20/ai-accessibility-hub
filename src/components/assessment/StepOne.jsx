export default function StepOne({ answers, setAnswers }) {
  const options = [
    {
      value: "user",
      title: "I am looking for support for myself",
      detail: "Help me explore tools for my own learning or study tasks.",
      icon: "👤",
    },
    {
      value: "supporter",
      title: "I support a learner",
      detail: "Help me explore options with a student, family member or person I support.",
      icon: "🤝",
    },
  ];

  return (
    <fieldset className="mt-10">
      <legend className="text-2xl font-bold">Who is this assessment for?</legend>
      <p className="mt-2 leading-6 text-gray-700">
        The recommendations are intended to support learning and study. You can
        complete this yourself or with someone who supports you.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {options.map((option) => {
          const selected = answers.userType === option.value;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={selected}
              onClick={() =>
                setAnswers({ ...answers, userType: option.value })
              }
              className={`min-h-36 rounded-xl border p-6 text-left transition ${
                selected
                  ? "border-blue-700 bg-blue-50 ring-2 ring-blue-200"
                  : "border-slate-300 bg-white hover:border-blue-500"
              }`}
            >
              <span className="text-2xl" aria-hidden="true">{option.icon}</span>
              <span className="mt-3 block text-lg font-semibold text-slate-900">
                {option.title}
              </span>
              <span className="mt-2 block leading-6 text-slate-700">
                {option.detail}
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
