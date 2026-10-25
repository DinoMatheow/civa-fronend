
import { useState } from "react";

type SortOption = "departure" | "price" | "duration";

type SortingBannerProps = {
  value?: SortOption;
  onChange?: (value: SortOption) => void;
};

const options = [
  { value: "departure", label: "Horario", secondLine: "de salida" },
  { value: "price", label: "Mejor", secondLine: "Precio" },
  { value: "duration", label: "Más", secondLine: "Rápido" },
] as const;

function SortIcon({ type }: { type: SortOption }) {
  if (type === "departure") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-10 w-10 shrink-0"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M24 12v12l8 7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "price") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-10 w-10 shrink-0"
        aria-hidden="true"
      >
        <path
          d="M24 7v5M24 36v5M17 10h14M17 38h14"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M12 17c0-5 5-8 12-8s12 3 12 8v14c0 5-5 8-12 8s-12-3-12-8V17Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle
          cx="24"
          cy="22"
          r="4"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M18 31c2-4 10-4 12 0"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-10 w-10 shrink-0"
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="26"
        r="15"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="24"
        cy="26"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M24 19v7l5 3M20 5h8M24 5v5M34 12l4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 21h5M4 26h4M6 31h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export const SortingBanner = ({
  value,
  onChange,
}: SortingBannerProps) => {
  const [internalValue, setInternalValue] =
    useState<SortOption>("departure");

  const selected = value ?? internalValue;

  const handleChange = (option: SortOption) => {
    setInternalValue(option);
    onChange?.(option);
  };

  return (

<div className="flex min-h-[66px] w-full items-center justify-around gap-1 rounded-full bg-[#ec1977] px-2 py-2 text-white sm:px-4">
    {options.map((option) => {
        const isSelected = selected === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => handleChange(option.value)}
            aria-pressed={isSelected}
            className="group flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full px-1 py-1 transition-colors hover:bg-white/10 sm:gap-3 sm:px-3"
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors sm:h-11 sm:w-11 ${
                isSelected
                  ? "bg-white text-[#ec1977]"
                  : "text-white"
              }`}
            >
              <SortIcon type={option.value} />
            </span>

            <span className="flex flex-col items-start text-left text-xs leading-[15px] sm:text-sm sm:leading-[17px]">
              <span className="font-medium">{option.label}</span>
              <span className="font-medium">{option.secondLine}</span>
            </span>

            {option.value === "departure" && isSelected && (
              <span className="hidden text-2xl font-light leading-none sm:inline">
                ↓
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
