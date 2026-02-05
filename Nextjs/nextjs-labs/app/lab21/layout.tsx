import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Lab21Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link href="/lab21" style={{ marginRight: "15px" }}>Lab21 Home</Link>
        <Link href="/lab21/template1" style={{ marginRight: "15px" }}>Template1</Link>
        <Link href="/lab21/template2" style={{ marginRight: "15px" }}>Template2</Link>
        <Link href="/lab21/template3">Template3</Link>
      </nav>

      <main style={{ padding: "20px" }}>
        {children}
      </main>
    </div>
  );
}


// https://tinyurl.com/Backend123321
