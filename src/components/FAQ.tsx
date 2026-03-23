"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Hol érhető el a mobil gumiszerviz szolgáltatás?",
    answer:
      "Szolgáltatásunk Budapest egész területén és Pest megyében érhető el, a nap 24 órájában — hétvégén és ünnepnapokon is.",
  },
  {
    question: "Milyen gyorsan érkeznek a helyszínre?",
    answer:
      "Budapesten belül jellemzően 30 percen belül a helyszínen vagyunk. A pontos érkezési időről telefonon egyeztetünk, hogy Ön is tervezhessen.",
  },
  {
    question: "Van külön kiszállási díj?",
    answer:
      "Nincs. Áraink tartalmazzák a kiszállást, nincsenek rejtett költségek. A várható végösszeget már a telefonhívás során közöljük Önnel.",
  },
  {
    question: "Milyen járművekhez kérhető a szolgáltatás?",
    answer:
      "Személy- és kishaszonjárművekhez egyaránt, 3,5 tonnás össztömegig.",
  },
  {
    question: "Mennyi ideig tart egy helyszíni defektjavítás?",
    answer:
      "A sérülés jellegétől függően általában 15–25 perc alatt elvégezzük a javítást, közvetlenül a helyszínen.",
  },
  {
    question: "Lehet új abroncsot is vásárolni a helyszínen?",
    answer:
      "Igen, a járműhöz illő új és használt abroncsokat is tudunk biztosítani, helyszíni felszereléssel együtt.",
  },
  {
    question: "Milyen fizetési módokat fogadnak el?",
    answer:
      "Készpénzzel, bankkártyával és azonnali átutalással is fizethet — amelyik Önnek a legkényelmesebb.",
  },
  {
    question: "Mi történik, ha nincs meg a kerékőr kulcs?",
    answer:
      "Szervizautónk speciális szerszámokkal van felszerelve, így sok esetben roncsolásmentesen is el tudjuk távolítani a kerékőrt.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="gyik" className="py-20 bg-gray-950">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent-500/10 text-accent-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            GYIK
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Gyakran ismételt kérdések
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-800/50 transition-colors"
              >
                <span className="font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-accent-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
