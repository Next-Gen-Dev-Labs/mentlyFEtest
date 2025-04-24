import Image from "next/image"
import { Text } from "./Text"
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";

type CardProps = {
  title?: string;
  href?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  overflow?: string;
}

export const WidgetsCard =({ title, href='#', children, className, onClick, overflow }: CardProps) => {
  return (
    <div className={`bg-white w-full rounded-xl ${className} hover:scale-95 transition-tranform duration-300 ease-in-out`}>
      <div className="flex items-center justify-between gap-2 py-3 px-4">  
        <div className="flex items-center gap-3">
          <Image src='/menu.svg' alt='menu' width={20} height={20} className="hover:scale-105 transition-transform duration-200 ease-in-out" />
          <Text as="h3" size="base" weight="bold" className="font-chivo text-Title-Text">
            {title}
          </Text>
        </div>
        <div className="flex items-center gap-3">
          { title == 'Mentors' ? <div className="text-3xl text-[#9D92A6] cursor-pointer"><CiCirclePlus /> </div>:
            <Link href={href}>
              <Text as="h4" size="sm" weight="semibold" className="text-primary-lite cursor-pointer hover:scale-x-105">
                See all
              </Text>
            </Link>
          }
          <BsThreeDotsVertical className="text-black px-2 text-4xl"/>
        </div>
      </div>
      <div className={`bg-white ${overflow}`}>
        {children}
      </div>
      
    </div>
  )
}