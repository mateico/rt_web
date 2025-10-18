'use client';

import { useMemo } from 'react';
import { MessageCircle } from 'lucide-react'; // or use a WA svg
// npm i lucide-react  (or use your own icon)

type Props = {
    phoneE164: string;      // e.g. "+59891234567"
    defaultMsg?: string;    // prefilled message
    showOnDesktop?: boolean;
};

export default function FloatingWhatsAppButton({
                                                   phoneE164,
                                                   defaultMsg = "Hola, quiero consultar por un paquete de viaje",
                                                   showOnDesktop = false,
                                               }: Props) {
    const encoded = useMemo(() => encodeURIComponent(defaultMsg), [defaultMsg]);

    // Web fallback works on desktop & mobile browsers
    const waWeb = `https://wa.me/${phoneE164.replace('+','')}/?text=${encoded}`;
    // Optional deep link (some mobile browsers open the app)
    const waDeep = `whatsapp://send?phone=${phoneE164.replace('+','')}&text=${encoded}`;

    return (
        <div
            className={`fixed z-[60] right-4 bottom-20 mb-3 md:bottom-6 md:right-6
                  ${showOnDesktop ? 'block' : 'md:hidden'}`}
            // keep above your BottomNavBar; adjust offsets if needed
        >
            <a
                href={waWeb}
                onClick={(e) => {
                    // Try deep link first (mobile), fall back to web if it fails
                    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                    if (isMobile) {
                        window.location.href = waDeep;
                        // let the browser fall back to waWeb if deep link isn’t handled
                    }
                }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chatear por WhatsApp"
                className="group inline-flex items-center gap-2 rounded-full shadow-lg
                   bg-[#25D366] text-white px-4 py-3 md:px-5 md:py-3
                   transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366]/40"
            >
                <MessageCircle className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
                <span className="font-semibold hidden sm:inline">WhatsApp</span>
            </a>
        </div>
    );
}
