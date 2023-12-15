import { ButtonHTMLAttributes, ReactNode } from "react";
import { WidthType } from "../../types";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  width?: WidthType;
}

const Button = ({ className, children, width = "w-full", ...rest }: IProps) => {
  return (
    <button
      className={`${className} ${width}  p-2 rounded-md  text-white font-semibold`}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
