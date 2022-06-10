interface DebugProps {
  data: any;
}

export const Debug = ({ data }: DebugProps) => {
  const isDev = process && process.env.NODE_ENV === "development";
  return (
    <>
      {isDev && (
        <pre className="mt-xl bg-[#112] p-sm text-gray-300 text-sm rounded-lg">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </>
  );
};
