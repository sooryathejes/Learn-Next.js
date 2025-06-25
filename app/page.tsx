import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <Link href="/dashboard">Dash Board</Link>
    </div>
  );
}
