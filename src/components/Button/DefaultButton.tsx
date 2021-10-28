import { Spinner } from "../Icon";

const Button = ({ className = "", text, loading = false, ...props }) => {
  return (
    <button
      {...props}
      onClick={loading ? null : props.onClick}
      className={`flex flex-row items-center py-2 px-4 transition bg-blue-100 focus:outline-none ${
        loading
          ? "cursor-default text-blue-300"
          : "text-blue-400 focus:ring focus:border-blue-100 cursor-pointer hover:bg-blue-200"
      } rounded-xl font-medium h-12 ${className}`}
    >
      {loading ? <Spinner /> : null}
      {text || "Button"}
    </button>
  );
};

export default Button;
