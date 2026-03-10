const posts = [
  {
    title: "Как да се подготвите за наследствена делба",
    date: "02 март 2026",
    category: "Наследствено право",
    excerpt:
      "Кои документи са необходими, какви са често срещаните грешки и как да защитите интереса си още в началото на процедурата.",
  },
  {
    title: "Пет ключови клаузи във всеки търговски договор",
    date: "18 февруари 2026",
    category: "Търговско право",
    excerpt:
      "Неясните условия в договорите водят до спорове. В статията разглеждаме кои клаузи трябва да бъдат изрично формулирани.",
  },
  {
    title: "Незаконно уволнение: първи стъпки за защита",
    date: "30 януари 2026",
    category: "Трудово право",
    excerpt:
      "Кратък план какви действия да предприемете, в какви срокове и какви доказателства да запазите при трудов спор.",
  },
];

export default function BlogPage() {
  return (
    <div className="site-container pb-20 pt-14">
      <header className="max-w-3xl reveal">
        <span className="section-label">Публикации</span>
        <h1 className="title-accent mt-5 text-4xl font-semibold leading-tight text-stone-900 md:text-5xl">
          Анализи и практически насоки по актуални правни теми
        </h1>
        <p className="mt-4 text-stone-700">
          Селекция от кратки материали, насочени към реални казуси от практиката.
          Целта е да разполагате с конкретни ориентири преди да предприемете действия.
        </p>
      </header>

      <section className="mt-10 space-y-5 reveal delay-1">
        {posts.map((post) => (
          <article key={post.title} className="paper-card p-7 card-hover">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-stone-600">
              {post.category} · {post.date}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-stone-900">{post.title}</h2>
            <p className="mt-3 text-sm leading-7 text-stone-700">{post.excerpt}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
