import { HTMLAttributes } from "react";
import Image from "next/image";

interface MarkdocImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export const MarkdocImage = ({ src, alt, height, width }: MarkdocImageProps) => {
  if (height && width) {
    return (
      <span className="flex justify-center mobile-full-bleed">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="md:rounded bg-gray-lightest dark:bg-gray-darkest"
        />
      </span>
    );
  }

  return (
    <span className="flex justify-center mobile-full-bleed">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
    </span>
  );
};
