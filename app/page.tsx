import Link from "next/link";

export default function Home() {
  return (
    <div className="grid min-h-screen p-8 place-content-center place-items-start">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <h1>Menlty Site</h1>
        <Link
          href={"/dashboard"}
          className="bg-sidebar text-white p-3 rounded-md px-6 font-semibold"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}
