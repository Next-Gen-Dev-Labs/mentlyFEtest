"use client"
import ProgramWidgetCard from '@/components/ui/reusable_widgets/programs_widget'
import { programs } from "@/db/dataBase";

export default function Programs() {
  return (
    <div className="container mx-auto md:px-6 px-4 py-8">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (<span key={index}><ProgramWidgetCard programs={programs} /></span>))}
      </div>
    </div>
  )
}
