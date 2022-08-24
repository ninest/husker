import clsx from "clsx";

interface IFrameProps {
  src: string;
  border?: boolean;
}

export const IFrame = ({ src, border = false }: IFrameProps) => {
  return (
    <div className={clsx({ border }, "rounded-md overflow-hidden")}>
      <iframe
        className="w-full h-64 md:h-52 lg:h-96 bg-gray-lightest dark:bg-gray-darkest"
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
};
