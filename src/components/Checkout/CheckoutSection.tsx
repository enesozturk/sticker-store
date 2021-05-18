type CheckoutSectionProps = {
  step: string;
  title: string;
  description: string;
  isOpen?: boolean;
  content?: React.ReactNode;
  onPress?: (arg: number) => void;
};

const CheckoutSection = ({
  step,
  title,
  description,
  isOpen = false,
  content,
  onPress,
}: CheckoutSectionProps) => {
  const index = parseInt(step);

  return (
    <button
      className="bg-white rounded-2xl flex flex-row px-6 py-4 w-full border border-gray-1 mb-2 focus:outline-none"
      onClick={() => {
        onPress(index);
      }}
    >
      <div className="w-full flex items-start">
        <span className="bg-gray-100 text-gray-400 rounded-full w-12 h-12 flex justify-center items-center text-center mr-4 font-semibold">
          {step}
        </span>
        <div className="flex flex-col items-start justify-start w-full">
          <span className="text-xl font-semibold w-full text-left leading-10">
            {title}
          </span>
          <p className="text-gray-400  mb-4">{description}</p>

          {isOpen && content}
        </div>
      </div>
    </button>
  );
};

export default CheckoutSection;
