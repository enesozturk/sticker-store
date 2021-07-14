const Button = ({ className = "", text, ...props }) => {
  return (
    <button
      {...props}
      className={`flex flex-row items-center py-2 px-4 transition bg-blue-100 hover:bg-blue-200 text-blue-400 rounded-xl font-medium focus:outline-none focus:ring focus:border-blue-100 h-12 ${className}`}
    >
      {text || "Button"}
    </button>
  );
};

export default Button;
