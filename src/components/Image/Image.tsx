import NextImage from "next/image";

type ImageProps = {
  src: string;
  size: number;
  className?: string;
};

const Image = ({ src, size, className, ...props }: ImageProps) => {
  return (
    <NextImage
      loader={({ src }) => src}
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
