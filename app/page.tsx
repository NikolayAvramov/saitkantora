"use client";

export default function Home() {
  const services = [
    {
      title: "Наследствено право",
      description:
        "Експертиза в разделяне на наследство, завещания и семейни спорове.",
      icon: "📜",
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "Корпоративно право",
      description:
        "Регистрация на фирми, договори, слияния и корпоративна управления.",
      icon: "🏛️",
      color: "from-slate-50 to-slate-100",
    },
    {
      title: "Работно право",
      description:
        "Защита на трудовите права, трудови договори и разрешаване на спорове.",
      icon: "👔",
      color: "from-amber-50 to-amber-100",
    },
    {
      title: "Гражданско право",
      description:
        "Договорни споразумения, отговорност и защита на граждански права.",
      icon: "⚖️",
      color: "from-emerald-50 to-emerald-100",
    },
  ];

  const team = [
    {
      name: "Красимир Бънчев",
      title: "Главен адвокат",
      specialization: "Наследствено право, Корпоративно право",
    },
    {
      name: "Асистент",
      title: "Юридически асистент",
      specialization: "Всички области",
    },
  ];

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Благодарим за съобщението! Ще ви се свържем скоро.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                ✓ Над 15 години опит
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Адвокатска кантора{" "}
                <span className="text-blue-600">Красимир Бънчев</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Професионална юридическа помощ и консултации във всички области
                на правото. Защитаваме вашите интереси с опит и отдаденост.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="#contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Начало консултация
                </a>
                <a
                  href="#services"
                  className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition font-semibold"
                >
                  Наши услуги
                </a>
              </div>
              <div className="flex gap-6 pt-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📞</span>
                  <span className="text-slate-600">+359 2 XXX XXXX</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📍</span>
                  <span className="text-slate-600">София</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200/50">
                <div className="text-center space-y-4">
                  <div className="text-7xl">⚖️</div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Юридическа експертиза
                  </h3>
                  <p className="text-slate-600">
                    Комплексни решения за всички ваши юридически нужди
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-white/50 rounded-lg p-3">
                      <p className="text-sm text-slate-600">Консултации</p>
                      <p className="font-bold text-blue-600">Ежедневно</p>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3">
                      <p className="text-sm text-slate-600">Закрила</p>
                      <p className="font-bold text-blue-600">100%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Нашите услуги
            </h2>
            <p className="text-xl text-slate-600">
              Комплексна юридическа подкрепа във всички области
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${service.color} border border-slate-200/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-semibold text-sm transition"
                >
                  Научи повече →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">
                  За адвоката
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  <strong className="text-slate-900">Красимир Бънчев</strong> е
                  квалифициран и опитен адвокат с дългогодишна практика в
                  юридическото поле. Специализира се в наследствено право,
                  корпоративни услуги и защита на граждански права.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  Защо да ни изберете:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <p className="font-semibold text-slate-900">Експертиза</p>
                      <p className="text-slate-600 text-sm">
                        Над 15 години опит в юридическото поле
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <p className="font-semibold text-slate-900">
                        Персонална подкрепа
                      </p>
                      <p className="text-slate-600 text-sm">
                        Всеки клиент получава индивидуално внимание
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <p className="font-semibold text-slate-900">Резултати</p>
                      <p className="text-slate-600 text-sm">
                        Успешно разрешавање на много сложни дела
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Професионализъм</h3>
                <p className="text-slate-200 mb-6">
                  Ние се стремим да предоставим най-висок клас юридически услуги
                  с фокус върху резултатите.
                </p>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                    <p className="text-sm text-slate-300">Честност</p>
                    <p className="font-semibold">Прозрачна комуникация</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                    <p className="text-sm text-slate-300">Качество</p>
                    <p className="font-semibold">Висок клас услуги</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                    <p className="text-sm text-slate-300">Отдаденост</p>
                    <p className="font-semibold">Защита на вашите интереси</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            Нашият тим
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 border border-slate-200/50 hover:shadow-lg transition"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mb-4 flex items-center justify-center text-white text-2xl">
                  👤
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  {member.title}
                </p>
                <p className="text-slate-600">{member.specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">
                  Свържете се с нас
                </h2>
                <p className="text-slate-600 text-lg">
                  Имаш ли въпроси? Контактирай нас за безплатна начална
                  консултация!
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200/50">
                  <p className="text-sm text-slate-600 mb-1">Телефон</p>
                  <p className="text-2xl font-bold text-blue-600">
                    +359 2 XXX XXXX
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200/50">
                  <p className="text-sm text-slate-600 mb-1">Email</p>
                  <p className="text-xl font-bold text-blue-600">
                    info@advbanchev.bg
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200/50">
                  <p className="text-sm text-slate-600 mb-1">Адрес</p>
                  <p className="text-xl font-bold text-blue-600">
                    Момчилград, България
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200/50">
                  <p className="text-sm text-slate-600 mb-1">Работно време</p>
                  <p className="text-xl font-bold text-blue-600">
                    Пн-Пт: 09:00 - 17:00
                  </p>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleContactSubmit}
              className="space-y-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Изпрати съобщение</h3>
              <div>
                <label className="block text-sm font-semibold mb-2">Име</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 backdrop-blur transition"
                  placeholder="Вашето име"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 backdrop-blur transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 backdrop-blur transition"
                  placeholder="+359 2 XXX XXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Съобщение
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 backdrop-blur transition resize-none"
                  placeholder="Вашето съобщение..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-lg font-bold transition mt-4"
              >
                Изпрати
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema for Local Business - SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Адвокатска кантора Красимир Бънчев",
            image: "https://saitkantora.com/logo.png",
            description: "Адвокатска кантора предлагаща юридически консултации",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Момчилград",
              addressCountry: "BG",
            },
            telephone: "+359 2 XXX XXXX",
            email: "info@advbanchev.bg",
            priceRange: "$$",
            sameAs: ["https://facebook.com", "https://google.com"],
            areaServed: "BG",
            knowsAbout: [
              "Наследствено право",
              "Корпоративно право",
              "Работно право",
              "Гражданско право",
            ],
          }),
        }}
      />
    </div>
  );
}
