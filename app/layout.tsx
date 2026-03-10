import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import NavLink from "./components/nav-link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Адвокатска кантора Красимир Бънчев",
  description:
    "Професионални юридически консултации и процесуално представителство за граждани и бизнес.",
};

const navItems = [
  { href: "/", label: "Начало" },
  { href: "/services", label: "Услуги" },
  { href: "/about", label: "За кантората" },
  { href: "/blog", label: "Публикации" },
  { href: "/contact", label: "Контакти" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-stone-900`}
      >
        <header className="sticky top-0 z-50 border-b border-stone-300/70 bg-[#f9f6f1]/95 backdrop-blur">
          <div className="h-[2px] w-full bg-gradient-to-r from-[#8a5a2b]/30 via-[#9f7449]/60 to-[#1b3f53]/35" />
          <div className="site-container flex items-center justify-between py-4">
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg border border-[#7a4f28]/40 bg-[#8a5a2b] text-lg text-[#fff7ea] transition group-hover:scale-105">
                ⚖
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide text-stone-900">
                  Красимир Бънчев
                </p>
                <p className="text-xs uppercase tracking-[0.12em] text-stone-600">
                  Адвокатска кантора
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-7 md:flex">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} />
              ))}
            </nav>

            <a
              href="tel:+359882550201"
              className="btn-primary rounded-lg px-4 py-2 text-sm font-semibold"
            >
              +359 882550201
            </a>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-20 border-t border-stone-300 bg-[#f6f0e5]">
          <div className="site-container grid gap-10 py-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-stone-900">
                Адвокатска кантора Красимир Бънчев
              </h3>
              <p className="mt-3 max-w-xl text-sm text-stone-700">
                Практична правна подкрепа с фокус върху ясна комуникация,
                стъпков план за действие и защита на интереса на клиента във
                всеки етап от казуса.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-stone-800">
                Навигация
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-stone-700">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition hover:text-[#684321]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-stone-800">
                Данни за контакт
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-stone-700">
                <li>Телефон: +359 882550201</li>
                <li>Email: kantora_banchev@abv.bg</li>
                <li>
                  Адрес: гр. Момчилград, ул. Гюмюрджинска 50а, ет. 2, ап. 1
                </li>
                <li>Работно време: Понелник - Петък, 08:30 - 17:30</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-300/80 py-4 text-center text-xs text-stone-600">
            © 2026 Адвокатска кантора Красимир Бънчев. Всички права запазени.
          </div>
        </footer>
      </body>
    </html>
  );
}
