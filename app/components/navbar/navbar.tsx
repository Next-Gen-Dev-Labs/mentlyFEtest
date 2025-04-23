import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex border-b border-[#F7F7F7]">
      <div className="flex space-x-10 ml-auto">
        <Image
          src="/assets/bell.png"
          alt="bell"
          width={30}
          height={30}
          className="object-contain"
        />
        <Image
          src="/assets/nav.png"
          alt="nav"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
    </nav>
  );
};

export default Navbar;
