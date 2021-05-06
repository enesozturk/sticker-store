const Input = ({ title }) => {
  return (
    <div className="flex flex-col justify-start items-start flex-1">
      <span className="font-light text-xs text-gray-800">{title}</span>
      <input
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-100 h-12 w-full"
        placeholder="Type"
      />
    </div>
  );
};

export default Input;
