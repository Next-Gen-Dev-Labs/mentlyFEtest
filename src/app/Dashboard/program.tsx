
import { ProgramCard } from "../components/dashboard/ProgramCard"
import { Programs } from "@/utils/Programs"

export const Program =()=> {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 w-full gap-6 h-fit ">
      {Programs?.map((item,idx)=>(
        <ProgramCard key={idx}
          title={item?.title}
          host={item?.host}
          session={item?.session}
          description={item?.description}
          image={item?.image}
        />
      ))}
    </div>
  )
}