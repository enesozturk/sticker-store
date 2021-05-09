import NextImage from "next/image";

type ImageProps = {
  src: string;
  size: number;
};

const Image = ({ src, size, ...props }: ImageProps) => {
  const imageLoader = ({ src }) => {
    return process.env.NODE_ENV == "development"
      ? `http://localhost:1337${src}`
      : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${src}`;
  };

  return (
    <NextImage
      loader={imageLoader}
      src={src}
      alt="product image"
      width={size}
      height={size}
      {...props}
    />
  );
};

export default Image;
