import { MentorCard } from "../components/dashboard/MentorCard"

export const Mentors =()=> {

  const Mentors = [
    {
      Name:'Maxwell Smith',
      role:'Product Designer',
      image:'Max.svg',
    },
    {
      Name:'Timmy Bagwells',
      role:'Developer',
      image:'Max.svg',
    },
    
  ]
  return (
    <div className="space-y-4 w-full p-3">
      {Mentors?.map((item, index)=>(
        <MentorCard key={index} Name={item?.Name} role={item?.role} image={item?.image} />
      ))}

      <button 
        className="bg-primary-100 w-full justify-center h-11 flex items-center px-4 text-primary-lite text-nowrap rounded-3xl font-chivo font-semibold text-sm hover:opacity-80 transform-color duration-200 ease-in-out">
          See all
      </button>
    </div>
  )
}
