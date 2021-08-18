export function GuideLayout({ children, sideClassName = "", side }) {
  return (
    <div className="space-x flex w-full flex-col-reverse lg:space-x-20 lg:flex-row">
      <div className="space-y lg:w-4/6">{children}</div>
      <aside className="hidden lg:w-2/6 lg:block lg:-mt-20 flex-1 mb-xl lg:mb-0">
        <div className="lg:pt-20 lg:sticky lg:top-0 lg:overflow-y-scroll lg:max-h-screen">
          {side}
        </div>
      </aside>
    </div>
  );
}
