import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Lab20Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link href="/lab20" style={{ marginRight: "15px" }}>Lab20 Home</Link>
        <Link href="/lab20/home" style={{ marginRight: "15px" }}>Home</Link>
        <Link href="/lab20/about" style={{ marginRight: "15px" }}>About</Link>
        <Link href="/lab20/contact">Contact</Link>
      </nav>

      <main style={{ padding: "20px" }}>
        {children}
      </main>
    </div>
  );
}


// https://tinyurl.com/Backend123321
