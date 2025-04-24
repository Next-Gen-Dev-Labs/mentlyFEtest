'use client'
import { Checkbox } from '@headlessui/react'
import { useState } from 'react'

export function Checkmark() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Checkbox
      checked={enabled}
      onChange={setEnabled}
      className="group block size-4 rounded border bg-white data-checked:bg-[#6f01d0]"
    >
      <svg className="stroke-white opacity-0 group-data-checked:opacity-100" viewBox="0 0 14 14" fill="">
        <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Checkbox>
  )
}