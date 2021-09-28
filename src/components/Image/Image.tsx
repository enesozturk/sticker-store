import NextImage from "next/image";

type ImageProps = {
  local?: boolean;
  src?: string;
  size: number;
  className?: string;
};

const Image = ({ local, src, size, className, ...props }: ImageProps) => {
  return (
    <NextImage
      src={src}
      alt="product image"
      width={size}
      height={size}
      className={className}
      {...props}
    />
  );
};

export default Image;
