const principles = [
  {
    title: "Точност и прозрачност",
    text: "Всеки клиент получава ясна оценка на шансовете, сроковете и възможните рискове.",
  },
  {
    title: "Лична ангажираност",
    text: "Казусите се водят с постоянна комуникация и фокус върху интереса на доверителя.",
  },
  {
    title: "Практична стратегия",
    text: "Изграждаме план, който е приложим и съобразен с конкретните факти по случая.",
  },
];

export default function AboutPage() {
  return (
    <div className="site-container pb-20 pt-14">
      <header className="max-w-3xl reveal">
        <h1 className="title-accent mt-5 text-4xl font-semibold leading-tight text-stone-900 md:text-5xl">
          Опитна юридическа практика, изградена върху доверие и резултати
        </h1>
        <p className="mt-4 text-stone-700">
          Кантората работи по административни, вещни, граждански, наследствени, облигационни, семейни, търговски и трудови 
          казуси. Целта ни е клиентът да получи увереност, че разполага с ясна
          правна позиция и правилно процесуално поведение.
        </p>
      </header>

      <section className="mt-10 grid gap-6 md:grid-cols-[1.2fr_0.8fr] reveal delay-1">
        <article className="paper-card p-8 card-hover">
          <h2 className="text-2xl font-semibold text-stone-900">
            Професионален профил
          </h2>
          <p className="mt-3 text-sm leading-7 text-stone-700">
            Адвокат Красимир Бънчев има практически опит в процесуалното
            представителство и правното консултиране. Работата на кантората е
            насочена към качествена предварителна подготовка, точен анализ на
            доказателствата и устойчиви решения, които защитават интереса на
            клиента в дългосрочен план.
          </p>
          <p className="mt-3 text-sm leading-7 text-stone-700">
            Във всеки етап от делото се поддържа активна комуникация, за да бъде
            клиентът информиран за напредъка, правните възможности и следващите
            действия.
          </p>
        </article>

        <aside className="paper-card p-8 card-hover">
          <h2 className="text-2xl font-semibold text-stone-900">Показатели</h2>
          <dl className="mt-5 space-y-4 text-sm text-stone-700">
            <div>
              <dt className="font-semibold text-stone-900">3+ години</dt>
              <dd>практически опит</dd>
            </div>
            <div>
              <dt className="font-semibold text-stone-900">200+ казуса</dt>
              <dd>в различни правни области</dd>
            </div>
            <div>
              <dt className="font-semibold text-stone-900">
                Индивидуален подход
              </dt>
              <dd>спрямо целите и риска по конкретния случай</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3 reveal delay-2">
        {principles.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-stone-300 bg-[#fbf7f0] p-6 card-hover"
          >
            <h3 className="text-lg font-semibold text-stone-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-stone-700">{item.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
