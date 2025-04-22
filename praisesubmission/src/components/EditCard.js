import Image from "next/image"
import InfoCard from "./InfoCard"
import ProgramCard from "./ProgramCard"
import TextEditor from "./TextEditor"

const EditCard = () => {
  return (
    <section className="flex flex-col gap-3">
        <div className="border border-[#1F0954] rounded-md py-4 px-6 flex items-center gap-6 my-2">
            <div className="flex items-center justify-center gap-3">
                <Image 
                    src={'/icons/t-text.png'}
                    alt="t-text icon"
                    width={100}
                    height={100}
                    className="object-cover size-7"
                />
                <Image 
                    src={'/icons/arrowdown.png'}
                    alt="arrowdown icon"
                    width={16.36}
                    height={5}
                    className="object-contain size-4"
                />
            </div>
            
            <p className="text-[#828282] text-sm">Describe Section Title e.g What you stand to learn</p>
        </div>

        <InfoCard text={'Provide your prefered title for this section i.e What’s in this Program for you?'}/>

        <TextEditor />

        <InfoCard text={'Provide a clear and concise description/information of your program. This can include objectives, goals, necessary resources, or any specific instructions..'}/>
        
        <div className="flex flex-col cursor-default">
            <div className="hover:bg-[#CEE1FB] px-2 hover:bg-opacity-20 border border-[#1F0954] rounded-md py-3 flex flex-col justify-center items-center my-5">
                <p className="text-[#494A71] text-base font-semibold">+ Add new section</p>
                <p className="text-[#777795] text-sm">(maximum number of sections to add is 3)</p>
            </div>
            <div className="flex items-center gap-2 -mt-2">
                <input type="checkbox" id="check" className="size-4 border border-[#4D4D4D]" />
                <label htmlFor="check" className="text-[#333333] text-sm">Show this section when Published</label>
            </div>
        </div>

        <div className="flex flex-col gap-3 mt-14">
            <ProgramCard text={'Program Information Text 1'} />
            <ProgramCard text={'Program Information Text 2'} />
        </div>

        <div className="flex items-center justify-center my-10 laptop:my-32">
            <button className="text-[#A4A5B8] hover:text-opacity-80 text-base font-bold basis-1/2">Go back</button>
            <button className="flex basis-1/2 items-center justify-center gap-3 bg-[#1F0954] hover:bg-opacity-80 rounded-lg py-3 px-3">
                <span className="text-[#FFFFFF] font-bold text-base text-nowrap">Save & Proceed</span>
                <Image 
                    src={'/icons/arrowdown-white.png'}
                    alt="arrowdown icon"
                    width={100}
                    height={100}
                    className="object-contain size-3"
                />
            </button>
        </div>
    </section>
  )
}

export default EditCard