import Image from "next/image";

export const substitutedComponents = {
  /* Use Nextjs optimized images */
  Image: (props) => {
    const src = `/notouchy/${props.src}`;

    return (
      <div className="next-image">
        <Image {...props} src={src}></Image>
      </div>
    );
  },
};
