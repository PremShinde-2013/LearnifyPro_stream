import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';
import { ThemeSwitch } from './theme-switch';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full  px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <p className="text-[26px] font-extrabold  max-sm:hidden">
          LearnifyProStream
        </p>
      </Link>
      <div className="flex-between gap-5">
        <ThemeSwitch />
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
