import Image from "next/image";

export const substitutedComponents = {
  /* Use Nextjs optimized images */
  Image: function GuideImage(props) {
    const src = `/notouchy/${props.src}`;

    return (
      <div className="next-image">
        <Image alt="Image from guide" {...props} src={src}></Image>
      </div>
    );
  },
};
