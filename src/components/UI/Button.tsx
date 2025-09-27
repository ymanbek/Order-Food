import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: ReactNode;
  variant: "primary" | "outline";
  size: "small" | "large";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

type ButtonCommonProps = ButtonProps & React.ButtonHTMLAttributes<HTMLElement>;

const variantClasses = {
  primary: {
    default:
      "bg-[#8a2b06] text-white cursor-pointer flex flex-row items-center min-h-[38px]",
    hover: "hover:bg-[#7e2a0a]",
    active: "active:bg-[#993108] active:scale-[1.01]",
  },
  outline: {
    default:
      "bg-transparent text-[#8a2b06] border border-[#8a2b06] cursor-pointer flex flex-row items-center min-h-[38px]",
    hover: "hover:bg-[#8a2b06] hover:text-white",
    active: "active:bg-[#993108] active:scale-[1.01]",
  },
};

const buttonSizeClasses = {
  small: "rounded-md px-[14px] py-[8px]",
  large: "rounded-3xl px-[32px] py-[10px] ",
};

const Button = (props: ButtonCommonProps) => {
  const { children, leftIcon, rightIcon, variant, size, ...rest } = props;

  const hasIconSpaces = rightIcon || leftIcon ? "gap-[10px]" : "gap-[0px]";
  const buttonClasses = variantClasses[variant];

  return (
    <button
      className={twMerge(
        buttonClasses.default,
        buttonClasses.active,
        buttonClasses.hover,
        buttonSizeClasses[size],
        hasIconSpaces
      )}
      {...rest}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};

export default Button;
