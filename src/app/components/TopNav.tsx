import Image from 'next/image';

const TopNav = () => {
  return (
    <header className="bg-[#FDFDFD] shadow-custom p-4 flex justify-end gap-[2rem] items-center h-[82px] lg:pr-[152px]">
      <div className="w-[24px] h-[24px]">
        <Image
          src="/icons/notifications.png"
          alt="notifications.png"
          className="w-full h-auto object-cover "
          width={24}
          height={24}
        />
      </div>
      <div className="w-[213px] h-[44px] flex items-center gap-[0.7rem]">
        <div className="w-[44px] h-[44px] overflow-hidden flex justify-center items-center rounded-full">
          <Image
            src="/images/jimmy.png"
            alt="jimmy"
            width={44}
            height={44}
            layout="responsive"
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-[400] text-[14px] text-[#404040]">Godwin Jimmy</p>
          <p className="font-[400] text-[12px] text-[#777795]">
            Free Plan{' '}
            <span className="text-mentlyLink font-[700]">Upgrade</span>
          </p>
        </div>
        <div className="w-[16px] h-[16px] ml-auto">
          <Image
            src="/icons/arrow-down.png"
            alt="arrowdown"
            className="w-full h-auto object-cover "
            width={16}
            height={16}
          />
        </div>
      </div>
    </header>
  );
};

export default TopNav;
