import React from "react";

type TextAreaProps = {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
};

const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  value,
  onChange,
  required = false,
}) => (
  <div className="space-y-1">
    <label htmlFor={id} className="text-sm font-medium text-light-secondary">
      {label}
    </label>
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full px-4 py-2 shadow-sm bg-primary-600 rounded-md focus:ring-1 focus:ring-yellow-shade outline-none border-none"
      rows={4}
      required={required}
    />
  </div>
);

export default TextArea;
