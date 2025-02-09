import Image from 'next/image'

const InfoCard = ({ text }) => {
  return (
    <div className='flex gap-3 items-center bg-[#CEE1FB] py-2 px-4 rounded-sm'>
        <Image 
            src={'/icons/info-circle.png'}
            alt="info-circle icon"
            width={100}
            height={100}
            className="object-contain size-6"
        />
        <p className='text-[#777795] font-normal text-sm'>{text}</p>
    </div>
  )
}

export default InfoCard