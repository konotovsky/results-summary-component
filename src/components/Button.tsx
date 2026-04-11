import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="bg-navy-950 font-hanken-grotesk w-full cursor-pointer rounded-full py-200 text-lg leading-[130%] font-bold tracking-[0px] text-white hover:bg-linear-to-b hover:from-[#7755FF] hover:to-[#2F2CE9]"
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
