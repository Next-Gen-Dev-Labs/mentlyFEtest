'use client';

import Header from "@/components/Header";
import Manage from "@/components/Manage";
import Topbar from "@/components/Topbar";
import Widget from "@/components/Widget";
import Sidebar from "@/components/Sidebar";
import { useCollapse } from '@/contexts/collapse';

export default function Home() {
  const { sidebar, widgets } = useCollapse();

  return (
    <>
      <Sidebar toggleCollapse={sidebar.toggle} isCollapsed={sidebar.isCollapsed} />

      <main className={`flex-1 overflow-auto transition-all duration-300 ease-in-out ${sidebar.isCollapsed ? 'ml-20' : 'ml-60'}`}>
        <Topbar />
        <section className="pt-4 pb-6 px-8">
          <Header toggleCollapse={widgets.toggle} />
          <section className="grid gap-2">
            <Widget />
            {widgets.isCollapsed && <Manage toggleCollapse={widgets.toggle} />}
          </section>
        </section>
      </main>
    </>
  );
}
