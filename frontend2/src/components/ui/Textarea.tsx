import { Ref, TextareaHTMLAttributes, forwardRef } from "react";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef(
  ({ ...rest }: IProps, ref?: Ref<HTMLTextAreaElement>) => {
    return (
      <textarea
        ref={ref}
        className="border-[1px] border-gray-300 shadow-md focus:border-indigo-600
       focus:outline-none focus:ring-1 focus:ring-indigo-600 
       rounded-lg px-3 py-3 text-md w-full bg-transparent"
        rows={6}
        {...rest}
      />
    );
  }
);

export default Textarea;
