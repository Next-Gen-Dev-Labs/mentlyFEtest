import React, { useState, useEffect, useRef }  from 'react';
import { Bell, Eye } from 'react-feather';
import { SIDENAV, TOPNAV } from "../../constants"
import Image from "next/image";



const Header = ({ onPreviewToggle, showPreviewButton }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
	const dropdownRef = useRef(null);

    const {
		logo,
		notification,
		userpic,
		name,
		plan,
		upgrade,
		dropdown,
		sidebar,
	} = TOPNAV;

    const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

    useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target)
			) {
				setDropdownVisible(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

  return (
    <div className="flex justify-between items-center p-4 border-b">
      {/* Left side - empty for mobile menu button */}
      <div className="w-12 lg:w-auto"></div>

      {/* Right side content */}
      <div className="flex items-center space-x-4">
        {/* Preview Toggle Button (Mobile Only) */}
        {showPreviewButton && (
          <button 
            onClick={onPreviewToggle}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
			aria-label="Preview toggle"
          >
            <Eye className="w-5 h-5 text-gray-600" />
          </button>
        )}

        
        
        {/* Notifications */}
        <div className="relative">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
        
        {/* User Profile */}
        
        <div
					className="flex relative gap-5 items-center"
					ref={dropdownRef}
				>
					<div className="hidden sm:flex gap-2 items-center">
						<Image
							src={userpic}
							width={1000}
							height={1000}
							alt="User Image"
							quality={100}
							className="w-11 h-11 object-cover rounded-full"
						/>
						<div className="flex flex-col">
							<p className="text-[#404040] text-sm">{name}</p>
							<p className="text-[#777795] text-xs">
								{plan}
								<span className="ml-2 font-bold text-[#2B85FE] text-sm">
									{upgrade}
								</span>
							</p>
						</div>
					</div>
					<Image
						src={dropdown}
						width={1000}
						height={1000}
						aria-label="Dropdown Icon"
						alt="Dropdown Icon"
						quality={100}
						className="w-4 h-4"
						onClick={toggleDropdown}
					/>
					{dropdownVisible && (
						<div className="absolute right-0 top-6 bg-white shadow-md rounded-lg sm:hidden p-4 w-max">
							<div className="flex gap-2 items-center">
								<Image
									src={userpic}
									width={1000}
									height={1000}
									alt="User Image"
									quality={100}
									className="w-11 h-11 object-cover rounded-full"
								/>
								<div className="flex flex-col">
									<p className="text-[#404040] text-sm">
										{name}
									</p>
									<p className="text-[#777795] text-xs">
										{plan}
										<span className="ml-2 font-bold text-[#2B85FE] text-sm">
											{upgrade}
										</span>
									</p>
								</div>
							</div>
						</div>
					)}
				</div>
      </div>
    </div>
  );
};

export default Header;