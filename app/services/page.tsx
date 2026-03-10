"use client";

import Link from "next/link";

const services = [
  {
    id: "inheritance",
    title: "Наследствено право",
    icon: "📜",
    description:
      "Експертиза в разделяне на наследство, завещания и семейни спорове",
    details: [
      "Съставяне и проверка на завещания",
      "Разрешаване на наследствени спорове",
      "Раздел на наследство",
      "Представителство пред нотариуси",
    ],
  },
  {
    id: "corporate",
    title: "Корпоративно право",
    icon: "🏛️",
    description: "Регистрация на фирми, договори и корпоративна управления",
    details: [
      "Регистрация и учредяване на фирми",
      "Договори и споразумения",
      "Корпоративна управління",
      "Слияния и придобивания",
    ],
  },
  {
    id: "labor",
    title: "Работно право",
    icon: "👔",
    description: "Защита на трудовите права и разрешаване на спорове",
    details: [
      "Трудови договори",
      "Защита на трудовите права",
      "Трудови спорове",
      "Представителство пред съде",
    ],
  },
  {
    id: "civil",
    title: "Гражданско право",
    icon: "⚖️",
    description: "Договорни споразумения и защита на граждански права",
    details: [
      "Договорни спорове",
      "Защита на имущество",
      "Отговорност",
      "Командировки въз основата на договор",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-amber-50 mb-4">
            Нашите услуги
          </h1>
          <p className="text-2xl text-amber-200">
            Комплексна юридическа подкрепа във всички области
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 hover:border-amber-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 backdrop-blur hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-50">
                      {service.title}
                    </h3>
                    <p className="text-amber-200 text-sm mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-amber-100"
                    >
                      <span className="text-amber-400">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-block border-2 border-amber-500 text-amber-400 px-6 py-2 rounded-lg hover:bg-amber-500/10 transition font-bold text-sm"
                >
                  Запиши консултация →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 px-6 border-y border-amber-500/20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-50 mb-12 text-center">
            Специализирани услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Представителство", desc: "През всички съдилища" },
              { title: "Консултации", desc: "Дневни и онлайн" },
              { title: "Абонамент", desc: "Правно обслужване" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-amber-500/10 to-yellow-600/10 border border-amber-500/30 rounded-lg p-6 backdrop-blur"
              >
                <h3 className="text-xl font-bold text-amber-50 mb-2">
                  {item.title}
                </h3>
                <p className="text-amber-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-50 mb-6">
            Не намери найс което търсиш?
          </h2>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition font-bold inline-block"
          >
            Свържи се с нас
          </Link>
        </div>
      </section>
    </div>
  );
}
