import { Wrench, RefreshCw, Truck, AlertTriangle, Phone } from "lucide-react";
import PhoneLink from "./PhoneLink";

const services = [
  {
    icon: Wrench,
    title: "Defektjavítás",
    description:
      "Azonnali megoldás váratlan problémákra. Ha defektet vagy durrdefektet kapott, szerelőink pillanatok alatt a helyszínre érkeznek és elvégzik a szükséges javításokat.",
  },
  {
    icon: RefreshCw,
    title: "Gumiszerelés és kerékcsere",
    description:
      "Legyen szó akár tervezett, akár hirtelen esedékes gumicseréről, furgonunkat éjjel-nappal az Ön által megadott helyszínre hívhatja, mi pedig elvégezzük a szükséges cserét.",
  },
  {
    icon: Truck,
    title: "Flotta szolgáltatások",
    description:
      "Teljeskörű megoldás vállalati autóflották számára. Szolgáltatásunk magába foglalja az abroncsok karbantartását és a szezonális kerékcserét.",
  },
  {
    icon: AlertTriangle,
    title: "Autópályás mentés",
    description:
      "Az autópályán bekövetkező defekt esetén fél órán belül a helyszínre érkezünk és elvégezzük a helyszíni javítást, vagy segítünk a szervizbe szállításban.",
  },
];

export default function Services() {
  return (
    <section id="szolgaltatasok" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent-500/10 text-accent-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            SZOLGÁLTATÁSAINK
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Miben tudunk segíteni?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Professzionális mobil gumiszerviz szolgáltatásaink a nap 24 órájában
            rendelkezésre állnak
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-hover bg-gray-800/60 rounded-2xl p-8 border border-gray-700/50"
            >
              <div className="w-14 h-14 bg-accent-500/15 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-accent-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                {service.description}
              </p>
              <PhoneLink
                href="tel:+36206282000"
                className="inline-flex items-center gap-2 text-accent-500 font-semibold hover:text-accent-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Hívás most
              </PhoneLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
