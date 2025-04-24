"use client";

import Header from "@/components/Header";
import Manage from "@/components/Manage";
import Topbar from "@/components/Topbar";
import Widget from "@/components/Widget";
import Sidebar from "@/components/Sidebar";
import { useWidgets } from '@/hooks/useWidgets';
import { useCollapse } from '@/contexts/collapse';

export default function Home() {
  const { widgets } = useWidgets();
  const { sidebar, widgets: widgetsContext } = useCollapse();

  return (
    <>
      <Sidebar toggleCollapse={sidebar.toggle} isCollapsed={sidebar.isCollapsed} />
      <main className={`transition-all duration-300 ease-in-out ${sidebar.isCollapsed ? 'ml-20' : 'ml-60'}`}>
        <Topbar toggleCollapse={sidebar.toggle} />
        <section className="py-4 px-8">
          <Header toggleCollapse={widgetsContext.toggle} />
          <section className="grid grid-cols-3 gap-4">
            {widgets.map(widget => <Widget key={widget.id} widget={widget} />)}
            {widgetsContext.isCollapsed && <Manage toggleCollapse={widgetsContext.toggle} />}
          </section>
        </section>
      </main>
    </>
  );
}
