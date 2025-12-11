// src/components/Navbar.tsx

import Link from "next/link";
import Image from "next/image";
import Input from "./Input"; // Giả định Input.tsx là component bạn vừa tạo
import ShoppingCartButton from "./ShoppingCartButton";
import { Bell, Home, Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-300 sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

        {/* LEFT: Logo và Tên */}
        <Link href="/" className="flex items-center gap-2 ">
          <Image
            src="/logo.png"
            alt="An Nguyen Home"
            width={36} height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className="hidden font-serif  md:block text-md font-bold tracking-wider">AN NGUYEN HOME</p>
        </Link>

        {/* RIGHT: Input và Icons */}
        <div className="flex items-center grow justify-end gap-5">
          <div className="hidden sm:block w-full max-w-md font-medium ">
            <Input
              id="search-input"
              placeholder="Search..."
              type="text"
              icon={<Search className="w-5 h-5 text-gray-500 " />}
            />
          </div>
          <div className="flex items-center gap-3 md:gap-4 ">
            <Bell className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer hidden sm:block" />
            <ShoppingCartButton />
            <Link
              href="/signIn/signin"
              className="hidden font-serif  md:block text-sm font-bold text-gray-700 hover:text-black whitespace-nowrap">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;