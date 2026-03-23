import { Home, Banknote, Timer, Users, Zap, Clock } from "lucide-react";

const reasons = [
  {
    icon: Home,
    title: "Kényelmes",
    description:
      "Szolgáltatásaink igénybevételével elfelejtheti a hosszadalmas szervizlátogatásokat, hiszen mi házhoz megyünk.",
  },
  {
    icon: Banknote,
    title: "Versenyképes árak",
    description:
      "Kedvező árainknak hála nem kell mélyen a zsebébe nyúlnia a minőségi kiszolgálásért.",
  },
  {
    icon: Timer,
    title: "Időt takarít meg",
    description:
      "Gyorsan és hatékonyan dolgozunk, hogy Önnek több ideje maradjon a fontosabb dolgokra.",
  },
  {
    icon: Users,
    title: "Tapasztalt szakemberek",
    description:
      "Csapatunk magasan képzett és tapasztalt szakemberekből áll, akik minden problémát gyorsan és szakszerűen oldanak meg.",
  },
  {
    icon: Zap,
    title: "Azonnali segítség",
    description:
      "Bármilyen vészhelyzet esetén azonnal a helyszínre sietünk, hogy Ön mielőbb folytathassa útját.",
  },
  {
    icon: Clock,
    title: "Non-stop elérhetőség",
    description:
      "Az év minden napján, 0-24 elérhetőek vagyunk, hétvégén és ünnepnapokon is számíthat ránk.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent-500/10 text-accent-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            MIÉRT MI?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Miért válassza a mobilgumis szolgáltatást?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="card-hover flex gap-5 p-6 rounded-2xl border border-gray-700/50 bg-gray-800/40"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center shadow-lg shadow-accent-500/20">
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
