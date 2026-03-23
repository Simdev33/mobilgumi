import { Clock, Phone, Banknote } from "lucide-react";

const stats = [
  {
    icon: Clock,
    title: "Kevesebb mint 30 perc",
    description: "Budapesten és környékén percek alatt kiérünk",
  },
  {
    icon: Phone,
    title: "06 30 740 8998",
    description: "Bármilyen vészhelyzet esetén azonnal a helyszínre sietünk",
  },
  {
    icon: Banknote,
    title: "Megfizethető árak",
    description: "A kényelem mellett megfizethető árakat biztosítunk",
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.title} className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur">
                <stat.icon className="w-8 h-8 text-accent-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
              <p className="text-red-200/70 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
