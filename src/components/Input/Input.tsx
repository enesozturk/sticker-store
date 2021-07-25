const Input = ({ placeholder }) => {
  return (
    <div className="flex flex-col justify-start items-start flex-1">
      <input
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="px-4 py-2 border border-gray-200 rounded-md focus:outline-none h-12 w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
