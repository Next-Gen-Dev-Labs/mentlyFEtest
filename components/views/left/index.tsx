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
    <div className='w-full max-w-[520px] bg-header'>
      {/* top */}
      <Top />
      <Middle />
      <Bottom items={programList} />
    </div>
  )
}
