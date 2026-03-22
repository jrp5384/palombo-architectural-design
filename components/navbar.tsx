import Link from "next/link";

import { navigationLinks } from "@/lib/site-data";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-site items-center justify-between gap-6 px-6 py-5 lg:px-10">
        <Link
          href="/"
          className="font-serif text-xl tracking-[0.08em] text-stone-900 transition-opacity duration-300 hover:opacity-70"
        >
          Palombo Architectural Design
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-stone-700">
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
        <ul className="flex flex-wrap gap-x-6 gap-y-3 px-6 py-4 text-sm text-stone-700">
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
