import { AlertOctagon } from "lucide-react"
export default function Header(){
    return (
        <header className="bg-white p-3 shadow-md">
           <div className="flex justify-end">
            <div className="flex gap-5 ">
             <div className="relative">
              <AlertOctagon className="relative"/>
               <div className="absolute top-1 bg-red-400 rounded-full "/>           
                 </div>
            </div>
           </div>
        </header>
    )
}