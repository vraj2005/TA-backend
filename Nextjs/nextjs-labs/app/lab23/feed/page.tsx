import Link from "next/link";

export default function FeedPage() {
  return (
    <div>
      <h1>Feed Page</h1>

      <Link href="/lab23/photo/1">Open Photo 1</Link>
      <br />
      <Link href="/lab23/photo/2">Open Photo 2</Link>
    </div>
  );
}
