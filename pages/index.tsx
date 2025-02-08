import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { ProgramEditor } from "@/components/program-editor"

export default function Page() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className=" md:block flex h-screen overflow-hidden bg-gray-50">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 ">
        <Header />
        <main className="flex-1 overflow-auto pt-16 md:pl-16">
          <ProgramEditor />
        </main>
      </div>
    </div>
  )
}

