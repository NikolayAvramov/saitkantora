import Link from "next/link";

const contactCards = [
  {
    title: "Телефон",
    value: "+359 700 00 000",
    hint: "Понеделник - Петък, 09:00 - 18:00",
    href: "tel:+35970000000",
  },
  {
    title: "Имейл",
    value: "info@advbanchev.bg",
    hint: "Отговор в рамките на един работен ден",
    href: "mailto:info@advbanchev.bg",
  },
  {
    title: "Адрес",
    value: "гр. Момчилград, България",
    hint: "Срещи с предварително уговорен час",
  },
];

export default function ContactPage() {
  return (
    <div className="site-container pb-20 pt-14">
      <header className="max-w-3xl reveal">
       
        <h1 className="title-accent mt-5 text-4xl font-semibold leading-tight text-stone-900 md:text-5xl">
          Свържете се с нас
        </h1>
        <p className="mt-4 text-stone-700">
          За въпроси относно правни услуги и насрочване на консултация можете да се
          свържете с нас чрез посочените канали.
        </p>
      </header>

      <section className="mt-10 grid gap-5 md:grid-cols-3 reveal delay-1">
        {contactCards.map((card) => (
          <article key={card.title} className="paper-card p-6 card-hover">
            <h2 className="text-xl font-semibold text-stone-900">{card.title}</h2>
            {card.href ? (
              <a href={card.href} className="mt-3 block text-lg font-medium text-stone-800 hover:underline">
                {card.value}
              </a>
            ) : (
              <p className="mt-3 text-lg font-medium text-stone-800">{card.value}</p>
            )}
            <p className="mt-2 text-sm text-stone-600">{card.hint}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 paper-card p-6 reveal delay-2">
        <h2 className="text-xl font-semibold text-stone-900">Администратор на лични данни</h2>
        <p className="mt-3 text-stone-700">
          Администратор на лични данни е <strong>Красимир Бънчев</strong>.
          За обработването на лични данни вижте
          {" "}
          <Link href="/privacy-policy" className="font-medium text-[#684321] hover:underline">
            Политика за поверителност
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
