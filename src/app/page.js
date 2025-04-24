import Layout from "@/components/dashboard/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flexCol gap-8 h-[100vh] " >
      <h1 className="text-5xl font-bold text-blue-700 animate-jump-in animate-delay-300 animate-once " > Mently Frontend Test </h1>
      <h3 className="text-indigo-200 italic text-2xl animate-wiggle-more animate-infinite " > Presented by Amadi Chile </h3>
      <Link className="border-1 border-gray-400 py-1 px-2 rounded block mt-[30px] hover:bg-indigo-200 hover:text-white hover:animate-shake motion-reduce:animate-none " href="/dashboard" >Dashboard</Link>
    </div>
  );
}
