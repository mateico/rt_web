import { Facebook, Linkedin, Instagram } from 'lucide-react';

export default function SocialLinks({ className = '' }) {
    const links = [
        { href: 'https://facebook.com/yourpage', label: 'Facebook', Icon: Facebook },
        { href: 'https://instagram.com/yourpage', label: 'Instagram', Icon: Instagram },
    ];

    return (
        <ul className={`flex items-center gap-3 ${className} mr-2`}>
            {links.map(({ href, label, Icon }) => (
                <li key={label}>
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="inline-flex p-2 rounded-md hover:bg-primary-100"
                    >
                        <Icon className="h-5 w-5 text-primary-700" />
                    </a>
                </li>
            ))}
        </ul>
    );
}