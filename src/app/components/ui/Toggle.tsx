
export const Toggle =({trigger, anime}:{trigger: ()=>void; anime:boolean})=> (
  <div onClick={trigger}
    className="flex items-center w-8 h-[18px] bg-[#F6F6F6] rounded-[18px] p-0.5">
    <div className={`w-[50%] h-full bg-[#1F0954] rounded-full ${anime ? 'translate-x-[100%]' : 'translate-x-0'} transition-transform duration-200 ease-linear hover:scale-105`}/>
  </div>
)