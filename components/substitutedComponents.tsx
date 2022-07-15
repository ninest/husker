import clsx from "clsx";
import Image from "next/image";
import { Block } from "./Block";
import { Button } from "./Button";
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
    const src = `/notouchy/${props.src}`;
    // const src = `${props.src}`;

    return (
      <div className="flex justify-center mobile-full-bleed">
        <Image
          {...props}
          src={src}
          className="md:rounded bg-gray-lightest"
        ></Image>
      </div>
    );
  },
  YoutubeEmbed,
  Icon,
};
