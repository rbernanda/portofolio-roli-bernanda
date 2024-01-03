import Link from "next/link";
import Image from "next/image";

import MaxWidthWrapper from "./MaxwidthWrapper";
import ThemeSwitch from "./ThemeSwitch";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 border-b border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
      <MaxWidthWrapper>
        <div className="flex justify-between py-5 items-center">
          <nav className="leading-6 font-semibold text-slate-700 dark:text-slate-200">
            <ul className="flex space-x-4 sm:space-x-8 items-center">
              <li>
                <Link href="/" className="flex items-center">
                  <Image
                    alt="logo"
                    src="/logo.svg"
                    width={40}
                    height={40}
                    className="-rotate-6"
                  />
                </Link>
              </li>
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-500"
                  >
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeSwitch />
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
