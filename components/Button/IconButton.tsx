import Link from "next/link";

type IconButtonProps = {
  href?: string;
  icon?: React.ReactNode;
  text?: string;
  onPress?: string;
  round?: boolean;
  small?: boolean;
};

const IconButton = ({
  text,
  icon,
  onPress,
  round,
  href,
  small,
}: IconButtonProps) => {
  return (
    <Link href={href || "#"}>
      <a
        className={`shadow rounded-2xl focus:outline-none focus:ring focus:border-blue-100 flex justify-center p-3 hover:bg-gray-100 bg-white ${
          round && "rounded-full"
        }`}
      >
        {text && (
          <span className="text-blue-400 font-semibold mr-2">{text}</span>
        )}
        {icon}
      </a>
    </Link>
  );
};

export default IconButton;
