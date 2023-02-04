import clsx from "clsx";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorType?: "primary" | "secondary";
  children: any;
}

export function Button({
  children,
  colorType = "primary",
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "p-4 flex items-center justify-center gap-2 bg-blue-900 rounded-lg text-sm font-bold hover:bg-blue-500 transition-colors",
        {
          ["bg-purple-900 hover:bg-purple-500"]: colorType === "secondary",
        }
      )}
    >
      {children}
    </button>
  );
}
