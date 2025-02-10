import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h2 className="text-4xl font-bold">Welcome to Mently</h2>
      <span className="hover:underline"><Link href={'/main/products'}>Go to Dashboard</Link></span>
    </div>
  );
}
