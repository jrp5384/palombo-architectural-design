import Link from "next/link";

import { navigationLinks } from "@/lib/site-data";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/60 bg-stone-50/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-site items-center justify-between gap-6 px-6 py-6 lg:px-10">
        <Link
          href="/"
          className="max-w-[15rem] font-serif text-xl leading-tight tracking-[0.06em] text-stone-900 transition-opacity duration-300 hover:opacity-70 sm:max-w-none"
        >
          Palombo Architectural Design
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-10 text-[13px] uppercase tracking-[0.16em] text-stone-700">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors duration-300 hover:text-stone-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <nav aria-label="Mobile" className="border-t border-stone-200/80 md:hidden">
        <ul className="flex flex-wrap gap-x-6 gap-y-3 px-6 py-4 text-[13px] uppercase tracking-[0.16em] text-stone-700">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors duration-300 hover:text-stone-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
