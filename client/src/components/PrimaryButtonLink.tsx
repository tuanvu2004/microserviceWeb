import Link from "next/link";
import React from "react";

interface PrimaryButtonLinkProps {
    href: string;
    text: string;
    className?: string;
    icon?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
const PrimaryButtonLink: React.FC<PrimaryButtonLinkProps> = ({ 
    href, 
    text,
    className = "", 
    icon,
    onClick,
}) => {
    const baseClasses = `
        bg-[#f9c638] mt-4
        text-[#375736] font-Domine
        font-bold uppercase text-sm
        py-3 px-16
        rounded-md 
        shadow-xl 
        hover:bg-[#eab308] transition
        text-center 
        inline-block 
        inline-flex items-center justify-center gap-2
    `;

    return (
        <Link href={href} className={`${baseClasses} ${className} `} onClick={onClick}>
            {text}
            {icon && icon}
        </Link>
    );
};

export default PrimaryButtonLink;