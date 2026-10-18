import type { LucideIcon } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface Props {
  icon: LucideIcon;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
}

export const SearchSelect = ({
  icon: Icon, label, value, onChange, options,
  placeholder = "Selecciona", className = "",
}: Props) => (
  <label className={`flex min-w-0 flex-1 cursor-pointer flex-col gap-1 px-4 py-2 ${className}`}>
    <span className="flex items-center gap-2 text-sm font-bold text-gray-800">
      <Icon size={16} className="text-[#572a85]" />
      {label}
    </span>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-transparent text-sm text-gray-600 outline-none"
    >
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  </label>
);