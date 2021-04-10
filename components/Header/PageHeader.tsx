const SectionHeader = ({
  rightTitle,
  rightSubtitle,
  leftTitle,
  rightDescription,
  leftDescription,
}) => {
  const hasDescriptionText = rightDescription || leftDescription;
  return (
    <div className="flex flex-col justify-start w-full mb-4">
      <div
        className={`flex justify-between items-end gap-2 my-4 ${
          hasDescriptionText ? "mb-2" : ""
        }`}
      >
        <div className={`flex items-end gap-2`}>
          <span className="text-4xl leading-10 inline-block align-bottom">
            {rightTitle}
          </span>
          {rightSubtitle && (
            <span className="text-gray-400 mb-0.5 font-medium">
              {rightSubtitle}
            </span>
          )}
        </div>
        <div>
          <span className="text-2xl text-blue-400 font-semibold">
            {leftTitle}
          </span>
        </div>
      </div>
      <div
        className={`flex justify-between items-center ${
          hasDescriptionText && "mb-2"
        }`}
      >
        {rightDescription ? (
          <span className="text-gray-400 font-medium">{rightDescription}</span>
        ) : (
          <div />
        )}
        {leftDescription ? (
          <span className="text-gray-400 font-medium">{leftDescription}</span>
        ) : (
          <div />
        )}
      </div>
      <div className="w-full border-b border-gray-100" />
    </div>
  );
};

export default SectionHeader;
