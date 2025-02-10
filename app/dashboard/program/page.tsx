"use client";

import {
  ProductAccordion,
  ProductAccordionContent,
  ProductAccordionItem,
  ProductAccordionTrigger,
} from "@/components/product-info-accord";
import { Button } from "@/components/ui/button";
import { formatDateTimeTX } from "@/lib/common";
import TiptapEditor from "@/lib/CustomTextEditor";
import {
  AlertIcon,
  CalenderIcon,
  CertificateIcon,
  CopyIcon,
  ForumIcon,
  LocationIcon,
  Note2Icon,
  PeopleIcon,
  PhoneAddIcon,
  SettingsIcon,
  ShareIcon,
  SuitcaseIcon,
} from "@/lib/Icons";
import { ChevronDown, ChevronLeft, DotIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import DummyBanner from "@/public/Banner.png";
import Image from "next/image";

function Page() {
  const [dirty, setDirty] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:max-h-dch gap-4">
      <div className="program-form p-4 sm:px-6 pt-0 bg-secondary rounded-sm md:overflow-y-auto relative">
        <div className="flex flex-col sm:flex-row border-b justify-between py-3 gap-4 gap-x-4 sm:sticky top-0 bg-secondary z-10 pt-4">
          <Link
            href={"/dashboard"}
            className="text-[#F0C074] flex items-center gap-2"
          >
            <ChevronLeft />
            <span className="">Back to Home</span>
          </Link>
          <div className="flex gap-4 items-center sm:justify-start justify-end flex-wrap">
            <button>
              <SettingsIcon />
            </button>
            <button>
              <CopyIcon />
            </button>
            <button className="bg-primary flex gap-2 items-center text-white rounded-full p-1 px-3.5">
              <ShareIcon /> Share
            </button>
          </div>
        </div>
        <form
          className="grid grid-cols-1 gap-6 mt-2"
          onSubmit={handleSubmit}
          onInput={() => setDirty(true)}
        >
          <div>
            <h1 className="text-primary">Program Information</h1>
            <p className="text-sub-text font-semibold">
              Describe Section Title
            </p>
          </div>
          <div className="border border-primary rounded-md p-4 sm:px-6 px-4 flex gap-3 items-center">
            <button className="flex items-center gap-2">
              <span className="border-[3px] border-dashed border-primary w-8 h-8 max-w-8 max-h-8 aspect-square grid place-content-center place-items-center text-xl font-extrabold">
                T
              </span>
              <ChevronDown
                color="currentColor"
                strokeWidth={3}
                className="sm:block hidden"
              />
            </button>
            <input
              className="w-full h-8 bg-transparent"
              type="text"
              placeholder="Describe Section Title e.g What you stand to learn"
            />
          </div>
          <div className="bg-blue-100 dark:bg-blue-700/10 flex items-center gap-2 text-blue-500 dark:text-white p-4 rounded-sm">
            <div className="min-w-8 min-h-8 grid place-content-center place-items-center">
              <AlertIcon />
            </div>
            <p className="text-sub-text dark:text-white">
              Provide your preferred title for this section i.e What’s in this
              Program for you?
            </p>
          </div>

          <TiptapEditor />

          <div className="bg-blue-100 dark:bg-blue-700/10 flex items-center gap-2 text-blue-500 dark:text-white p-4 rounded-sm">
            <div className="min-w-8 min-h-8 grid place-content-center place-items-center">
              <AlertIcon />
            </div>
            <p className="text-sub-text dark:text-white">
              Provide a clear and concise description/information of your
              program. This can include objectives, goals, necessary resources,
              or any specific instructions..
            </p>
          </div>

          <button className="border-primary sm:gap-2 text-primary border-2 rounded-lg p-4 flex items-center flex-col text-base">
            <span className="flex items-center gap-2 font-semibold">
              <PlusIcon />
              Add new session
            </span>
            <span className="text-xs italic">
              (maximum number of sections to add is 3)
            </span>
          </button>

          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="showPublished"
              id="showPublished"
              className="w-4 h-4"
            />
            <label className="text" htmlFor="showPublished">
              Show this section when Published
            </label>
          </div>

          <div className="div">
            <ProductAccordion
              type="single"
              collapsible
              className="w-full gap-3"
            >
              <ProductAccordionItem
                value="item-1"
                className="bg-purple-100 dark:bg-blue-100/10 rounded-md border border-secondary p-6 py-1 mb-3"
              >
                <ProductAccordionTrigger className="text-lg font-semibold text-primary dark:text-white">
                  Program Information Text 1
                </ProductAccordionTrigger>
                <ProductAccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </ProductAccordionContent>
              </ProductAccordionItem>
              <ProductAccordionItem
                value="item-3"
                className="bg-purple-100 dark:bg-blue-100/10 rounded-md border border-secondary p-6 py-1 my-3"
              >
                <ProductAccordionTrigger className="text-lg font-semibold text-primary dark:text-white">
                  Program Information Text 2
                </ProductAccordionTrigger>
                <ProductAccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </ProductAccordionContent>
              </ProductAccordionItem>
            </ProductAccordion>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              className="md:text-lg sm:text-base text-[14px] font-semibold flex gap-2 items-center md:p-7 p-6 md:px-6 px-4 rounded-md"
              variant={"ghost"}
              disabled={!dirty}
            >
              Go Back
            </Button>
            <Button className="md:text-lg sm:text-base text-[14px] font-semibold flex gap-4 items-center md:p-7 p-6 md:px-6 px-4 rounded-md">
              <span>Save & Proceed</span>
              <span className="sm:block hidden">
                <svg
                  width="11"
                  height="5"
                  viewBox="0 0 11 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.76203 4.72939L0.220541 0.975884C0.158337 0.924472 0.105747 0.864181 0.0627694 0.795009C0.0209228 0.726772 0 0.653393 0 0.574874C0 0.417835 0.0622038 0.282764 0.186613 0.169658C0.313283 0.056553 0.479538 0 0.685378 0H10.3163C10.521 0 10.6862 0.0579542 10.8117 0.173864C10.9372 0.289773 11 0.424378 11 0.577678C11 0.616937 10.9265 0.749673 10.7795 0.975884L6.23797 4.72939C6.13279 4.81632 6.01969 4.88316 5.89867 4.92989C5.77766 4.97663 5.64477 5 5.5 5C5.35523 5 5.22234 4.97663 5.10133 4.92989C4.98031 4.88316 4.86721 4.81632 4.76203 4.72939Z"
                    fill="white"
                  />
                </svg>
              </span>
            </Button>
          </div>
        </form>
      </div>
      <div className="program-details sm:p-6 p-4 md:overflow-y-auto relative space-y-4">
        <div className="flex justify-end items-center">
          <span className="text-sub-text">{formatDateTimeTX()}</span>
        </div>

        <div className="details-box border border-input rounded-sm w-full grid grid-cols-1 gap-3 p-4 min-h-full">
          <h2 className="md:text-4xl text-primary font-black">
            Mentorship Program
          </h2>
          <div className="banner-container aspect-[10/3] rounded-md overflow-hidden">
            <Image
              src={DummyBanner}
              alt="banner"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="my-5 details items-center grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-x-14">
            <p className="text-justify text-[#808080] font-semibold">
              UI/UX Design check ins with faith is a way for beginners in UI/UX
              Design to get started about the fundamentals and how they can
              build a Design Career, share, document their progress on a weekly
              basis.
            </p>
            <div className="bg-secondary shadow-md p-6 rounded-md">
              <ul className="grid grid-cols-1 gap-6">
                <li className="col-span-1 flex gap-4 text-sub-text font-semibold">
                  <SuitcaseIcon />
                  <span>Mentorship Program</span>
                </li>
                <li className="col-span-1 flex gap-4 text-sub-text font-semibold">
                  <CalenderIcon />
                  <span>21/4/2024 - 21/5/2024</span>
                </li>
                <li className="col-span-1 flex gap-4 text-sub-text font-semibold">
                  <LocationIcon />
                  <span>In Person</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="info bg-[#FFFAF2] dark:bg-secondary border-2 border-[#FEE0B1] dark:border-[#241908] p-4 px-6 rounded-2xl space-y-4">
            <h3 className="text-xl text-primary">Program Information Text</h3>

            <ul className="infos grid grid-cols-2 gap-6">
              <li className="col-span-1 flex gap-2 items-center">
                <div className="rounded-full bg-[#FEE0B1] dark:bg-[#241908] text-primary dark:text-white size-8 min-w-8 grid place-content-center place-items-center">
                  <CertificateIcon />
                </div>
                <span className="text-[#595564] dark:text-white text-base">
                  Content
                </span>
              </li>
              <li className="col-span-1 flex gap-2 items-center">
                <div className="rounded-full bg-[#FEE0B1] dark:bg-[#241908] text-primary dark:text-white size-8 min-w-8 grid place-content-center place-items-center">
                  <SuitcaseIcon width="16" height="16" />
                </div>
                <span className="text-[#595564] dark:text-white text-base">
                  Content
                </span>
              </li>
              <li className="col-span-1 flex gap-2 items-center">
                <div className="rounded-full bg-[#FEE0B1] dark:bg-[#241908] text-primary dark:text-white size-8 min-w-8 grid place-content-center place-items-center">
                  <PeopleIcon />
                </div>
                <span className="text-[#595564] dark:text-white text-base">
                  Content
                </span>
              </li>
              <li className="col-span-1 flex gap-2 items-center">
                <div className="rounded-full bg-[#FEE0B1] dark:bg-[#241908] text-primary dark:text-white size-8 min-w-8 grid place-content-center place-items-center">
                  <Note2Icon />
                </div>
                <span className="text-[#595564] dark:text-white text-base">
                  Content
                </span>
              </li>
              <li className="col-span-1 flex gap-2 items-center">
                <div className="rounded-full bg-[#FEE0B1] dark:bg-[#241908] text-primary dark:text-white size-8 min-w-8 grid place-content-center place-items-center">
                  <PhoneAddIcon />
                </div>
                <span className="text-[#595564] dark:text-white text-base">
                  Content
                </span>
              </li>
              <li className="col-span-1 flex gap-2 items-center">
                <div className="rounded-full bg-[#FEE0B1] dark:bg-[#241908] text-primary dark:text-white size-8 min-w-8 grid place-content-center place-items-center">
                  <ForumIcon />
                </div>
                <span className="text-[#595564] dark:text-white text-base">
                  Content
                </span>
              </li>
            </ul>
          </div>
          <br />
          <div className="info bg-[#FFFAF2] dark:bg-secondary border-2 border-[#FEE0B1] dark:border-[#241908] p-4 px-6 rounded-2xl space-y-4">
            <h3 className="text-xl text-primary">Program Information Text</h3>

            <ul className="infos grid grid-cols-1 sm:gap-4 gap-2">
              <li className="text-[#595564] dark:text-white col-span-1 flex gap-2 items-center">
                <DotIcon size={32} />
                <span className="text-base">Content</span>
              </li>
              <li className="text-[#595564] dark:text-white col-span-1 flex gap-2 items-center">
                <DotIcon size={32} />
                <span className="text-base">Content</span>
              </li>
              <li className="text-[#595564] dark:text-white col-span-1 flex gap-2 items-center">
                <DotIcon size={32} />
                <span className="text-base">Content</span>
              </li>
              <li className="text-[#595564] dark:text-white col-span-1 flex gap-2 items-center">
                <DotIcon size={32} />
                <span className="text-base">Content</span>
              </li>
              <li className="text-[#595564] dark:text-white col-span-1 flex gap-2 items-center">
                <DotIcon size={32} />
                <span className="text-base">Content</span>
              </li>
              <li className="text-[#595564] dark:text-white col-span-1 flex gap-2 items-center">
                <DotIcon size={32} />
                <span className="text-base">Content</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
