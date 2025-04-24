// src/app/components/shared/HelpDeskCard.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function HelpDeskCard() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)]  text-white p-3 rounded-lg flex flex-col gap-4 font-sans">
      <div className="flex flex-col gap-2">
        <div>
          <Image src="/contact.svg" alt="Contact" width={20} height={20} />
        </div>
        <p className="text-xs font-bold">
          Got some questions, enquiries or need help?
        </p>
      </div>
      <Link
        href="/help"
        className="text-amber-400 underline text-[10px] font-medium hover:text-amber-300 transition-colors"
      >
        Visit Mently Help Desk Here
      </Link>
    </div>
  );
}
