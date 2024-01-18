import { lusi } from '@/app/ui/fonts';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusi.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="mr-[8px] h-12 w-12 rotate-[15deg] md:mr-[16px]" />
      <p className="text-[32px]">Global Pharma</p>
    </div>
  );
}
