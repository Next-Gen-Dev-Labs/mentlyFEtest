import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import {
    UserGroupIcon, UserIcon, WalletIcon, Cog6ToothIcon, ChartBarIcon,
    HomeIcon,DocumentCheckIcon, PowerIcon,
    DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

export default function NavLinks() {
    const pathname = usePathname();
    const links = [
        { name: 'Dashboard', href: '/', icon: HomeIcon },
        {
          name: 'Programs',
          href: '/dashboard/programs',
          icon: DocumentDuplicateIcon,
        },
        { name: 'Activities', href: '/dashboard/activities', icon: DocumentCheckIcon },
        { name: 'Users', href: '/dashboard/users', icon: UserIcon },
        { name: 'Forums', href: '/dashboard/forums', icon: UserGroupIcon },
        { name: 'Finances', href: '/dashboard/finances', icon: WalletIcon },
        { name: 'Rewards', href: '/dashboard/rewards', icon: DocumentCheckIcon },
        { name: 'Analytics', href: '/dashboard/analytics', icon: ChartBarIcon },
        { name: 'Settings', href: '/dashboard/settings', icon: Cog6ToothIcon },
        { name: 'Log Out', href: '/dashboard/log-out', icon: PowerIcon },
    ];
    
    return (
      <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            ' rounded-md text-md lg:text-lg font-medium text-grey hover:bg-white hover:text-purple md:flex-none md:justify-start',
                            {
                            ' bg-white text-purple': pathname === link.href,
                            },
                        )}          
                    >
                    <button className="flex gap-6 w-full mx-auto items-center px-8 text-lg py-2 font-light">
                        <LinkIcon className="w-6" />
                        <p className=" md:block">{link.name}</p>
                    </button>
                    </Link>
                );
            })}
      </>
    );
}