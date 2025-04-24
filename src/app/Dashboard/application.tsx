import { ApplicationCard } from "../components/dashboard/ApplicationCard"
import { Text } from "../components/ui/Text"

export const Applications =()=> {

  const Mentor = [
    {
      Name:'Maxwell Smith',
      email:'maxwellsmith@gmail.com',
      image:'Max.svg',
      More:['Product Designer','4years Experience','Lagos, Nigeria','GMT +1']
    }
  ]

  const Students = [
    {
      Name:'Maxwell Smith',
      email:'maxwellsmith@gmail.com',
      image:'Max.svg',
    },
    {
      Name:'Maxwell Smith',
      email:'maxwellsmith@gmail.com',
      image:'Max.svg',
    },
    {
      Name:'Maxwell Smith',
      email:'maxwellsmith@gmail.com',
      image:'Max.svg',
    },
    {
      Name:'Maxwell Smith',
      email:'maxwellsmith@gmail.com',
      image:'Max.svg',
    },
  ]
  return(
    <div className="space-y-5 h-font w-full">
      <div className="w-full space-y-2">
        <div className="flex w-60 h-7 items-center pl-6">
          <Text size='2xs' color='text-[#7d8da6]' className=''>Mentor</Text>
        </div>
        <div className="">
          {
            Mentor?.map((item, index)=>(
              <ApplicationCard key={index}
                role="Mentors"
                image={item?.image}
                email={item?.email}
                Name={item?.Name}
                More={item?.More}
              />
            ))
          }
        </div>
      </div>
      <div className="w-full space-y-2 ">
        <div className="flex w-60 h-7 items-center pl-6">
          <Text size='2xs' color='text-[#7d8da6]' className=''>Student</Text>
        </div>
        <div className="">
          {
            Students?.map((item,index)=>(
              <ApplicationCard key={index}
                role="Mentors"
                image={item?.image}
                email={item?.email}
                Name={item?.Name}
              />
            ))
          }
        </div>  
      </div>
    </div>
  )
}