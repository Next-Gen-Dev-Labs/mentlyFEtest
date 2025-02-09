import { Icon } from "@iconify/react";
import Link from "next/link";

const HelpDesk = () => {
    return ( 
    //     <div className="cursor-pointer bg-white/10 rounded-md py-3 pt-6 px-1.5 flex flex-col items-center gap-4 h-[105px]">
    //     <Icon icon="bx:user-pin" className="flex justify-center" width="30" height="30" />
    //     <Link href="/" className="underline text-[#F0C074] text-xs">Visit Mently Help Desk Here</Link>
    // </div>
        <div className="cursor-pointer mt-24 bg-white/10 rounded-md py-3 px-1.5 flex flex-col items-center gap-6 h-[115px]">
            <Icon icon="bx:user-pin" className="flex justify-center" width="20" height="20" />
            <Link href="/" className="underline text-[#F0C074] text-[10px]">Visit Mently Help Desk Here</Link>
        </div>
     );
}
 
export default HelpDesk;