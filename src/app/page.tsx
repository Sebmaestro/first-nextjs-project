import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <main className="">
      <div className="mt-4">
        <h1>This is the index page</h1>
      <Link className="p-4" href="/dashboard/button">button</Link>
      <Link href="/features">features</Link>
      </div>
    </main>
  );
}
