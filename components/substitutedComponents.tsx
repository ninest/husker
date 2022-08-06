import { Button } from "@/components/button/Button";
import clsx from "clsx";
import Image from "next/image";
import { Block } from "./Block";
import { Video } from "./embed/Video";
import { YoutubeEmbed } from "./embed/YoutubeEmbed";
import { Expandable } from "./Expandable";
import { Icon } from "./Icon";
import { LinkButtonGrid } from "./link/LinkButton";
import { SmartLink } from "./SmartLink";
import { Spacer } from "./util/Spacer";

export const substitutedComponents = {
  Block,
  Expandable,
  a: ({ className, href, ...props }: any) => {
    return (
      <SmartLink
        // @ts-ignore
        href={href}
        className={clsx(className, "underline")}
      >
        {props.children}
      </SmartLink>
    );
  },
  Button,
  Spacer,
  LinkButtonGrid,
  /* Next image */
  Image: (props: any) => {
    const src = (props.src as string).startsWith("/")
      ? `${props.src}`
      : // Compatibility with mdx-bundled images
        `/notouchy/${props.src}`;

    return (
      <div className="flex justify-center mobile-full-bleed">
        <Image
          {...props}
          alt={props.alt}
          src={src}
          className="md:rounded bg-gray-lightest"
        ></Image>
      </div>
    );
  },
  YoutubeEmbed,
  Icon,
  Video,
};
