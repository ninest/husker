export function RelatedLinks({ children, title = "Related pages" }) {
  return (
    <>
      <section className="p-base rounded-lg bg-gray-100">
        <p className="text-base font-bold">{title}</p>
        <div>{children}</div>
      </section>
    </>
  );
}
