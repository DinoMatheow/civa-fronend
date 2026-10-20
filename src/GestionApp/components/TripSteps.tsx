
type TripStepsProps = {
  currentStep?: 1 | 2 | 3;
};

const steps = [
  { number: 1, label: "Ida" },
  { number: 2, label: "Pago" },
  { number: 3, label: "Confirmación" },
] as const;

export const TripSteps = ({ currentStep = 1 }: TripStepsProps) => {
  return (
    <div className="flex h-[46px] w-full overflow-hidden rounded-full bg-[#cecece]">
      {steps.map((step) => {
        const isActive = step.number === currentStep;

        return (
          <div
            key={step.number}
            className={`relative flex flex-1 items-center justify-center gap-3 rounded-full px-2 text-sm transition-colors ${
              isActive
                ? "z-10 bg-[#592985] text-white"
                : "text-white"
            }`}
          >
            <span
              className={`flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-full border ${
                isActive
                  ? "border-white/80 text-white"
                  : "border-white/80 text-white"
              }`}
            >
              {step.number}
            </span>

            <span className="whitespace-nowrap font-medium">
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};
