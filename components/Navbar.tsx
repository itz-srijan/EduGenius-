"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import NavItems from "./NavItems";
import { cn } from "@/lib/utils";

const NavbarItems = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Companions", href: "/companions" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className='navbar'>
      <Link href='/'>
        <div>
          <Image
            src='/images/small_logo.png'
            alt='logo'
            width={80}
            height={80}
          />
        </div>
      </Link>
      <div className='flex items-center gap-8'>
        {NavbarItems.map((item) => (
          <NavItems
            key={item.label}
            label={item.label}
            href={item.href}
            classname={cn(
              pathname === item.href && "text-primary font-semibold"
            )}
          />
        ))}
        <p>SignIn</p>
      </div>
    </nav>
  );
};

export default Navbar;
