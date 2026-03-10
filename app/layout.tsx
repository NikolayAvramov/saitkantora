import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Адвокатска кантора Красимир Бънчев | Юридични консултации",
  description:
    "Адвокатска кантора Красимир Бънчев предлага юридически консултации и защита в различни области на правото. Свържете се с нас за професионална помощ.",
  keywords:
    "адвокат, адвокатска кантора, юридически консултации, Красимир Бънчев",
  openGraph: {
    title: "Адвокатска кантора Красимир Бънчев",
    description: "Професионални юридически услуги и консултации",
    url: "https://saitkantora.com",
    siteName: "Адвокатска кантора Красимир Бънчев",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950`}
      >
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-amber-500/20 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-90 transition"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center text-slate-900 font-bold text-lg">
                ⚖️
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-amber-50">
                  Бънчев & Co..
                </h1>
                <p className="text-xs text-amber-200">Юридически услуги</p>
              </div>
            </Link>
            <div className="flex items-center gap-8">
              <div className="hidden md:flex gap-8">
                <Link
                  href="/"
                  className="text-amber-100 hover:text-amber-400 transition font-medium text-sm"
                >
                  Начало
                </Link>
                <Link
                  href="/services"
                  className="text-amber-100 hover:text-amber-400 transition font-medium text-sm"
                >
                  Услуги
                </Link>
                <Link
                  href="/about"
                  className="text-amber-100 hover:text-amber-400 transition font-medium text-sm"
                >
                  За нас
                </Link>
                <Link
                  href="/blog"
                  className="text-amber-100 hover:text-amber-400 transition font-medium text-sm"
                >
                  Блог
                </Link>
                <Link
                  href="/contact"
                  className="text-amber-100 hover:text-amber-400 transition font-medium text-sm"
                >
                  Контакт
                </Link>
              </div>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition font-bold text-sm"
              >
                Консултация
              </Link>
            </div>
          </div>
        </nav>
        {children}

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-amber-500/20 text-amber-50 py-16 px-6 mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center text-slate-900 font-bold">
                    ⚖️
                  </div>
                  <span className="text-lg font-bold">Бънчев & Co.</span>
                </div>
                <p className="text-amber-200 text-sm">
                  Професионална адвокатска кантора със специализирани услуги в
                  различни области на правото.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-amber-400">УСЛУГИ</h4>
                <ul className="space-y-2 text-sm text-amber-200">
                  <li>
                    <Link
                      href="/services#inheritance"
                      className="hover:text-amber-400 transition"
                    >
                      Наследствено право
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services#corporate"
                      className="hover:text-amber-400 transition"
                    >
                      Корпоративно право
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services#labor"
                      className="hover:text-amber-400 transition"
                    >
                      Работно право
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services#civil"
                      className="hover:text-amber-400 transition"
                    >
                      Гражданско право
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-amber-400">ЛИНКОВЕ</h4>
                <ul className="space-y-2 text-sm text-amber-200">
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-amber-400 transition"
                    >
                      За кантората
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="hover:text-amber-400 transition"
                    >
                      Блог
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-amber-400 transition"
                    >
                      Контакти
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-amber-400 transition">
                      Начало
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-amber-400">КОНТАКТ</h4>
                <p className="text-amber-200 text-sm mb-3">
                  📞 +359 2 XXX XXXX
                </p>
                <p className="text-amber-200 text-sm mb-3">
                  📧 info@advbanchev.bg
                </p>
                <p className="text-amber-200 text-sm">📍 София, България</p>
              </div>
            </div>
            <div className="border-t border-amber-500/20 pt-8 text-center text-amber-300 text-sm">
              <p>
                &copy; 2024 Адвокатска кантора Красимир Бънчев. Всички права
                запазени.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
