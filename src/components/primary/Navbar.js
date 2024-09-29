"use client";
import Link from "next/link";
import { navs } from "../../lib/navs";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-3 bg-white shadow-sm">
      <div className="flex items-center space-x-4">
        {navs.map((nav) => (
          <Link
            key={nav.name}
            href={nav.href}
            className="text-gray-700 hover:text-black transition-colors duration-200"
          >
            {nav.name}
          </Link>
        ))}
      </div>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
    </nav>
  );
};

export default Navbar;
