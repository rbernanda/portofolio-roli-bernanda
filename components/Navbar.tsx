import Link from "next/link";

import MaxWidthWrapper from "./MaxwidthWrapper";
import ThemeSwitch from "./ThemeSwitch";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 border-b border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center py-6">
          <nav className="leading-6 font-semibold text-slate-700 dark:text-slate-200">
            <ul className="flex space-x-8">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-sky-500 dark:hover:text-sky-400"
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
