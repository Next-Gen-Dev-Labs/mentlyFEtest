'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';

export function AppSelect({
  listLabel,
  label,
  requiredField = false,
  listItems,
  placeholder,
  value,
  onChange,
  width = 'w-full',
  triggerStyle = 'border-gray-600',
  error,
}: {
  listLabel?: string;
  label?: string;
  requiredField?: boolean;
  listItems: { label: string; value: string }[];
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  width?: string;
  triggerStyle?: string;
  error?: string;
}) {
  return (
    <div className={`${width}`}>
      <Select value={value} onValueChange={value => onChange(value)}>
        <div className="flex items-center gap-2">
          {label && (
            <p
              className={`text-xs font-semibold text-black flex justify-start w-full ${
                requiredField
                  ? 'after:content-["*"] after:text-red-500 after:ml-1 after:font-bold'
                  : ''
              }`}
            >
              {label}
            </p>
          )}

          <SelectTrigger
            className={`${triggerStyle} h-[24px] text-xs transition-all duration-300 placeholder:text-black outline-none focus:ring-1 focus:ring-offset-0 focus:ring-primary ${
              error ? 'border-red-500 ring-red-500' : ''
            }`}
          >
            <SelectValue
              className="text-black placeholder:text-black text-xs placeholder:text-xs"
              placeholder={<p className="text-black text-xs">{placeholder}</p>}
              defaultValue={value}
            />
          </SelectTrigger>

          <SelectContent className="bg-white p-0">
            <SelectGroup className="flex flex-col justify-start p-0 text-xs">
              {listItems.length > 0 && listLabel ? (
                <SelectLabel className="text-black text-xs px-2">
                  {listLabel}
                </SelectLabel>
              ) : null}

              {listItems.map(item => (
                <SelectItem
                  key={item.value}
                  className="text-black hover:bg-gray-300 hover:rounded-md cursor-pointer text-xs px-2"
                  value={item.value}
                >
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </div>
      </Select>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
