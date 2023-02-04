import { InputHTMLAttributes } from "react";

export function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...rest}
      className="flex-1 p-4 bg-neutral-800 rounded-lg border border-neutral-600 text-base leading-snug placeholder:text-gray-300 focus:outline-none focus:border-purple-900 transition-colors"
      type="text"
    />
  );
}
