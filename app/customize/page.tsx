"use client";

import { useState } from "react";
import StepProgress from "./components/StepProgress";

const TOTAL_STEPS = 4;

export default function CustomizePage() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < TOTAL_STEPS) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      {/* Header */}
      <h1 className="mb-6 text-2xl font-semibold">
        Customize Your Magnet
      </h1>

      {/* Progress Bar */}
      <StepProgress currentStep={step} totalSteps={TOTAL_STEPS} />

      {/* Step Content */}
      <div className="mt-10 rounded-lg border bg-white p-6">
        {step === 1 && <p>📸 Upload your photo</p>}
        {step === 2 && <p>🔘 Select magnet shape</p>}
        {step === 3 && <p>👀 Preview your magnet</p>}
        {step === 4 && <p>🛒 Add to cart</p>}
      </div>

      {/* Navigation */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={prevStep}
          disabled={step === 1}
          className="rounded border px-6 py-2 text-sm disabled:opacity-50"
        >
          Back
        </button>

        <button
          onClick={nextStep}
          disabled={step === TOTAL_STEPS}
          className="rounded bg-black px-6 py-2 text-sm text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
