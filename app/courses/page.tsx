import Link from "next/link";

export default function CoursesPage() {
  return (
    <main className="space-x my-9">
      Husker Courses coming soon! Until then, you may check out{" "}
      <Link href="https://coursky.vercel.app/?term=all" className="underline">
        the buggy beta
      </Link>
      .
    </main>
  );
}
