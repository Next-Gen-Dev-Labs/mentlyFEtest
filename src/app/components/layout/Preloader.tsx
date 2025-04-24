
import Image from "next/image"

export const Preloader =({visibility}:{visibility: string | undefined})=> {


  return(
    <div className={`${visibility} h-screen w-screen fixed z-[70] left-0 top-0`}>
        <div className=' bg-primary w-full h-full flex flex-col items-center justify-center p-8'>
          <Image src={`/Benchmark.svg`} alt="techrify" width={200} height={200} className="animate-bounce duration-500 ease-in-out transition-transform" />
        </div>  
    </div>

    )
  }