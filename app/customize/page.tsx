"use client";

import { useState } from "react";
import StepProgress from "./components/StepProgress";
import ImageUploader from "./components/ImageUploader";
import ShapeSelector from "./components/ShapeSelector";
import styles from "./customize.module.css";

const TOTAL_STEPS = 4;

export default function CustomizePage() {
  const [step, setStep] = useState(1);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedShape, setSelectedShape] =
    useState<"circle" | "square" | null>(null);

  const nextStep = () => {
    if (step === 1 && !uploadedImage) return;
    if (step === 2 && !selectedShape) return;
    if (step < TOTAL_STEPS) setStep(step + 1);
  };

  const prevStep = () => step > 1 && setStep(step - 1);

  return (
    <div className="mx-auto max-w-5xl bg-white px-4 py-12 text-black">
      {/* Title */}
      <h1 className="mb-2 text-3xl font-semibold">
        Customize Your Magnet
      </h1>

      <p className="mb-8 text-sm">
        Upload your photo and create a custom fridge magnet
      </p>

      <StepProgress currentStep={step} totalSteps={TOTAL_STEPS} />

      {/* Content */}
      <div className={`${styles.container} mt-10 p-8`}>
        {step === 1 && (
          <>
            <h2 className={styles.sectionTitle}>Upload your photo</h2>
            <ImageUploader
              image={uploadedImage}
              onImageSelect={setUploadedImage}
            />
          </>
        )}

        {step === 2 && (
          <>
            <h2 className={styles.sectionTitle}>Select magnet shape</h2>
            <ShapeSelector
              selectedShape={selectedShape}
              onSelect={setSelectedShape}
            />
          </>
        )}

        {step === 3 && <p>Preview your magnet</p>}
        {step === 4 && <p>Add to cart</p>}
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        <button
          onClick={prevStep}
          disabled={step === 1}
          className="rounded-md border border-black bg-white px-6 py-2 text-sm disabled:opacity-40"
        >
          Back
        </button>

        <button
          onClick={nextStep}
          disabled={
            step === TOTAL_STEPS ||
            (step === 1 && !uploadedImage) ||
            (step === 2 && !selectedShape)
          }
          className="rounded-md bg-black px-6 py-2 text-sm text-white disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
