import React from "react";
import { cn } from "../utils/cn";

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function TextField({ label, value, onChange, className }: TextFieldProps) {
  return (
    <label className={cn("text-field", className)}>
      <span>{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input"
      />
    </label>
  );
}
