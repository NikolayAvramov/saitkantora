import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика за поверителност | Адвокатска кантора Красимир Бънчев",
  description:
    "Информация за обработването на лични данни, цели, срокове и права на посетителите на сайта.",
};

const updatedAt = "14.03.2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="site-container pb-20 pt-14">
      <header className="max-w-3xl reveal">
        <h1 className="title-accent mt-2 text-4xl font-semibold leading-tight text-stone-900 md:text-5xl">
          Политика за поверителност
        </h1>
        <p className="mt-4 text-stone-700">
          Настоящата политика описва как се събират и обработват лични данни при
          използване на сайта на Адвокатска кантора Красимир Бънчев.
        </p>
        <p className="mt-2 text-sm text-stone-600">Последна актуализация: {updatedAt}</p>
      </header>

      <section className="mt-10 space-y-5 reveal delay-1">
        <article className="paper-card p-6">
          <h2 className="text-2xl font-semibold text-stone-900">1. Администратор на данни</h2>
          <p className="mt-3 text-stone-700">
            Администратор на лични данни е <strong>Красимир Бънчев</strong>.
          </p>
          <ul className="mt-3 space-y-1 text-sm text-stone-700">
            <li>Имейл: info@advbanchev.bg</li>
            <li>Телефон: +359 700 00 000</li>
            <li>Адрес: гр. Момчилград, България</li>
          </ul>
        </article>

        <article className="paper-card p-6">
          <h2 className="text-2xl font-semibold text-stone-900">2. Какви данни събираме</h2>
          <p className="mt-3 text-stone-700">
            При изпращане на запитване могат да бъдат обработвани име, телефон,
            имейл и информацията, която доброволно предоставяте в съобщението.
          </p>
        </article>

        <article className="paper-card p-6">
          <h2 className="text-2xl font-semibold text-stone-900">3. Цели и правно основание</h2>
          <p className="mt-3 text-stone-700">
            Данните се обработват за отговор на запитвания, предварителна комуникация
            по казус и изпълнение на законови задължения. Обработването се извършва
            на основание законен интерес, предприемане на стъпки по искане на субекта
            на данните и приложимо законодателство.
          </p>
        </article>

        <article className="paper-card p-6">
          <h2 className="text-2xl font-semibold text-stone-900">4. Срок за съхранение</h2>
          <p className="mt-3 text-stone-700">
            Данните се съхраняват за срока, необходим за целите на обработването,
            както и за сроковете, предвидени в приложимото право.
          </p>
        </article>

        <article className="paper-card p-6">
          <h2 className="text-2xl font-semibold text-stone-900">5. Права на субектите на данни</h2>
          <p className="mt-3 text-stone-700">
            Имате право на достъп, коригиране, изтриване, ограничаване на обработването,
            възражение и преносимост на данните, когато е приложимо. Можете да упражните
            правата си чрез контактите, посочени по-горе.
          </p>
        </article>

        <article className="paper-card p-6">
          <h2 className="text-2xl font-semibold text-stone-900">6. Бисквитки</h2>
          <p className="mt-3 text-stone-700">
            Към момента сайтът не използва маркетингови или аналитични бисквитки за
            проследяване на потребители. При евентуално въвеждане на такива технологии
            настоящата политика ще бъде актуализирана и, когато е необходимо, ще бъде
            изисквано съгласие.
          </p>
        </article>
      </section>
    </div>
  );
}
