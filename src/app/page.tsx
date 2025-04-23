"use client";

import Button from "@/ui/Button";
import Image from "next/image";
import React, { useState } from "react";
import menu from "@/assets/menu.png";
import flag from "@/assets/flag.png";
import listView from "@/assets/list-view-icon.png";
import gridView from "@/assets/grid-view-icon.png";

import ProgramCard from "@/components/ProgramCard";
import {
  groupCall,
  mentors,
  programInfo,
  recentActivity,
  students,
  widgets,
} from "@/utils/mockData";
import GroupCallCard from "@/components/GroupCallCard";
import CardMenuItem from "@/components/CardMenuItem";
import Modal from "@/ui/Modal";
import ScrollableContainer from "@/components/ScrollableContainer";
import PieChartComponent from "@/components/PieChartComponent";

const Overview = () => {
  const [view, setView] = useState("grid");
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleViewChange = (newView: string) => {
    setView(newView);
  };

  return (
    <div className="px-4 lg:px-16 pb-16 bg-[#F4F5FA] min-h-screen">
      <div className="flex items-center justify-center md:justify-end gap-6  py-5">
        <div
          className={`${
            view === "list" ? "border border-[#6F01D0] p-1 bg-[#6F01D01C]" : ""
          }`}
        >
          <Image
            src={listView}
            alt="icon"
            width={20}
            height={20}
            className=" cursor-pointer"
            onClick={() => handleViewChange("list")}
          />
        </div>
        <div
          className={`${
            view === "grid" ? "border border-[#6F01D0] bg-[#6F01D01C]" : ""
          }`}
        >
          <Image
            src={gridView}
            alt="icon"
            width={30}
            height={30}
            className=" cursor-pointer"
            onClick={() => handleViewChange("grid")}
          />
        </div>
        <h2
          onClick={handleOpenModal}
          className="text-[#1F0954] font-bold text-base cursor-pointer"
        >
          Manage Widgets
        </h2>
      </div>

      <div className="bg-primary rounded px-6 py-2 flex flex-col md:flex-row gap-5 items-center justify-between">
        <div className="text-white text-xl lg:text-2xl font-semibold">
          Welcome Aboard, Blessing 👋
        </div>
        <div className="text-base lg:text-xl font-semibold text-[#BDBDBD]">
          We’re thrilled to have you join Techrity Team!
        </div>
        <div>
          <Button
            label="Update Profile"
            type="button"
            className="bg-white! text-[#1F0954]! text-nowrap! text-sm! lg:text-base! font-bold!"
          />
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mt-2">
          <div className="col-span-12 lg:col-span-4 bg-white rounded-xl px-[10px] py-5">
            {/* Programs */}
            <CardMenuItem title="Programs" seeAll={true} />

            <div className="flex items-center gap-3 justify-end mt-5">
              <p className="text-[#918C9C] text-xs font-medium">Filter</p>
              <div className="flex items-center gap-2">
                <select className="border border-[#BDBDBD] outline-0 rounded px-3 py-1 text-xs font-semibold text-[#B0B0B0]">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div>
              {programInfo.map((program) => (
                <ProgramCard key={program.id} programData={program} />
              ))}
            </div>

            {/* Pie chart */}
            <div className="border border-[#E1E7EC] rounded-xl mt-5">
              <div className="flex items-center  border-b border-[#E1E7EC] px-6 py-3 justify-between">
                <h1 className="text-[#595564] text-lg font-semibold">Users</h1>
                <div className="flex items-center gap-2">
                  <select className="border border-[#BDBDBD] outline-0 rounded px-3 py-1 text-xs font-semibold text-[#B0B0B0]">
                    <option value="all">All</option>
                  </select>
                </div>
              </div>
              <div className="p-2">
                <PieChartComponent />
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8">
            {/* Group calls */}
            <div className="bg-white px-[15px] py-5 rounded-t-lg">
              <CardMenuItem title="Group Calls" seeAll={true} />
            </div>

            <ScrollableContainer className="mt-5 rounded-b-2xl">
              {groupCall.map((groupCall) => (
                <div key={groupCall.id} className="min-w-[280px]">
                  <GroupCallCard groupCallData={groupCall} />
                </div>
              ))}
            </ScrollableContainer>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-[10px] mt-5">
              <div className="col-span-12 md:col-span-7 bg-white rounded-lg px-[10px] py-5">
                <CardMenuItem title="Applications" seeAll={true} />
                {/* mentor */}
                <div className="mt-8 px-2 lg:px-4 space-y-5">
                  <p className="text-[#7D8DA6] text-[10px] font-normal">
                    Mentor
                  </p>
                  {mentors.slice(0, 1).map((mentor) => (
                    <div
                      key={mentor.id}
                      className="border-b border-[#DBDBDB] pb-4 "
                    >
                      <div className="md:flex items-center gap-5 justify-between">
                        <div className="flex gap-2 items-center">
                          <div className="flex gap-4 items-center">
                            <input type="checkbox" name="" id="" />
                            <Image
                              src={mentor.image}
                              alt="icon"
                              width={32}
                              height={32}
                              className="size-[32px] object-cover rounded-full"
                            />
                          </div>
                          <div>
                            <h1 className="text-sm text-[#4F4F4F] font-bold">
                              {mentor.name}
                            </h1>
                            <p className="text-[#7D8DA6] text-[10px] font-normal">
                              {mentor.email}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-center md:justify-start mt-3 md:mt-0 gap-2 items-center">
                          <Button
                            type="button"
                            label="Reject"
                            className="bg-[#FFEDED]! border border-[#D09696]! text-primary! font-normal! text-[10px]!"
                          />
                          <Button
                            type="button"
                            label="Accept"
                            className=" font-normal! text-[10px]!"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
                        <div className="bg-[#F3ECF9] px-2 py-1 text-[8px] text-[#9985A7] font-medium border border-[#DDCEEE] rounded-md">
                          {mentor.position}
                        </div>
                        <div className="bg-[#E8FDFB] px-2 py-1 text-[8px] text-[#58948E] font-medium border border-[#A1BDBA] rounded-md">
                          {mentor.experience}
                        </div>
                        <div className="flex gap-1 items-center bg-[#E3ECF9] px-2 py-1 text-[8px] text-[#8196B5] font-medium border border-[#ABBEE0] rounded-md">
                          <Image src={flag} alt="icon" width={13} height={8} />
                          <p>{mentor.country}</p>
                        </div>
                        <div className="bg-[#F4F4F4] px-2 py-1 text-[8px] text-[#595564] font-medium border border-[#C8C8C8] rounded-md">
                          {mentor.timeZone}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Stidents */}
                <div className="mt-8 px-2 lg:px-4 space-y-5">
                  <p className="text-[#7D8DA6] text-[10px] font-normal">
                    Students
                  </p>
                  {students.map((student) => (
                    <div
                      key={student.id}
                      className="md:flex border-b border-[#DBDBDB] pb-4 items-center gap-5 justify-between"
                    >
                      <div className="flex gap-2 items-center">
                        <div className="flex gap-4 items-center">
                          <input type="checkbox" name="" id="" />
                          <Image
                            src={student.image}
                            alt="icon"
                            width={32}
                            height={32}
                            className="size-[32px] object-cover rounded-full"
                          />
                        </div>
                        <div>
                          <h1 className="text-sm text-[#4F4F4F] font-bold">
                            {student.name}
                          </h1>
                          <p className="text-[#7D8DA6] text-[10px] font-normal">
                            {student.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center md:justify-start gap-2 items-center mt-3 md:mt-0">
                        <Button
                          type="button"
                          label="Reject"
                          className="bg-[#FFEDED]! border border-[#D09696]! text-primary! font-normal! text-[10px]!"
                        />
                        <Button
                          type="button"
                          label="Accept"
                          className=" font-normal! text-[10px]!"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-12 md:col-span-5">
                {/* Mentors */}
                <div className=" bg-white rounded-lg px-[10px] py-5">
                  <CardMenuItem title="Mentors" seeAll={false} isAdd={true} />
                  <div className="mt-8 px-2 lg:px-4 space-y-5">
                    {mentors.map((mentor) => (
                      <div
                        key={mentor.id}
                        className="flex items-center gap-5 justify-between"
                      >
                        <div className="flex gap-2 items-center">
                          <div>
                            <Image
                              src={mentor.image}
                              alt="icon"
                              width={32}
                              height={32}
                              className="size-[32px] object-cover rounded-full"
                            />
                          </div>
                          <div>
                            <h1 className="text-sm text-[#4F4F4F] font-bold">
                              {mentor.name}
                            </h1>
                            <p className="text-[#7D8DA6] text-[10px] font-normal">
                              {mentor.position}
                            </p>
                          </div>
                        </div>
                        <div>
                          <Button
                            type="button"
                            label="Message"
                            className="rounded-2xl! font-normal! text-xs!"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-[#E1E7EC] mt-5 pt-5">
                    <Button
                      type="button"
                      label="See all"
                      className="bg-[#DDD6FB]! text-primary! rounded-3xl! w-full  "
                    />
                  </div>
                </div>

                {/* Recent Activities */}
                <div className=" bg-white rounded-lg px-[10px] mt-5 py-5">
                  <CardMenuItem title="Recent Activities" seeAll={true} />
                  <div className="mt-8 px-2 lg:px-4 space-y-5">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="">
                        <div className="flex gap-3">
                          <div>
                            <Image
                              src={activity.image}
                              alt="icon"
                              width={32}
                              height={32}
                              className="size-[32px] object-cover rounded-full"
                            />
                          </div>
                          <div>
                            <h1 className="text-sm text-[#011627] font-bold">
                              {activity.title}
                            </h1>
                            <p className="text-[#707991] text-xs font-normal">
                              {activity.description}
                            </p>
                            <p className="text-[#707991] text-xs font-[300px]">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" mt-2">
          <div className=" bg-white rounded-xl px-[10px] py-5">
            {/* Programs */}
            <CardMenuItem title="Programs" seeAll={true} />

            <div className="flex items-center gap-3 justify-end mt-5">
              <p className="text-[#918C9C] text-xs font-medium">Filter</p>
              <div className="flex items-center gap-2">
                <select className="border border-[#BDBDBD] outline-0 rounded px-3 py-1 text-xs font-semibold text-[#B0B0B0]">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className="lg:grid gap-5 grid-cols-3">
              {programInfo.map((program) => (
                <ProgramCard key={program.id} programData={program} />
              ))}
            </div>

            {/* Pie chart */}
            <div className="border border-[#E1E7EC] rounded-xl mt-5">
              <div className="flex items-center  border-b border-[#E1E7EC] px-6 py-3 justify-between">
                <h1 className="text-[#595564] text-lg font-semibold">Users</h1>
                <div className="flex items-center gap-2">
                  <select className="border border-[#BDBDBD] outline-0 rounded px-3 py-1 text-xs font-semibold text-[#B0B0B0]">
                    <option value="all">All</option>
                  </select>
                </div>
              </div>
              <div className="p-5">
                <PieChartComponent />
              </div>
            </div>
          </div>

          <div className="mt-5 ">
            {/* Group calls */}
            <div className="bg-white px-[15px] pt-5 rounded-t-lg">
              <CardMenuItem title="Group Calls" seeAll={true} />
            </div>

            <ScrollableContainer className="bg-white mt-5 rounded-b-2xl">
              {groupCall.map((groupCall) => (
                <div key={groupCall.id} className="min-w-[280px]">
                  <GroupCallCard groupCallData={groupCall} />
                </div>
              ))}
            </ScrollableContainer>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-[10px] ">
              <div className="col-span-12 md:col-span-7 bg-white rounded-lg px-[10px] py-5">
                <CardMenuItem title="Applications" seeAll={true} />
                {/* mentor */}
                <div className="mt-8 px-2 lg:px-4 space-y-5">
                  <p className="text-[#7D8DA6] text-[10px] font-normal">
                    Mentor
                  </p>
                  {mentors.slice(0, 1).map((mentor) => (
                    <div
                      key={mentor.id}
                      className="border-b border-[#DBDBDB] pb-4 "
                    >
                      <div className="md:flex items-center gap-5 justify-between">
                        <div className="flex gap-2 items-center">
                          <div className="flex gap-4 items-center">
                            <input type="checkbox" name="" id="" />
                            <Image
                              src={mentor.image}
                              alt="icon"
                              width={32}
                              height={32}
                              className="size-[32px] object-cover rounded-full"
                            />
                          </div>
                          <div>
                            <h1 className="text-sm text-[#4F4F4F] font-bold">
                              {mentor.name}
                            </h1>
                            <p className="text-[#7D8DA6] text-[10px] font-normal">
                              {mentor.email}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-center md:justify-start mt-3 md:mt-0 gap-2 items-center">
                          <Button
                            type="button"
                            label="Reject"
                            className="bg-[#FFEDED]! border border-[#D09696]! text-primary! font-normal! text-[10px]!"
                          />
                          <Button
                            type="button"
                            label="Accept"
                            className=" font-normal! text-[10px]!"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
                        <div className="bg-[#F3ECF9] px-2 py-1 text-[8px] text-[#9985A7] font-medium border border-[#DDCEEE] rounded-md">
                          {mentor.position}
                        </div>
                        <div className="bg-[#E8FDFB] px-2 py-1 text-[8px] text-[#58948E] font-medium border border-[#A1BDBA] rounded-md">
                          {mentor.experience}
                        </div>
                        <div className="flex gap-1 items-center bg-[#E3ECF9] px-2 py-1 text-[8px] text-[#8196B5] font-medium border border-[#ABBEE0] rounded-md">
                          <Image src={flag} alt="icon" width={13} height={8} />
                          <p>{mentor.country}</p>
                        </div>
                        <div className="bg-[#F4F4F4] px-2 py-1 text-[8px] text-[#595564] font-medium border border-[#C8C8C8] rounded-md">
                          {mentor.timeZone}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Stidents */}
                <div className="mt-8 px-2 lg:px-4 space-y-5">
                  <p className="text-[#7D8DA6] text-[10px] font-normal">
                    Students
                  </p>
                  {students.map((student) => (
                    <div
                      key={student.id}
                      className="md:flex border-b border-[#DBDBDB] pb-4 items-center gap-5 justify-between"
                    >
                      <div className="flex gap-2 items-center">
                        <div className="flex gap-4 items-center">
                          <input type="checkbox" name="" id="" />
                          <Image
                            src={student.image}
                            alt="icon"
                            width={32}
                            height={32}
                            className="size-[32px] object-cover rounded-full"
                          />
                        </div>
                        <div>
                          <h1 className="text-sm text-[#4F4F4F] font-bold">
                            {student.name}
                          </h1>
                          <p className="text-[#7D8DA6] text-[10px] font-normal">
                            {student.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center md:justify-start gap-2 items-center mt-3 md:mt-0">
                        <Button
                          type="button"
                          label="Reject"
                          className="bg-[#FFEDED]! border border-[#D09696]! text-primary! font-normal! text-[10px]!"
                        />
                        <Button
                          type="button"
                          label="Accept"
                          className=" font-normal! text-[10px]!"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-12 md:col-span-5">
                {/* Mentors */}
                <div className=" bg-white rounded-lg px-[10px] py-5">
                  <CardMenuItem title="Mentors" seeAll={false} isAdd={true} />
                  <div className="mt-8 px-2 lg:px-4 space-y-5">
                    {mentors.map((mentor) => (
                      <div
                        key={mentor.id}
                        className="flex items-center gap-5 justify-between"
                      >
                        <div className="flex gap-2 items-center">
                          <div>
                            <Image
                              src={mentor.image}
                              alt="icon"
                              width={32}
                              height={32}
                              className="size-[32px] object-cover rounded-full"
                            />
                          </div>
                          <div>
                            <h1 className="text-sm text-[#4F4F4F] font-bold">
                              {mentor.name}
                            </h1>
                            <p className="text-[#7D8DA6] text-[10px] font-normal">
                              {mentor.position}
                            </p>
                          </div>
                        </div>
                        <div>
                          <Button
                            type="button"
                            label="Message"
                            className="rounded-2xl! font-normal! text-xs!"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-[#E1E7EC] mt-5 pt-5">
                    <Button
                      type="button"
                      label="See all"
                      className="bg-[#DDD6FB]! text-primary! rounded-3xl! w-full  "
                    />
                  </div>
                </div>

                {/* Recent Activities */}
                <div className=" bg-white rounded-lg px-[10px] mt-5 py-5">
                  <CardMenuItem title="Recent Activities" seeAll={true} />
                  <div className="mt-8 px-2 lg:px-4 space-y-5">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="">
                        <div className="flex gap-3">
                          <div>
                            <Image
                              src={activity.image}
                              alt="icon"
                              width={32}
                              height={32}
                              className="size-[32px] object-cover rounded-full"
                            />
                          </div>
                          <div>
                            <h1 className="text-sm text-[#011627] font-bold">
                              {activity.title}
                            </h1>
                            <p className="text-[#707991] text-xs font-normal">
                              {activity.description}
                            </p>
                            <p className="text-[#707991] text-xs font-[300px]">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* manage widgets */}
      <Modal isOpen={openModal} onClose={handleCloseModal}>
        <div className="rounded-[16px]  py-16 ">
          <div className="w-[80%] mx-auto border-t border-[#D7D7D7] pt-10">
            <h1 className="text-primary font-bold text-3xl">Manage Widget</h1>
            <p className="text-[#374557] text-xs font-normal mt-4">
              Personalize your dashboard by managing widgets add, remove, or
              reorder them to fit your workflow.
            </p>

            <div className="mt-8 space-y-4">
              {widgets.map((widget) => (
                <div
                  key={widget.id}
                  className="flex items-center justify-between "
                >
                  <div className="flex items-center gap-3 ">
                    <Image src={menu} alt="icon" className="pt-1" />
                    <label
                      htmlFor=""
                      className="block text-[#4F4F4F] text-sm font-bold"
                    >
                      {widget.name}
                    </label>
                  </div>
                  <input type="checkbox" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Overview;
