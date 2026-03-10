"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-amber-50 mb-4">Контакти</h1>
          <p className="text-2xl text-amber-200">
            Свържи се с нас за консултация
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-amber-50 mb-4">
                  Свържи се с нас
                </h2>
                <p className="text-amber-200 text-lg">
                  Имаш въпроси? Ние сме тук да помогнем. Контактирай нас по
                  начин подходящ за тебе.
                </p>
              </div>

              <div className="space-y-6">
                <div className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 hover:border-amber-500/50 rounded-xl p-6 transition backdrop-blur hover:-translate-y-1">
                  <p className="text-amber-400 font-semibold mb-1">
                    📞 Телефон
                  </p>
                  <a
                    href="tel:+359-2-XXX-XXXX"
                    className="text-2xl font-bold text-amber-50 hover:text-amber-300 transition"
                  >
                    +359 2 XXX XXXX
                  </a>
                </div>

                <div className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 hover:border-amber-500/50 rounded-xl p-6 transition backdrop-blur hover:-translate-y-1">
                  <p className="text-amber-400 font-semibold mb-1">📧 Email</p>
                  <a
                    href="mailto:info@advbanchev.bg"
                    className="text-2xl font-bold text-amber-50 hover:text-amber-300 transition"
                  >
                    info@advbanchev.bg
                  </a>
                </div>

                <div className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 hover:border-amber-500/50 rounded-xl p-6 transition backdrop-blur hover:-translate-y-1">
                  <p className="text-amber-400 font-semibold mb-1">📍 Адрес</p>
                  <p className="text-2xl font-bold text-amber-50">
                    Момчилград, България
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 hover:border-amber-500/50 rounded-xl p-6 transition backdrop-blur hover:-translate-y-1">
                  <p className="text-amber-400 font-semibold mb-1">
                    🕐 Работно време
                  </p>
                  <p className="text-lg text-amber-50">
                    Пол-Пт: 09:00 - 17:00
                    <br />
                    Събота - Неделя: По договореност
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-500/10 to-yellow-600/10 border border-amber-500/30 rounded-xl p-6 backdrop-blur">
                <p className="text-amber-200 text-sm leading-relaxed">
                  <strong>Внимание:</strong> За спешни случи или извън работното
                  време, получавш изненадни услуги. Моля, посочи в съобщението
                  степента на спешност.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-8 backdrop-blur"
              >
                <h3 className="text-2xl font-bold text-amber-50 mb-6">
                  Изпрати съобщение
                </h3>

                {submitted && (
                  <div className="bg-emerald-500/20 border border-emerald-500/50 text-emerald-200 px-4 py-3 rounded-lg">
                    ✓ Благодарим! Ще ви се свържем скоро.
                  </div>
                )}

                <div>
                  <label className="block text-amber-400 font-semibold mb-2">
                    Име *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-amber-500/30 text-amber-50 placeholder-amber-300/50 focus:outline-none focus:border-amber-400 transition"
                    placeholder="Вашето име"
                  />
                </div>

                <div>
                  <label className="block text-amber-400 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-amber-500/30 text-amber-50 placeholder-amber-300/50 focus:outline-none focus:border-amber-400 transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-amber-400 font-semibold mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-amber-500/30 text-amber-50 placeholder-amber-300/50 focus:outline-none focus:border-amber-400 transition"
                    placeholder="+359 2 XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-amber-400 font-semibold mb-2">
                    Тема
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-amber-500/30 text-amber-50 focus:outline-none focus:border-amber-400 transition">
                    <option className="bg-slate-900">Изберете тема...</option>
                    <option className="bg-slate-900">Наследствено право</option>
                    <option className="bg-slate-900">Корпоративно право</option>
                    <option className="bg-slate-900">Работно право</option>
                    <option className="bg-slate-900">Гражданско право</option>
                    <option className="bg-slate-900">Други</option>
                  </select>
                </div>

                <div>
                  <label className="block text-amber-400 font-semibold mb-2">
                    Съобщение *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-amber-500/30 text-amber-50 placeholder-amber-300/50 focus:outline-none focus:border-amber-400 transition resize-none"
                    placeholder="Твоето съобщение..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-amber-500/50 transition mt-6"
                >
                  Изпрати
                </button>

                <p className="text-amber-300 text-xs text-center">
                  * Задължески полета
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-t border-amber-500/20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-50 mb-12 text-center">
            Често задавани въпроси
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Колко струва консултацията?",
                a: "Első консултация съобразно договореност.",
              },
              {
                q: "Мога ли да получа консултация онлайн?",
                a: "Да, ние предлагаме онлайн консултации.",
              },
              {
                q: "Колко дълго е разрешаването на дело?",
                a: "Зависи от характера на делото. Средно 2-6 месеца.",
              },
              {
                q: "Можете ли да представлявате интереси пред съдя?",
                a: "Да, представляваме случаи пред всички съдилища.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-lg p-4 cursor-pointer"
              >
                <summary className="flex items-center justify-between font-bold text-amber-50 hover:text-amber-300 transition">
                  {faq.q}
                  <span className="group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-amber-200 mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
