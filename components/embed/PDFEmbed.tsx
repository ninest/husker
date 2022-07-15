import clsx from "clsx";
import { HTMLAttributes } from "react";

interface PDFEmbedProps extends HTMLAttributes<HTMLDivElement> {
  external?: boolean;
  href: string;
}

export const PDFEmbed = ({
  external = false,
  href,
  ...props
}: PDFEmbedProps) => {
  return (
    <object
      data={href}
      type="application/pdf"
      className={clsx("w-full", props.className)}
      style={{
        height: "calc(100vh - 15rem)",
        ...props.style,
      }}
    >
      {/* For mobile where PDF embeds aren't supported, display using google */}
      <embed
        className={clsx("w-full", props.className)}
        style={{
          height: "calc(100vh - 10rem)",
          ...props.style,
        }}
        src={
          external
            ? `https://docs.google.com/viewer?url=${href}&embedded=true`
            : `https://docs.google.com/viewer?url=https://husker.vercel.app/${href}&embedded=true`
        }
      />
    </object>
  );
};
