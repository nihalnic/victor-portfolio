import React from "react";

type InputProps = {
  id: string;
  label: string;
  type: "text" | "email";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  required = false,
}) => (
  <div className="space-y-1">
    <label
      htmlFor={id}
      className="text-base font-medium text-light-secondary"
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className="mt-1 bg-primary-600 w-full h-12 rounded-md focus:ring-1 focus:ring-yellow-shade outline-none border-none px-3 "
      required={required}
    />
  </div>
);

export default Input;
