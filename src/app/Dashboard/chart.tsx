import DonutChart from "../components/dashboard/DonutChart"
import SelectComponent from "../components/ui/Select"
import { Text } from "../components/ui/Text"



export const Chart =()=> {

  return(
    <div className="w-full h-80 bg-[#e7ddff]/30 rounded-xl border border-borderCol">
      <div className="flex w-full justify-between items-center py-3 px-6 border-b border-borderCol">
        <Text size='lg' weight='semibold' color="text-font">
          Users
        </Text>
        <SelectComponent options={['All','Students', 'Mentors', 'Programs', 'Others']}/>
      </div>
      <div className="w-full">
        <DonutChart/>
      </div>
    </div>
  )
}