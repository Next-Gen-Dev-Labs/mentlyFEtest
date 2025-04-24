'use client'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';


interface selectProps {
  options?: string[];
}

export default function SelectComponent({ options }: selectProps) {
  const [selectedOption, setSelectedOption] = useState(options ? options[0] : "");

  return (
    <Listbox value={selectedOption} onChange={setSelectedOption}>
      <ListboxButton className="font-chivo flex items-center w-fit h-8 px-[10px] border border-font rounded-sm gap-2">
        {selectedOption} <span><IoIosArrowDown /></span>
      </ListboxButton>
      <ListboxOptions anchor='bottom' className="absolute rounded-sm z-5 w-fit bg-gray-200 text-mently-blue">
        {options?.map((option) => (
          <ListboxOption
            key={option}
            value={option}
            className={`w-full bg-gray-200 text-mently-blue p-6 ${options && options.indexOf(option) !== options.length - 1 && 'border-b'} py-1 cursor-pointer hover:bg-mently-blue/20`}
          >
            {option}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}