type TypeButtonProps = {
  text: string;
  isActive?: boolean;
};

const TypeButton = ({ text, isActive }: TypeButtonProps) => {
  return (
    <button
      className={`bg-white rounded-xl px-4 py-2 focus:outline-none border-2 border-gray-100 ${
        isActive && "border-blue-100"
      }`}
    >
      {text || "Button"}
    </button>
  );
};

export default TypeButton;
