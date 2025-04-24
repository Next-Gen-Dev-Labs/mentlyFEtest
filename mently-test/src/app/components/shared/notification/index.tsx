import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import AppTabs from '../../ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/components/ui/popover';

interface NotificationItem {
  id: string;
  title: string;
  date: string;
  time: string;
  avatarText: string;
  read: boolean;
}

const Notification = ({
  popOverTrigger,
}: {
  popOverTrigger: React.ReactNode;
}) => {
  const [activeTab, setActiveTab] = useState<'unread' | 'all'>('unread');
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: '1',
      title: 'Approval needed for expense report',
      date: '21st June, 2024',
      time: '2:00pm',
      avatarText: 'AP',
      read: false,
    },
    {
      id: '2',
      title: 'System maintenance scheduled for November 2, 2024',
      date: '21st June, 2024',
      time: '2:00pm',
      avatarText: 'SY',
      read: false,
    },
    {
      id: '3',
      title: 'Approval needed for expense report',
      date: '21st June, 2024',
      time: '2:00pm',
      avatarText: 'AP',
      read: false,
    },
    {
      id: '4',
      title: 'System maintenance scheduled for November 2, 2024',
      date: '21st June, 2024',
      time: '2:00pm',
      avatarText: 'SY',
      read: false,
    },
    {
      id: '5',
      title: 'Approval needed for expense report',
      date: '21st June, 2024',
      time: '2:00pm',
      avatarText: 'AP',
      read: false,
    },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const filteredNotifications =
    activeTab === 'unread' ? notifications.filter(n => !n.read) : notifications;

  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { label: 'Unread', value: 'unread', onClick: () => setActiveTab('unread') },
    { label: 'All', value: 'all', onClick: () => setActiveTab('all') },
  ];
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>{popOverTrigger}</PopoverTrigger>

      <PopoverContent className="w-full bg-white rounded-lg shadow-lg min-w-full md:min-w-[500px]">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">Notifications</h1>
            {unreadCount > 0 && (
              <span className="bg-gray-50 text-gray-400 font-semibold px-2 py-0.5 rounded-lg text-sm">
                {unreadCount}
              </span>
            )}
          </div>
          <button
            className="p-2 rounded-full hover:bg-gray-50 bg-gray-100 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            <IoClose />
          </button>
        </div>

        {/* Tabs and Actions */}
        <div className="flex justify-between px-4 w-full border-b py-2">
          <div>
            <AppTabs tabs={tabs} />
          </div>

          <button
            className="flex items-center gap-2 text-primary py-3 px-4 font-bold"
            onClick={handleMarkAllAsRead}
          >
            <FaCheck />
            Mark all as read
          </button>
        </div>

        {/* Notification List */}
        <div className="max-h-96 overflow-y-auto -mx-4">
          {filteredNotifications && (filteredNotifications?.length ?? 0) > 0 ? (
            filteredNotifications.map(notification => (
              <div
                key={notification.id}
                className=" px-2 hover:bg-gray-50 transition-all duration-300 cursor-default"
              >
                <div className="flex items-center p-4 gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold flex-shrink-0">
                    {notification.avatarText}
                  </div>

                  <div className="flex-1">
                    <div className="space-y-0">
                      <h3 className="font-medium text-gray-900 leading-snug">
                        {notification.title}
                      </h3>
                      <div className="text-gray-500 text-sm">
                        {notification.date} &nbsp; {notification.time}
                      </div>
                    </div>
                  </div>

                  <PopoverMenu
                    notification={notification}
                    onClose={() => setIsOpen(false)}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 border-dashed border border-gray-200 rounded-lg text-center mt-4 mx-4">
              <p className="text-gray-500 text-sm">You have no notifications</p>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

const PopoverMenu: React.FC<{
  notification: NotificationItem;
  onClose: () => void;
}> = ({ notification, onClose }) => {
  const router = useRouter();
  const [modalState, setModalState] = useState({
    popOver: false,
  });

  const menuActions = [
    {
      slug: 'view-details',
      label: 'View Details',
      onSelect: () => router.push(`/notifications/${notification.id}`),
    },
    {
      slug: 'mark-as-read',
      label: 'Mark as read',
      onSelect: () => onClose(),
    },
    {
      slug: 'dismiss',
      label: 'Dismiss',
      onSelect: () => onClose(),
      className:
        'cursor-pointer hover:!bg-red-50 text-red-700 hover:!text-red-700 rounded-lg',
    },
  ];

  return (
    <>
      <DropdownMenu
        open={modalState.popOver}
        onOpenChange={() =>
          setModalState({ ...modalState, popOver: !modalState.popOver })
        }
      >
        <DropdownMenuTrigger asChild>
          <div className="p-2 rounded-full hover:bg-gray-100 h-max transition-all duration-300">
            <BsThreeDotsVertical />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-40 bg-white">
          {menuActions.map(action => (
            <DropdownMenuItem
              key={action.slug}
              className={`cursor-pointer ${action.className ?? ''}`}
              onSelect={action.onSelect}
            >
              <span>{action.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Notification;
