import Image from 'next/image'
import Setting from '/src/assets/icons/setting-2.svg'
export default function ProgramCard({program}) {
    return(
        <div className='w-[291px] md:w-[271px] xl:w-[291px] p-1.5 xl:p-3 rounded-[10px] bg-[#FFFFFF] shadow-lg space-y-1.5 flex-none'>
            <div className='relative'>
            <Image
            src={program.progImg}
            alt='Programs'
            className='w-full h-full object-cover'
            // style={{
            //     background: 'linear-gradient(178.73deg, rgba(12, 12, 12, 0.552) 0.9%, rgba(0, 0, 0, 0.69) 98.73%)'}}
            />
            <div className='absolute top-1 left-2.5 right-2'>
                <div className='flex justify-between items-start'>
                    <h2 className='text-white font-bold text-[16.42px]'>{program.title}</h2>
                    <Image 
                    src={Setting} 
                    alt='setting icon'
                    className='h-3.5 w-3.5 mt-1' 
                    />
                </div>
                <div className='px-2.5 py-0.5 bg-[#D4E0F3] w-[59px] rounded-[10px]'><span className='w-2.5 h-2.5 bg-[#0077FF] rounded-full'></span><p className='text-[7px] font-bold'>{program.program}</p></div>
            </div>
            </div>
            <div className='space-y-1.5'>
                <p className='text-[10.5px]'>{program.desc}</p>
                <div className='flex justify-between items-center '>
                    <div className='flex items-center gap-2'>
                        <Image src={program.hostImg} alt={program.host}/>
                        <p className='text-[8.34px] font-semibold'>Hosted by: {program.host}</p>
                    </div>
                    <div className='text-[8px] flex gap-[5.26px]'>
                        <button className='border border-[#6F01D0] text-[#6F01D0] px-4 py-1.5 rounded'>View Details</button>
                        <button className='bg-[#6F01D0] text-white px-4 py-1.5 rounded'>Analysis</button>
                    </div>
                </div>
            </div>
        </div>
    )
}