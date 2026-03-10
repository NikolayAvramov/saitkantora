"use client";

const articles = [
  {
    title: "Как защитаваме вашите права при наследство",
    category: "Наследствено право",
    date: "10 март 2024",
    excerpt:
      "Разберете как ние помагаме при разделяне на наследство и защита на вашите права...",
    content: "Пълната статия...",
  },
  {
    title: "10 неща които трябва да знаеш преди сключване на договор",
    category: "Договори",
    date: "8 март 2024",
    excerpt:
      "Основни моменти при сключване на всякакви видове договори и как да защитиш себе си...",
    content: "Пълната статия...",
  },
  {
    title: "Правата на работника в България",
    category: "Работно право",
    date: "5 март 2024",
    excerpt:
      "Какви са вашите основни трудови права и как да ги защитите при нарушения...",
    content: "Пълната статия...",
  },
  {
    title: "Регистрация на фирма - пълен гайд",
    category: "Корпоративно право",
    date: "1 март 2024",
    excerpt:
      "Всичко което трябва да знаеш за регистрация на твоя собствена фирма...",
    content: "Пълната статия...",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-amber-50 mb-4">Блог</h1>
          <p className="text-2xl text-amber-200">
            Полезни съвети и новости от юридическия свят
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {articles.map((article, i) => (
              <article
                key={i}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 hover:border-amber-500/50 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 backdrop-blur hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-3">
                    <span className="inline-block bg-amber-500/20 border border-amber-500/50 text-amber-300 px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                    <span className="text-amber-400 text-sm">
                      {article.date}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-amber-50 mb-3 group-hover:text-amber-300 transition">
                  {article.title}
                </h3>
                <p className="text-amber-200 text-lg leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-block text-amber-400 hover:text-amber-300 font-bold transition"
                >
                  Прочети повече →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 border-t border-amber-500/20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-amber-500/10 to-yellow-600/10 border border-amber-500/30 rounded-2xl p-12 text-center backdrop-blur">
            <h2 className="text-3xl font-bold text-amber-50 mb-4">
              Остани в курс
            </h2>
            <p className="text-amber-200 mb-6">
              Получавай най-новите статии и съвети директно в твоя email
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Твоя email..."
                className="flex-1 px-4 py-3 rounded-lg bg-slate-900/50 border border-amber-500/30 text-amber-50 placeholder-amber-300/50 focus:outline-none focus:border-amber-400"
              />
              <button className="bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-amber-500/50 transition">
                Абонирай се
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
