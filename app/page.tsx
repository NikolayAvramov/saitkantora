"use client";

export default function Home() {
  const services = [
    {
      title: "Наследствено право",
      description:
        "Експертиза в разделяне на наследство, завещания и семейни спорове.",
      icon: "📜",
      color: "from-gray-800 to-gray-700",
    },
    {
      title: "Корпоративно право",
      description:
        "Регистрация на фирми, договори, слияния и корпоративна управление.",
      icon: "🏛️",
      color: "from-gray-800 to-gray-700",
    },
    {
      title: "Работно право",
      description:
        "Защита на трудовите права, трудови договори и разрешаване на спорове.",
      icon: "👔",
      color: "from-gray-800 to-gray-700",
    },
    {
      title: "Гражданско право",
      description:
        "Договорни споразумения, отговорност и защита на граждански права.",
      icon: "⚖️",
      color: "from-gray-800 to-gray-700",
    },
  ];

  const team = [
    {
      name: "Красимир Бънчев",
      title: "Главен адвокат",
      specialization: "Всички области",
    },
    {
      name: "Антония Бънчева",
      title: "Юридически асистент",
      specialization: "Всички области",
    },
  ];

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Благодарим за съобщението! Ще ви се свържем скоро.");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-yellow-400">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-800 to-gray-700 text-yellow-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-yellow-700/20 px-4 py-2 rounded-full text-sm font-semibold">
                ✓ Над 15 години опит
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-yellow-300">
                Адвокатска кантора{" "}
                <span className="text-yellow-500">Красимир Бънчев</span>
              </h1>
              <p className="text-xl leading-relaxed text-yellow-200">
                Професионална юридическа помощ и консултации във всички области
                на правото. Защитаваме вашите интереси с опит и отдаденост.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="#contact"
                  className="bg-yellow-600 text-gray-900 px-8 py-3 rounded-lg hover:bg-yellow-500 transition font-semibold"
                >
                  Начало консултация
                </a>
                <a
                  href="#services"
                  className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg hover:border-yellow-200 hover:text-yellow-200 transition font-semibold"
                >
                  Наши услуги
                </a>
              </div>
              <div className="flex gap-6 pt-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📞</span>
                  <span className="text-yellow-300">+359 2 XXX XXXX</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📍</span>
                  <span className="text-yellow-300">Момчилград</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-700 to-yellow-500 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600/50">
                <div className="text-center space-y-4">
                  <div className="text-7xl">⚖️</div>
                  <h3 className="text-2xl font-bold text-yellow-300">
                    Юридическа експертиза
                  </h3>
                  <p className="text-yellow-200">
                    Комплексни решения за всички ваши юридически нужди
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
              Нашите услуги
            </h2>
            <p className="text-xl text-yellow-300">
              Комплексна юридическа подкрепа във всички области
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br ${service.color} border border-gray-600/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-yellow-300 mb-2">
                  {service.title}
                </h3>
                <p className="text-yellow-200 text-sm leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-block mt-4 text-yellow-400 hover:text-yellow-200 font-semibold text-sm transition"
                >
                  Научи повече →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-yellow-400 mb-4">
                За адвоката
              </h2>
              <p className="text-yellow-200 text-lg leading-relaxed">
                <strong className="text-yellow-300">Красимир Бънчев</strong> е
                квалифициран и опитен адвокат с дългогодишна практика в
                юридическото поле. Специализира се в наследствено право,
                корпоративни услуги и защита на граждански права.
              </p>
              <h3 className="text-2xl font-bold text-yellow-300">
                Защо да ни изберете:
              </h3>
              <ul className="list-disc list-inside text-yellow-200 space-y-2">
                <li>Експертиза: Над 15 години опит в юридическото поле</li>
                <li>
                  Персонална подкрепа: Всеки клиент получава индивидуално
                  внимание
                </li>
                <li>Резултати: Успешно разрешаване на много сложни дела</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Останалите секции могат да се променят по същия принцип */}
    </div>
  );
}
