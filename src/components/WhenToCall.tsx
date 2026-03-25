import { Phone, CircleDot } from "lucide-react";
import PhoneLink from "./PhoneLink";

const scenarios = [
  {
    number: "01",
    title: "Váratlan defekt vagy gumirobbanás az úton",
    description:
      "Egy hívás, és már indulunk is. Csapatunk gyorsan a helyszínre érkezik, megjavítja vagy kicseréli a sérült kereket, hogy Ön mielőbb folytathassa útját.",
  },
  {
    number: "02",
    title: "Autópályán ragadt, és azonnali segítség kell",
    description:
      "Az autópályán minden perc számít. Mobil szervizünk a lehető legrövidebb időn belül megérkezik, és helyben megoldja a problémát — biztonságosan, szakszerűen.",
  },
  {
    number: "03",
    title: "Eljött a szezonális gumicsere ideje",
    description:
      "Ne vesztegesse az idejét szervizben várakozással. Kiszállunk az otthonához vagy a munkahelyére, és kényelmesen, gyorsan elvégezzük a kerékcserét.",
  },
  {
    number: "04",
    title: "Céges flottát üzemeltet",
    description:
      "Vállalati járműparkokhoz teljes körű gumiszerviz megoldást kínálunk: szezonális csere, karbantartás és sürgősségi javítás — rugalmas időpontokban.",
  },
];

export default function WhenToCall() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent-500/10 text-accent-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            MIKOR HÍVJON?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Milyen helyzetekben számíthat ránk?
          </h2>
        </div>

        <div className="space-y-6">
          {scenarios.map((scenario, index) => (
            <div
              key={scenario.number}
              className={`card-hover flex flex-col md:flex-row gap-6 p-8 rounded-2xl border border-gray-800 ${
                index % 2 === 0 ? "bg-gray-900/60" : "bg-gray-800/30"
              }`}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center shadow-lg shadow-accent-500/20">
                  <span className="text-2xl font-black text-white">
                    {scenario.number}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                  <CircleDot className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  {scenario.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {scenario.description}
                </p>
                <PhoneLink
                  href="tel:+36206282000"
                  className="inline-flex items-center gap-2 text-accent-500 font-semibold hover:text-accent-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Hívás most
                </PhoneLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
