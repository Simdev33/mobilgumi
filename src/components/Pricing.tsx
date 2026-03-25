import { Shield, RefreshCw, Phone } from "lucide-react";
import PhoneLink from "./PhoneLink";

const pricingCards = [
  {
    icon: Shield,
    title: "Defekt javítás díjak",
    highlight: true,
    items: [
      { label: "Budapesten belül", price: "18.900 Ft" },
      { label: "Budapesten belül éjszaka", price: "23.900 Ft" },
      { label: "Parkolóház / Mélygarázs", price: "+2.000 Ft" },
      { label: "Autópályán", price: "18.900 Ft" },
      { label: "Budapest határán kívül", price: "300 Ft/Km" },
    ],
  },
  {
    icon: RefreshCw,
    title: "Szezonális szerelési díjak",
    highlight: false,
    items: [
      { label: '13"-tól 19"-ig', price: "23.900 Ft" },
      { label: '19"-tól 21"-ig', price: "29.900 Ft" },
      { label: '21" felett', price: "33.900 Ft" },
    ],
  },
  
];

export default function Pricing() {
  return (
    <section id="araink" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent-500/10 text-accent-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            ÁRAINK
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Átlátható, kedvező árak
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Nincsenek rejtett költségek - a végösszeget telefonon egyeztetjük
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pricingCards.map((card) => (
            <div
              key={card.title}
              className={`card-hover rounded-2xl p-8 flex flex-col ${
                card.highlight
                  ? "bg-accent-500/10 text-white border-2 border-accent-500/40 shadow-xl shadow-accent-500/10"
                  : "bg-gray-800/60 text-white border border-gray-700/50"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  card.highlight ? "bg-accent-500" : "bg-accent-500/15"
                }`}
              >
                <card.icon
                  className={`w-6 h-6 ${
                    card.highlight ? "text-white" : "text-accent-500"
                  }`}
                />
              </div>

              <h3 className="text-xl font-bold mb-6">{card.title}</h3>

              <ul className="space-y-4">
                {card.items.map((item) => (
                  <li
                    key={item.label}
                    className={`flex justify-between items-start gap-2 pb-3 border-b ${
                      card.highlight
                        ? "border-accent-500/20"
                        : "border-gray-700/50"
                    }`}
                  >
                    <span className="text-sm text-gray-400">
                      {item.label}
                    </span>
                    <span
                      className={`text-sm font-bold whitespace-nowrap ${
                        card.highlight ? "text-accent-400" : "text-white"
                      }`}
                    >
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <PhoneLink
                  href="tel:+36206282000"
                  className={`w-full flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-full transition-all text-sm ${
                    card.highlight
                      ? "bg-accent-500 hover:bg-accent-600 text-white hover:shadow-lg"
                      : "bg-accent-500/20 hover:bg-accent-500 text-accent-400 hover:text-white hover:shadow-lg"
                  }`}
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
