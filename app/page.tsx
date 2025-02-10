import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";
import Index from "@/components/views/ProgramView";
import MobileSidebar from "@/components/sidebar/MobileSidebar";

export default function Home() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-[auto_1fr] font-[family-name:var(--font-chivo)] min-w-screen h-screen max-w-[1440px] animate-fade-in">
      <Sidebar />
      <MobileSidebar />
      <div>
        <Header />
        <Index />
      </div>
    </main>
  );
}
