import Image from 'next/image'
import Icon from '@/assets/icons/Vector (1).svg'
import { IoMdClose } from "react-icons/io";
export default function Widget({ onClose }) {
    const widgetData = [
        { id: 1, name: "Programs" },
        { id: 2, name: "Group Calls" },
        { id: 3, name: "Mentors" },
        { id: 4, name: "Recent Activities" },
        { id: 5, name: "Application" },
        { id: 6, name: "Earnings" },
        { id: 7, name: "Forum" },
        { id: 8, name: "Program Analysis" },
    ]
    return(
        <div className="bg-white w-full px-3 xl:px-11 py-3.5 xl:py-14 space-y-4 xl:space-y-16 overflow-y-scroll h-screen scrollbar-hide">
        <div className='flex justify-end border-b border-[#D7D7D7] pb-2.5'>
        <button onClick={onClose}><IoMdClose className='text-[#8D8D8D] text-2xl'/></button>
        </div>
        <div className='space-y-7'>
        <div className='space-y-4'>
            <h1 className="text-[#6F01D0] text-3xl font-bold">Manage Widget</h1>
            <p className="text-[#374557] text-sm">Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow.</p>
        </div>
        <ul className='space-y-2'>
            {widgetData.map((widget)=>(
                <li key={widget.id} className='flex items-center justify-between p-2'>
                    <div className='flex items-center gap-4'>
                    <Image src={Icon} alt='icon' className='h-4 w-4'/>
                    <h4 className="text-sm font-bold text-[#4F4F4F]">{widget.name}</h4>
                    </div>
                    <input
              type="checkbox"
              readOnly
              className="form-checkbox h-5 w-5 text-green-500 border-gray-300 rounded focus:ring-0"
            />
                </li>
            ))}
        </ul>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <button className='w-full bg-[#6F01D0] text-white py-3.5 px-6 rounded-md font-bold text-sm'>Save Changes</button>
            <button className='w-full border border-[#6F01D0] bg-gray-300 text-[#6F01D0] py-3.5 px-6 rounded-md ml-2 font-bold text-sm'>Reset to Default</button>
        </div>
    </div>
    )
}