type TypeButtonProps = {
  description: string;
  text: string;
  isActive?: boolean;
  onClick?: () => void;
};

const TypeButton = ({
  description,
  text,
  isActive,
  onClick,
}: TypeButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col justify-start bg-white hover:bg-gray-50 rounded-xl px-4 py-2 focus:outline-none border-2 border-gray-100 cursor-pointer ${
        isActive && "border-blue-200"
      }`}
    >
      <span className="text-semibold text-base">{text || "Button"}</span>
      <p className="text-left text-gray-500 text-sm">{description}</p>
    </div>
  );
};

export default TypeButton;
