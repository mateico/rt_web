import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function RFLogo({ className }: { className?: string }) {
  return <img
      src="/rufina_travel_title.svg"
      alt="Rufina Travel"
      className={className ?? 'h-10 w-auto'} />;
}
