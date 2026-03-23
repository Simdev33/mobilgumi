"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "A mobil gumiszerviz csak Pest megyében érhető el?",
    answer:
      "Nem. Szolgáltatásunk egész Magyarország területén elérhető, ráadásul éjjel-nappal hívhat minket, hétvégén és munkaszüneti napokon is.",
  },
  {
    question: "Mennyi idő alatt érkezik a helyszínre a mobil gumiszerviz?",
    answer:
      "Budapesten belül, azonnali indulás esetén akár 30 percen belül a helyszínre érkezünk. Telefonos megkeresés során minden esetben tájékoztatjuk Önt érkezésünk várható időpontjáról.",
  },
  {
    question:
      "Kell számolni kiszállási díjjal a szolgáltatás igénybevétele során?",
    answer:
      "Nem. A szolgáltatás igénybevételekor nem kell külön kiszállási díjjal számolni, és nem kell aggódnia a rejtett költségek miatt sem. A várható végösszegről telefonos egyeztetés során tájékoztatást nyújtunk.",
  },
  {
    question:
      "Milyen típusú járművek esetén nyújt segítséget a mobil gumiszerviz?",
    answer:
      "Szolgáltatásunk személy- és kistehergépjárművek esetén elérhető, 3.5 tonnáig.",
  },
  {
    question: "Mennyi időt vesz igénybe a helyszíni defektjavítás?",
    answer:
      "A szerelési idő természetesen függ a sérülés típusától és mértékétől. Általánosságban elmondható, hogy a helyszínre érkezéstől számítva 15-25 percen belül végzünk a sérült abroncs javításával.",
  },
  {
    question:
      "Szükség esetén tudok új abroncsokat vásárolni a helyszínen?",
    answer:
      "Igen! A típusnak megfelelő, új és használt abroncsok vásárlására is van lehetőség!",
  },
  {
    question: "Hogyan fizethetek a szolgáltatásért?",
    answer:
      "Mobil gumiszerviz szolgáltatásunkért fizethet készpénzzel, azonnali átutalással, vagy bankkártyával.",
  },
  {
    question:
      "Mit tegyek, ha nincs meg a kerékőr?",
    answer:
      "Felszerelt szervizautónkban számos célszerszám áll rendelkezésünkre, melyek segítségével néhány típus esetén akár roncsolásmentesen is eltávolítható a kerékőr.",
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
