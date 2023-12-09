import Link from "next/link";

interface SimpleSidebarLinkButtonProps {
  href: string;
  title: string;
}

export function SimpleSidebarLinkButton({ href, title }: SimpleSidebarLinkButtonProps) {
  return (
    <>
      <div>
        <Link
          href={href}
          className="py-1 -m-1 px-2 block font-medium rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {title}
        </Link>
      </div>
    </>
  );
}
