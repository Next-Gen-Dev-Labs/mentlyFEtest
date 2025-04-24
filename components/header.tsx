import Image from "next/image";

export default function Header() {
  return (
    <header className="shadow-md">
      <div className="flex flex-row items-center gap-x-6 py-4 lg:mr-9 justify-center lg:justify-end">
        <button className="cursor-pointer">
          <Image
            src="/icons/notifications.svg"
            alt="Notifications Button"
            width={24}
            height={24}
          />
        </button>

        <div className="flex flex-row items-center gap-x-3">
          <button className="cursor-pointer">
            <Image
              src="/userImage.png"
              alt="User Image"
              width={44}
              height={44}
            />
          </button>
          <div>
            <p className="text-lg text-[#404040]">
              {"Techrity Founder".length > 13
                ? "Techrity Founder".slice(0, 13) + "..."
                : "Techrity Founder"}
            </p>
            <p className="text-sm text-[#53547B]">Member</p>
          </div>
          <button className="cursor-pointer mt-1">
            <Image
              src="/icons/user-profile-dropdown.png"
              alt="User Profile Dropdown"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
