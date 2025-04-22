import LeftCard from '@/components/LeftCard'
import RightCard from '@/components/RightCard'

const page = () => {
    function formatDate(date) {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
      const day = date.getDate();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();
    
      const getOrdinalSuffix = (day) => {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
          case 1: return "st";
          case 2: return "nd";
          case 3: return "rd";
          default: return "th";
        }
      };
    
      const formattedTime = date.toLocaleString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true 
      });
    
      return `${day}${getOrdinalSuffix(day)} ${months[monthIndex]} ${year}, ${formattedTime}`;
    }
    
    const now = new Date();

    const userDate = formatDate(now)

  return (
    <>
    <div className="flex laptop:hidden justify-end items-center text-[#809FB8] gap-2 pt-4 mr-2">
      <span className="font-normal text-sm">{userDate}</span>
      <span className="font-normal text-xs">(Local time)</span>
    </div>

    <section className='flex flex-col laptop:flex-row justify-between'>
      <div className='laptop:grow'>
        <LeftCard />
      </div>
      <div className='laptop:grow'>
        <RightCard userDate={userDate} />
      </div>
    </section>
    </>
  )
}

export default page