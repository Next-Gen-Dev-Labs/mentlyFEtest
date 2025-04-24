import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,

    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import GalleryIcon from '@/components/common/icons/gallery-icon'
import { Checkbox } from "@/components/ui/checkbox"
import { AlignJustify } from "lucide-react"



export function SideSheet() {

    const sideWidgetItems = [
        'Programs',
        'Group Calls',
        'Mentors',
        'Recent Activities',
        'Application',
        'Earnings',
        'Forum',
        'Program Analysis'
    ]
    return (
        <Sheet >
            <SheetTrigger asChild>
                {/* <Button variant="outline">Open</Button> */}
                <div className="rounded  px-4 py-2 text-xs gap-x-4  flex items-center cursor-pointer hover:text-[#6F01D0] hover:font-bold hover:ring duration-300 hover:ring-[#6F01D0]/30">
                    <GalleryIcon />
                    Manage Widgets
                </div>
            </SheetTrigger>
            <SheetContent className="px-4">
                <SheetHeader>
                </SheetHeader>
                <div className="grid gap-y-8 py-4 px-4 pt-10 border-t mt-3">
                    <div>

                        <SheetTitle className="font-bold text-[#6F01D0] text-2xl">Edit profile</SheetTitle>
                        <SheetDescription className="text-gray-500 mt-0">
                            Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow.
                        </SheetDescription>
                    </div>
                    {sideWidgetItems.map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <Label htmlFor={item} className="flex-1 flex items-center gap-2">
                                <AlignJustify className="text-gray-400 size-4" />
                                {item}
                            </Label>
                            <Checkbox
                                id={item}
                                className="data-[state=checked]:bg-purple-700 data-[state=checked]:border-purple-700"
                            />
                        </div>
                    ))}
                    <div className="flex items-center gap-4">

                        <SheetClose asChild>
                            <Button type="submit" className="flex-1 rounded shadow-none text-xs bg-[#6F01D0] hover:bg-[#6F01D0]/95">Save changes</Button>
                        </SheetClose>
                        <SheetClose asChild>
                            <Button variant="outline" type="submit" className="flex-1 rounded shadow-none text-xs border-[#6F01D0] hover:bg-[#6F01D0]/10 text-[#6F01D0] hover:text-[#6F01D0] hover:font-bold duration-300 transition">Cancel</Button>
                        </SheetClose>
                    </div>
                </div>

            </SheetContent>
        </Sheet>
    )
}
