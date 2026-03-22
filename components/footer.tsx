import Link from "next/link";

import { contactDetails, navigationLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100">
      <div className="mx-auto grid max-w-site gap-12 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-10">
        <div>
          <p className="font-serif text-2xl text-stone-900">
            Palombo Architectural Design
          </p>
          <p className="mt-4 max-w-md text-sm leading-6 text-stone-700">
            A refined architecture practice creating timeless residential and
            commercial spaces with clarity, care, and enduring detail.
          </p>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-[0.24em] text-stone-500">
            Navigation
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-stone-700">
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
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-[0.24em] text-stone-500">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-stone-700">
            <li>
              <a
                href={`mailto:${contactDetails.email}`}
                className="transition-colors duration-300 hover:text-stone-900"
              >
                {contactDetails.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contactDetails.phone.replace(/[^0-9]/g, "")}`}
                className="transition-colors duration-300 hover:text-stone-900"
              >
                {contactDetails.phone}
              </a>
            </li>
            <li>{contactDetails.office}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
