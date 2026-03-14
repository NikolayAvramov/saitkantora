import Link from "next/link";

const sections = [
  {
    id: "inheritance",
    title: "Наследствено право",
    description:
      "Правна помощ при наследяване, завещания, делби и спорове между наследници.",
    points: [
      "Проверка и изготвяне на завещания",
      "Процедури по приемане и отказ от наследство",
      "Съдебна и извънсъдебна делба",
      "Оспорване на сделки и завещателни разпореждания",
    ],
  },
  {
    id: "corporate",
    title: "Търговско и корпоративно право",
    description:
      "Подкрепа за дружества при учредяване, преструктуриране и ежедневна дейност.",
    points: [
      "Регистрация на дружества и промени по партиди",
      "Договори между съдружници и управители",
      "Процесуално представителство по търговски спорове",
      "Правен одит на договори и вътрешни процедури",
    ],
  },
  {
    id: "labor",
    title: "Трудово право",
    description:
      "Защита на работодатели и служители при трудови отношения и спорове.",
    points: [
      "Изготвяне и преглед на трудови договори",
      "Консултации при дисциплинарни производства",
      "Защита при незаконно уволнение",
      "Искове за трудови възнаграждения и обезщетения",
    ],
  },
  {
    id: "civil",
    title: "Гражданско право",
    description:
      "Представителство по договорни, вещни и облигационни отношения.",
    points: [
      "Съставяне и преглед на граждански договори",
      "Искове за неизпълнение и неустойки",
      "Спорове за собственост и владение",
      "Обезщетения за вреди",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="site-container pb-20 pt-14">
      <header className="max-w-3xl reveal">
        <h1 className="title-accent mt-5 text-4xl font-semibold leading-tight text-stone-900 md:text-5xl">
          Пълно правно обслужване с фокус върху предвидим резултат
        </h1>
        <p className="mt-4 text-stone-700">
          Предлагаме консултации, изготвяне на документи и процесуално
          представителство. Всеки казус се разглежда индивидуално, с ясно
          описание на рисковете и плана за действие.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-2 reveal delay-1">
        {sections.map((section) => (
          <article
            key={section.id}
            id={section.id}
            className="paper-card p-7 card-hover"
          >
            <h2 className="text-2xl font-semibold text-stone-900">
              {section.title}
            </h2>
            <p className="mt-2 text-sm text-stone-700">{section.description}</p>
            <ul className="mt-5 space-y-2 text-sm text-stone-700">
              {section.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 text-xs text-stone-500">●</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-stone-300 bg-[#f8f3ea] p-6 reveal delay-2">
        <div>
          <h3 className="text-xl font-semibold text-stone-900">
            Нужна е консултация по конкретен казус?
          </h3>
          <p className="mt-1 text-sm text-stone-700">
            Свържете се с кантората за първоначален правен анализ и насоки.
          </p>
        </div>
        <Link
          href="/contact"
          className="btn-primary rounded-lg px-5 py-3 text-sm font-semibold"
        >
          Контактни данни
        </Link>
      </section>
    </div>
  );
}
