import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "date";
  className?: string;
}

// El <label> envuelve al <input>: no necesita for/id y evita el warning
// "Incorrect use of <label for=...>" que viste en el panel de Issues.
export const SearchField = ({
  icon: Icon,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
}: Props) => {
  return (
    <label className={`flex min-w-0 flex-1 cursor-text flex-col gap-1 px-4 py-2 ${className}`}>
      <span className="flex items-center gap-2 text-sm font-bold text-gray-800">
        <Icon size={16} className="text-[#572a85]" />
        {label}
      </span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-sm text-gray-600 outline-none placeholder:text-gray-400"
      />
    </label>
  );
};