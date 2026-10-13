import { useState } from "react";
import { useNavigate } from "react-router-dom";

import StepOne from "../components/assessment/StepOne";
import StepTwo from "../components/assessment/StepTwo";
import StepThree from "../components/assessment/StepThree";
import StepFour from "../components/assessment/StepFour";

const stepNames = [
  "Who is this assessment for?",
  "What would you like support with?",
  "What access features may help?",
  "How would you like to be guided?",
];

export default function Assessment() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState("");

  const [answers, setAnswers] = useState({
    userType: "",
    tasks: [],
    accessibility: [],
    experience: "",
  });

  function validateCurrentStep() {
    if (currentStep === 1 && !answers.userType) {
      return "Please choose who this assessment is for.";
    }
    if (currentStep === 2 && answers.tasks.length === 0) {
      return "Please choose at least one task you would like support with.";
    }
    if (currentStep === 3 && answers.accessibility.length === 0) {
      return "Please choose an access option, including “I'm not sure yet” if you're unsure.";
    }
    if (currentStep === 4 && !answers.experience) {
      return "Please choose the type of guidance you prefer.";
    }
    return "";
  }

  function nextStep() {
    const validationMessage = validateCurrentStep();
    if (validationMessage) {
      setError(validationMessage);
      return;
    }
    setError("");

    if (currentStep < 4) {
      setCurrentStep((step) => step + 1);
    } else {
      navigate("/results", { state: answers });
    }
  }

  function previousStep() {
    setError("");
    if (currentStep > 1) setCurrentStep((step) => step - 1);
  }

  function renderStep() {
    const props = { answers, setAnswers };
    switch (currentStep) {
      case 1: return <StepOne {...props} />;
      case 2: return <StepTwo {...props} />;
      case 3: return <StepThree {...props} />;
      case 4: return <StepFour {...props} />;
      default: return null;
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-10">
        <div className="mb-8" aria-label={`Step ${currentStep} of 4`}>
          <div className="mb-2 flex flex-wrap justify-between gap-2 text-sm font-medium text-slate-700">
            <span>Step {currentStep} of 4</span>
            <span>{Math.round((currentStep / 4) * 100)}% complete</span>
          </div>
          <div
            className="h-3 w-full rounded-full bg-slate-200"
            role="progressbar"
            aria-valuemin={1}
            aria-valuemax={4}
            aria-valuenow={currentStep}
            aria-valuetext={`Step ${currentStep} of 4: ${stepNames[currentStep - 1]}`}
          >
            <div
              className="h-3 rounded-full bg-blue-700 transition-[width] duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </div>

        <h1 tabIndex="-1" className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Find tools that may help you
        </h1>
        <p className="mt-3 max-w-2xl leading-7 text-slate-700">
          Answer four short questions to explore AI tools for learning and study.
          You do not need technical knowledge, and there are no right or wrong answers.
          Choose the option that sounds closest to what you need. Your answers are used
          in this browser session to create recommendations.
        </p>
        <p className="mt-3 rounded-lg bg-slate-100 p-4 leading-6 text-slate-800">
          <strong>How to use this guide:</strong> Select an answer, then choose
          <strong> Continue</strong>. You can use <strong>Previous</strong> to change
          an answer. A star or special technical term is not required. If you are unsure,
          choose “I'm not sure yet” where available.
        </p>

        <div className="mt-4 rounded-lg border-l-4 border-blue-700 bg-blue-50 p-4 text-sm leading-6 text-slate-800">
          This is a tool-finding guide, not a clinical assessment. A match does
          not guarantee that a tool will work with every disability, device or
          assistive technology.
        </div>

        <div key={currentStep} aria-live="polite" aria-atomic="true">
          <p className="sr-only">Step {currentStep} of 4: {stepNames[currentStep - 1]}</p>
          {renderStep()}
        </div>

        {error && (
          <p
            className="mt-6 rounded-lg border border-red-300 bg-red-50 p-4 font-medium text-red-900"
            role="alert"
          >
            {error}
          </p>
        )}

        <div className="mt-10 flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={previousStep}
            disabled={currentStep === 1}
            className="min-h-12 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={nextStep}
            className="min-h-12 rounded-xl bg-blue-700 px-8 py-3 font-semibold text-white hover:bg-blue-800"
          >
            {currentStep === 4 ? "Show my recommendations" : "Continue"}
          </button>
        </div>
      </div>
    </main>
  );
}
