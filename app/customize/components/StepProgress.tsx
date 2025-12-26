interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepProgress({
  currentStep,
  totalSteps,
}: StepProgressProps) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full">
      <div className="mb-2 flex justify-between text-sm text-gray-600">
        <span>Step {currentStep} of {totalSteps}</span>
        <span>{Math.round(progressPercentage)}%</span>
      </div>

      <div className="h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-black transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
}
