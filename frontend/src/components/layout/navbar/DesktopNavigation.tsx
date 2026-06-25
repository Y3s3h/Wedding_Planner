import Link from "next/link";
import { navLinks } from "./nav-links";

export default function DesktopNavigation() {
  return (
    <nav>
      <ul className="flex items-center gap-10">
        {navLinks.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="relative text-sm font-medium text-gray-700 transition-all duration-300 hover:text-rose-600 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-rose-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}