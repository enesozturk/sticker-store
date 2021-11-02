const Section = ({
  title = "",
  description = "Lorem ipsum dolor si amet.",
}) => {
  return (
    <section className={`flex flex-col bg-gray-50 p-16 rounded-2xl mb-8`}>
      <span className="text-6xl text-gray-600 font-semibold mb-2">{title}</span>
      <span className="text-xl text-gray-400">{description}</span>
    </section>
  );
};

export default Section;
