import Bottom from "./bottom";
import Middle from "./middle";
import Top from "./top";

const programList = [
  {
    heading: 'program information text 1'
  },
  {
    heading: 'program information text 2'
  },
]


export default function Left() {
  return (
    <div className='w-full x-md:max-w-[500px] lg:max-w-[520px] bg-header mt-3 py-2 px-4'>
      <Top />
      <Middle />
      <Bottom items={programList} />
    </div>
  )
}
