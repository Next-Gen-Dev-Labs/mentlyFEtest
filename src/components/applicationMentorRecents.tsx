import React from "react";
import Image from "next/image";

import Nigeria from "../../public/svg/nigeria.svg"

import {
	MoreVertical,
	Plus,
} from 'lucide-react';


const activities = [
	{
		id: 1,
		title: "KYC Verification",
		description: "45 new persons just signed up on Mently.",
		time: "25 minutes Ago",
		imageSrc: "/img/profile-pic-1.png",
		alt: "Woman with braided hair"
	},
	{
		id: 2,
		title: "New User Sign Up!",
		description: "45 new persons just signed up on Mently.",
		time: "25 minutes Ago",
		imageSrc: "/img/profile-pic-2.png",
		alt: "Woman with long hair"
	},
	{
		id: 3,
		title: "Withdrawal Request",
		description: "Mardian requested a withdrawal.",
		time: "25 minutes Ago",
		imageSrc: "/img/profile-pic-3.png",
		alt: "Man with glasses"
	}
];

export const ApplicationMentorRecents = () => {
	return (
		<div className="mx-6 mb-6 flex gap-x-4">
			{/* Applications Section */}
			<div className="w-132 h-[100%] bg-white p-4">
				<div className="flex justify-between items-center mb-4">
					<div className="flex items-center">
						<span className="mr-2">
							<Image src="/svg/hamburger.svg" alt="hamburger" unoptimized width={20} height={20} />
						</span>
						<h2 className="text-gray-500 font-medium">Applications</h2>
					</div>
					<div className="flex items-center">
						<a href="#" className="text-[#6F01D0] font-bold text-sm mr-2">See all</a>
						<MoreVertical size={18} className="text-gray-400" />
					</div>
				</div>

				<div className="bg-white rounded-lg p-4">
					<div className="border-b border-gray-200 pb-4 mb-4">
						<p className="text-[#7D8DA6] text-xs mt-5 mb-8">Mentors</p>
						<div className="flex items-center justify-between gap-x-7 mb-3">
							<div className="flex items-center">
								<input type="checkbox" className="mr-3 w-4 h-4" />
								<div className="mr-3">
									<Image
										src="/img/profile-pic-2.png"
										alt="profile"
										className="rounded-full object-cover"
										width={40}
										height={40}
									/>
								</div>
								<div>
									<h3 className="font-medium">Maxwell Smith</h3>
									<p className="text-xs text-gray-500">maxwellsmith@gmail.com</p>
								</div>
							</div>
							<div className="flex space-x-2">
								<button className="px-7 py-2 bg-red-50 text-[#D83535] bg-[#FFEDED] border border-[#D09696] rounded-md text-sm cursor-pointer hover:bg-[#D83535] hover:text-white transition delay-100 duration-300">
									Reject
								</button>
								<button className="px-7 py-2 bg-[#6F01D0] text-white text-[13px] rounded-md text-sm cursor-pointer hover:bg-transparent hover:text-[#6F01D0] border border-[#6F01D0] transition delay-100 duration-300">
									Accept
								</button>
							</div>
						</div>
						<div className="ml-6 flex items-center space-x-3 text-[10px]">
							<span className="bg-[#F3ECF9] text-gray-600 px-2 py-1 rounded border border-[#DDCEEE]">Product Designer</span>
							<span className="bg-[#E8FDFB] text-gray-600 px-2 py-1 rounded border border-[#A1BDBA]">Space&apos;s Experience</span>
							<div className="flex items-center bg-[#F4F4F4] px-2 py-1 rounded border border-[#ABBEE0]">
								<div className="mr-1">
									<Image src={Nigeria} alt="nigeria-flag" width={18} height={18} unoptimized />
								</div>
								<span>Lagos, Nigeria</span>
							</div>
							<span className="text-gray-500 px-2 py-1 rounded bg-[#F4F4F4] border border-[#C8C8C8]">GMT +1</span>
						</div>
					</div>

					<div className="border-b border-gray-200 pb-4 mb-4">
						<p className="text-[#7D8DA6] text-xs mb-10 mt-9">Students</p>
						<div className="flex items-center justify-between mb-3">
							<div className="flex items-center">
								<input type="checkbox" className="mr-3 w-4 h-4" />
								<div className="mr-3">
									<Image
										src="/img/profile-pic-1.png"
										alt="profile"
										className="rounded-full object-cover"
										width={40}
										height={40}
									/>
								</div>
								<div>
									<h3 className="font-medium">Adeati Samuel</h3>
									<p className="text-xs text-gray-500">maxwellsmith@gmail.com</p>
								</div>
							</div>
							<div className="flex space-x-2">
								<button className="px-7 py-2 bg-red-50 text-[#D83535] bg-[#FFEDED] border border-[#D09696] rounded-md text-sm cursor-pointer hover:bg-[#D83535] hover:text-white transition delay-100 duration-300">
									Reject
								</button>
								<button className="px-7 py-2 bg-[#6F01D0] text-white text-[13px] rounded-md text-sm cursor-pointer hover:bg-transparent hover:text-[#6F01D0] border border-[#6F01D0] transition delay-100 duration-300">
									Accept
								</button>
							</div>
						</div>
					</div>

					<div className="border-b border-gray-200 pb-4 mb-4">
						<div className="flex items-center justify-between mb-3">
							<div className="flex items-center">
								<input type="checkbox" className="mr-3 w-4 h-4" />
								<div className="mr-3">
									<Image
										src="/img/profile-pic-3.png"
										alt="profile"
										className="rounded-full object-cover"
										width={40}
										height={40}
									/>
								</div>
								<div>
									<h3 className="font-medium">Maxwell Smith</h3>
									<p className="text-xs text-gray-500">maxwellsmith@gmail.com</p>
								</div>
							</div>
							<div className="flex space-x-2">
								<button className="px-7 py-2 bg-red-50 text-[#D83535] bg-[#FFEDED] border border-[#D09696] rounded-md text-sm cursor-pointer hover:bg-[#D83535] hover:text-white transition delay-100 duration-300">
									Reject
								</button>
								<button className="px-7 py-2 bg-[#6F01D0] text-white text-[13px] rounded-md text-sm cursor-pointer hover:bg-transparent hover:text-[#6F01D0] border border-[#6F01D0] transition delay-100 duration-300">
									Accept
								</button>
							</div>
						</div>
					</div>

					<div className="border-b border-gray-200 pb-4 mb-4">
						<div className="flex items-center justify-between mb-3">
							<div className="flex items-center">
								<input type="checkbox" className="mr-3 w-4 h-4" />
								<div className="mr-3">
									<Image
										src="/img/profile-pic-2.png"
										alt="profile"
										className="rounded-full object-cover"
										width={40}
										height={40}
									/>
								</div>
								<div>
									<h3 className="font-medium">Maxwell Smith</h3>
									<p className="text-xs text-gray-500">maxwellsmith@gmail.com</p>
								</div>
							</div>
							<div className="flex space-x-2">
								<button className="px-7 py-2 bg-red-50 text-[#D83535] bg-[#FFEDED] border border-[#D09696] rounded-md text-sm cursor-pointer hover:bg-[#D83535] hover:text-white transition delay-100 duration-300">
									Reject
								</button>
								<button className="px-7 py-2 bg-[#6F01D0] text-white text-[13px] rounded-md text-sm cursor-pointer hover:bg-transparent hover:text-[#6F01D0] border border-[#6F01D0] transition delay-100 duration-300">
									Accept
								</button>
							</div>
						</div>
					</div>

					<div>
						<div className="flex items-center justify-between mb-3">
							<div className="flex items-center">
								<input type="checkbox" className="mr-3 w-4 h-4" />
								<div className="mr-3">
									<Image
										src="/img/profile-pic-4.png"
										alt="profile"
										className="rounded-full object-cover"
										width={40}
										height={40}
									/>
								</div>
								<div>
									<h3 className="font-medium">Adeati Samuel</h3>
									<p className="text-xs text-gray-500">maxwellsmith@gmail.com</p>
								</div>
							</div>
							<div className="flex space-x-2">
								<button className="px-7 py-2 bg-red-50 text-[#D83535] bg-[#FFEDED] border border-[#D09696] rounded-md text-sm cursor-pointer hover:bg-[#D83535] hover:text-white transition delay-100 duration-300">
									Reject
								</button>
								<button className="px-7 py-2 bg-[#6F01D0] text-white text-[13px] rounded-md text-sm cursor-pointer hover:bg-transparent hover:text-[#6F01D0] border border-[#6F01D0] transition delay-100 duration-300">
									Accept
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mentors Section */}
			<div className="w-92">
				<div className="bg-white shadow-sm p-4 rounded-xl">
					<div className="flex justify-between items-center mb-4">
						<div className="flex items-center">
							<span className="mr-2">
								<Image src="/svg/hamburger.svg" alt="hamburger" unoptimized width={20} height={20} />
							</span>
							<h2 className="text-gray-500 font-medium">Mentors</h2>
						</div>
						<div className="flex items-center">
							<button className="mr-2 bg-white rounded-full p-1 border border-gray-400">
								<Plus size={16} />
							</button>
							<MoreVertical size={18} className="text-gray-400" />
						</div>
					</div>

					<div className="bg-white rounded-lg p-4">
						<div className="border-b border-gray-100 pb-4 mb-4">
							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<div className="rounded-full mr-3">
										<Image
											src="/img/profile-pic-4.png"
											alt="profile"
											className="rounded-full object-cover"
											width={40}
											height={40}
										/>
									</div>
									<div>
										<h3 className="font-medium">Maxwell Smith</h3>
										<p className="text-xs text-gray-500">Product Designer</p>
									</div>
								</div>
								<button className="px-4 py-1 bg-[#6F01D0] text-white rounded-full text-sm">
									Message
								</button>
							</div>
						</div>

						<div className="border-b border-gray-100 pb-4 mb-4">
							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<div className="rounded-full mr-3">
										<Image
											src="/img/profile-pic-3.png"
											alt="profile"
											className="rounded-full object-cover"
											width={40}
											height={40}
										/>
									</div>
									<div>
										<h3 className="font-medium">Adeati Samuel</h3>
										<p className="text-xs text-gray-500">Product Designer</p>
									</div>
								</div>
								<button className="px-4 py-1 bg-[#6F01D0] text-white rounded-full text-sm">
									Message
								</button>
							</div>
						</div>

						<div className="btn mt-7">
							<button type="button" className="w-full py-4 rounded-full bg-[#DDD6FB] text-md font-medium text-[#6F01D0]">See all</button>
						</div>
					</div>
				</div>

				{/* Recent Activities Section */}
				<div className="mt-8 mb-6">
					<div className="bg-white rounded-xl p-6 shadow-sm">
						<div className="flex justify-between items-center mb-6">
							<div className="flex items-center gap-3">
								<Image src="/svg/hamburger.svg" alt="hamburger" unoptimized width={20} height={20} />
								<h2 className="text-lg font-medium text-gray-400">Recent Activities</h2>
							</div>
							<div className="flex items-center gap-3">
								<span className="text-purple-700 font-medium">See all</span>
								<MoreVertical size={24} className="text-gray-500" />
							</div>
						</div>

						<div className="space-y-6">
							{activities.map((activity) => (
								<div key={activity.id} className="flex gap-4 pb-6 border-b border-gray-200 last:border-0">
									<div className="flex-shrink-0">
										<Image
											src={activity.imageSrc}
											alt={activity.alt}
											className="rounded-full object-cover"
											width={40}
											height={40}
										/>
									</div>
									<div className="flex-grow">
										<h3 className="text-md font-bold text-[#011627]">{activity.title}</h3>
										<p className="text-[13px] text-[#707991] mb-1">{activity.description}</p>
										<span className="text-[13px] text-[#707991]">{activity.time}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
