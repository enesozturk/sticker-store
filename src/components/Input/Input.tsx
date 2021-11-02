import { forwardRef } from "react";

type InputProps = {
  title?: string;
  error?: {
    type: string;
    message: string;
  };
} & React.InputHTMLAttributes<HTMLInputElement>;

type InputRef = React.ForwardRefExoticComponent<HTMLInputElement>;

const Input = forwardRef(
  ({ title, error, ...props }: InputProps, ref: InputRef) => {
    return (
      <div className="flex flex-col justify-start items-start flex-1">
        <span className="text-gray-600 font-medium text-sm mb-1">{title}</span>
        <input
          ref={ref}
          {...props}
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="px-4 py-1 border border-gray-300 rounded-md focus:outline-none h-10 w-full shadow"
        />
      </div>
    );
  }
);

export default Input;
