import { Copyright } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=' flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 '>
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center -ml-2">
          <Image
            src="/logo.png"
            alt="An Nguyen Home"
            width={36} height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className="hidden md:block text-md font-medium tracking-wider text-white ">
            An Nguyen Home.
          </p>
        </Link>
        <p className="text-sm text-gray-400">© 2025 An Nguyen Home.</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href={"/"}>Homepage</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>Terms of Service</Link>
        <Link href={"/"}>Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href={"/"}>All Products</Link>
        <Link href={"/"}>New Arrivals</Link>
        <Link href={"/"}>Best Sellers</Link>
        <Link href={"/"}>Sale</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Contact</Link>
        <Link href={"/"}>Blog</Link>
        <Link href={"/"}>Affiliate Program</Link>
      </div>
    </div>
  );
};

export default Footer;