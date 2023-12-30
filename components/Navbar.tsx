import MaxWidthWrapper from "./MaxwidthWrapper";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 transition-shadow shadow-sm">
      <MaxWidthWrapper>
        <nav className="bg-white flex justify-between items-center transition-colors py-4">
          <ul className="flex items-center space-x-3 text-xs md:space-x-4 md:text-base">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="rounded-sm py-2 transition-colors font-medium text-black focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
                >
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
