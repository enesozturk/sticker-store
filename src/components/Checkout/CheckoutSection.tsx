type CheckoutSectionProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  seperator?: boolean;
  className?: string;
};

const CheckoutSection = ({
  title,
  children,
  seperator,
  className,
}: CheckoutSectionProps) => {
  return (
    <>
      <div
        className={`flex flex-row w-full mb-2 focus:outline-none ${className}`}
      >
        <div className="w-full flex items-start">
          <div className="flex flex-col items-start justify-start w-full">
            <span className="text-xl font-semibold w-full text-left leading-10 mb-2">
              {title}
            </span>
            {children}
          </div>
        </div>
      </div>
      {seperator ? <div className="border-t border-gray-1 mx-2 my-6" /> : null}
    </>
  );
};

CheckoutSection.Content = ({ children }) => (
  <div className="w-full flex flex-col xs:flex-row gap-2 items-start xs:items-end mb-4">
    {children}
  </div>
);

export default CheckoutSection;
