import clsx from "clsx";

interface DebugProps {
  data: any;
  noSpaceAbove?: boolean;
}

export const Debug = ({ data, noSpaceAbove = false }: DebugProps) => {
  const isDev = process && process.env.NODE_ENV === "development";
  return (
    <>
      {isDev && (
        <pre
          className={clsx(
            { "mt-xl": !noSpaceAbove },
            "bg-[#112] p-sm text-gray-300 text-sm rounded-lg",
            "overflow-scroll max-w-full"
          )}
          suppressHydrationWarning
        >
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </>
  );
};
