import Image from "next/image"
import { recent } from "@/data"
import Header from "./reusables/menu"
export default function RecentActivities() {
    return(
        <div className="w-full md:w-[49%] lg:w-[280px] xl:w-[320px] bg-white rounded-xl p-6 space-y-[30px]">
            <Header head='Recent Activities'/>
            <div className="flex flex-col gap-4">
                {recent.map((item)=>(
                      <div key={item.id} className="flex items-start gap-2">
                      <Image src={item.image} alt={item.title}/>
                      <div className="">
                          <h4 className="text-sm font-bold mb-1.5">{item.title}</h4>
                          <p className="text-xs text-[#707991] mb-2">{item.activity}</p>
                          <p className="text-xs text-[#707991]">{item.time}</p>
                      </div>
                  </div>
                ))}
            </div>
        </div>
    )
}