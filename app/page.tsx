import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Адвокат Красимир Бънчев",
  description:
    "Официален сайт на адвокатска кантора Красимир Бънчев в Момчилград. Правни консултации и представителство за граждани и бизнес.",
  alternates: {
    canonical: "/",
  },
};

const services = [
  {
    title: "Административно право",
    short:
      "Съдействие и представителство пред държавни и общински органи при административни процедури.",
  },
  {
    title: "Вещно право",
    short:
      "Правна помощ при вещни отношения, собственост и владение, включително делби и имотни спорове.",
  },
  {
    title: "Гражданско право",
    short:
      "Представителство по договорни, вещни и облигационни отношения, искови и заповедни производства.",
  },
  {
    title: "Наследствено право",
    short:
      "Консултации и представителство при наследяване, делби, завещания и спорове между наследници.",
  },
  {
    title: "Облигационно право",
    short:
      "Правна помощ при договори и задължения, както и по искове за обезщетения и неустойки.",
  },
  {
    title: "Семейно право",
    short:
      "Правна помощ при разводи, родителски права, издръжка и спорове между съпрузи и родители.",
  },
  {
    title: "Търговско право",
    short:
      "Учредяване на дружества, договори между съдружници и текущо правно обслужване на бизнеса.",
  },
  {
    title: "Трудово право",
    short:
      "Защита при уволнение, трудови спорове, неизплатени възнаграждения и дисциплинарни производства.",
  },
];

const highlights = [
  "Ясна стратегия и конкретни срокове",
  "Персонален подход към всеки клиент",
];

export default function Home() {
  return (
    <div>
      <section className="site-container grid gap-12 pb-20 pt-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="reveal">
          <h1 className="title-accent mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight text-stone-900 md:text-6xl">
            Адвокатска защита и консултации за граждани и бизнес в цялата страна
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone-700">
            Адвокатска кантора Красимир Бънчев предоставя правна помощ при
            сложни и ежедневни казуси. Работим структурирано, с предварителен
            анализ на риска и практични решения, съобразени с вашите цели.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 reveal delay-1">
            <Link
              href="/services"
              className="btn-primary rounded-lg px-5 py-3 text-sm font-semibold"
            >
              Разгледайте услугите
            </Link>
            <Link
              href="/contact"
              className="btn-secondary rounded-lg px-5 py-3 text-sm font-semibold"
            >
              Данни за контакт
            </Link>
          </div>

          <ul className="mt-8 grid gap-2 text-sm text-stone-700 sm:grid-cols-3 reveal delay-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-stone-300/90 bg-[#fdf9f2] px-4 py-3 card-hover"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <aside className="paper-card p-7 card-hover reveal delay-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-600">
            Бърз преглед
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            Как работим
          </h2>
          <ol className="mt-5 space-y-4 text-sm text-stone-700">
            <li>
              <strong className="text-stone-900">1. Първичен анализ:</strong>{" "}
              преглеждаме фактите, документите и правната рамка.
            </li>
            <li>
              <strong className="text-stone-900">2. План по казуса:</strong>{" "}
              получавате конкретни стъпки, срокове и очаквани резултати.
            </li>
            <li>
              <strong className="text-stone-900">3. Представителство:</strong>{" "}
              защита на интереса ви при преговори и пред институции.
            </li>
          </ol>
        </aside>
      </section>

      <section className="border-y border-stone-300/80 bg-[#f7f1e6] py-16 reveal">
        <div className="site-container">
          <h2 className="title-accent text-3xl font-semibold text-stone-900 md:text-4xl">
            Сфери на дейност
          </h2>
          <p className="mt-3 max-w-2xl text-stone-700">
            Поддържаме стабилна практика в ключови правни направления и работим
            по казуси с висока фактическа и правна сложност.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="paper-card p-6 card-hover"
              >
                <h3 className="text-xl font-semibold text-stone-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-stone-700">{service.short}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
