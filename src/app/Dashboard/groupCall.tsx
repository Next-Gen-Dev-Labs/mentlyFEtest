import { Calls } from "@/utils/Calls"
import { CallCard } from "../components/dashboard/GroupCallCard"

export const GroupCall =()=> {

  return(
    <div className="flex gap-2.5 overflow-x-auto mb-2">
      {Calls?.map((item)=> (
        <CallCard key={item?.id} title={item?.title} session={item?.session} image={item?.image}/>
      ))}
    </div>
  )
}