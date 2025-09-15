import Link from "next/link";
import Image from "next/image";

type PostCoverImageProps = {
  alt: string;
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};
export function PostCoverImage({
  imageProps,
  alt,
  linkProps,
}: PostCoverImageProps) {
  return (
    <Link
      {...linkProps}
      className={`${linkProps.className} w-full h-full overflow-hidden rounded-xl`}
    >
      <Image
        {...imageProps}
        className={`${imageProps.className} h-full w-full object-cover object-center group-hover:scale-105 transition`}
        alt={alt}
        priority
      />
    </Link>
  );
}
