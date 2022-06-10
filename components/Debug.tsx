interface DebugProps {
  data: any;
}

export const Debug = ({ data }: DebugProps) => {
  return (
    <pre className="mt-xl bg-dark p-sm text-gray-300 text-sm rounded-lg">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};
