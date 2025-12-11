import Image from "next/image";
import Link from "next/link";
import React from "react";
import PrimaryButtonLink from "@/src/components/PrimaryButtonLink";

interface HeroBannerProps {
    imageSrc: string;
    title: string;
    description: string;
    linkHref: string;
    linkText: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
    imageSrc,
    title,
    description,
    linkHref,
    linkText,
}) => {
    return (
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] overflow-hidden">
            <Image
                src={imageSrc}
                alt={title}
                fill
                style={{ objectFit: "cover" }}
                priority
            />

            <div className="absolute inset-7 flex flex-col justify-center items-start px-4 sm:pl-10 lg:pl-20 z-10 
            max-w-lg lg:max-w-[47%]"> 

                {/* TITLE */}
                <h1 className="text-l sm:text-xl md:text-3xl 
                    font-Domine font-bold 
                    text-[#FFF8E6] 
                    drop-shadow-[0_3px_6px_rgba(0,0,0,0.4)]
                    leading-tight">
                    {title}
                </h1>

                {/* DESCRIPTION */}
                <p className="text-sm sm:text-lg md:text-xl 
                    text-[#FFFDF5] 
                    font-Domine
                    mt-3 mb-6 
                    drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                    {description}
                </p>

                {/* BUTTON */}
                <PrimaryButtonLink
                href={linkHref}
                text={linkText}/>
            </div>
        </div>
    );
};

export default HeroBanner;