"use client";

import Link from "next/link";

const team = [
  {
    name: "Красимир Бънчев",
    title: "Главен адвокат",
    specialization: "Наследствено право, корпоративно право",
    bio: "Квалифициран адвокат с 15+ години опит. Специалист в наследствено право и корпоративни услуги.",
  },
  {
    name: "Асистент",
    title: "Юридически асистент",
    specialization: "Всички области",
    bio: "Опитен правен асистент готов да помогне с вашите юридически нужди.",
  },
];

const values = [
  {
    title: "Честност",
    icon: "✓",
    desc: "Прозрачна комуникация с всички клиенти",
  },
  { title: "Качество", icon: "⭐", desc: "Висок клас юридически услуги" },
  { title: "Отдаденост", icon: "💪", desc: "Защита на вашите интереси" },
  {
    title: "Експертиза",
    icon: "🎯",
    desc: "Дългогодишен опит и специализация",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-amber-50 mb-4">За нас</h1>
          <p className="text-2xl text-amber-200">
            Вашия доверен партньор за юридически казуси
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-2xl p-12 backdrop-blur">
            <h2 className="text-3xl font-bold text-amber-50 mb-6">
              Кто сме ние?
            </h2>
            <p className="text-amber-200 text-lg leading-relaxed mb-4">
              Адвокатска кантора "Красимир Бънчев" предоставя комплексни
              юридически услуги на клиенти от цялата страна. Нашата мисия е да
              предоставим най-висок клас правна защита с фокус на резултатите.
            </p>
            <p className="text-amber-200 text-lg leading-relaxed">
              С над 15 години опит, ние специализираме в наследствено право,
              корпоративни услуги и защита на граждански права. Всеки клиент
              получава индивидуално внимание и персонализирани решения за техния
              казус.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 border-y border-amber-500/20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-50 mb-12 text-center">
            Нашите ценности
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-amber-500/10 to-yellow-600/10 border border-amber-500/30 rounded-xl p-6 backdrop-blur hover:border-amber-500/50 transition"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-amber-50">
                  {value.title}
                </h3>
                <p className="text-amber-200 text-sm mt-2">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-50 mb-12 text-center">
            Нашият тим
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 hover:border-amber-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 backdrop-blur"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full mb-6 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                  👤
                </div>
                <h3 className="text-2xl font-bold text-amber-50">
                  {member.name}
                </h3>
                <p className="text-amber-400 font-semibold mb-3">
                  {member.title}
                </p>
                <p className="text-amber-200 text-sm mb-4">
                  {member.specialization}
                </p>
                <p className="text-amber-100 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 border-y border-amber-500/20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Години опит" },
              { number: "500+", label: "Решени дела" },
              { number: "100%", label: "Задоволни клиенти" },
              { number: "24/7", label: "На ваше разположение" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl font-bold text-amber-400">
                  {stat.number}
                </div>
                <div className="text-amber-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-50 mb-6">
            Готов ли си да работиш с нас?
          </h2>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition font-bold inline-block"
          >
            Начало консултация
          </Link>
        </div>
      </section>
    </div>
  );
}
