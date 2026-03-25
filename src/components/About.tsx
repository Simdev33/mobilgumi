import { Phone, CheckCircle } from "lucide-react";
import PhoneLink from "./PhoneLink";

const highlights = [
  "Gyors és precíz kiszolgálás",
  "Versenyképes árak",
  "Megbízható, szakképzett munkatársak",
  "0-24 elérhető, hétvégén és munkaszüneti napokon is",
  "Azonnali indulással elérhető",
];

export default function About() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-accent-500/10 text-accent-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              RÓLUNK
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Non-Stop mobil gumiszerviz{" "}
              <span className="text-accent-500">
                Budapesten és Pest megyében
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Defektet kapott? Hívjon minket, és élvezze a mobil gumiszerviz
              előnyeit! Szolgáltatásunk 0-24 elérhető, hétvégén és munkaszüneti
              napokon is. Legyen szó hirtelen fellépő, váratlan problémáról,
              vagy tervezett gumicseréről, ránk számíthat!
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Autómentés, autószállítás szolgáltatásunk azonnali indulással
              elérhető Budapesten és egész Pest megyében!
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <PhoneLink
              href="tel:+36206282000"
              className="inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:shadow-xl hover:shadow-accent-500/20"
            >
              <Phone className="w-5 h-5" />
              Hívás most
            </PhoneLink>
          </div>

          <div className="relative">
            <div className="bg-gray-800 rounded-3xl p-10 text-white border border-gray-700/50">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-500 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <span className="block text-2xl font-black">0-24</span>
                  <span className="text-xs font-semibold opacity-80">
                    NYITVA
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-6">
                Miért bíznak bennünk ügyfeleink?
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Ügyfélelégedettség</span>
                    <span className="text-accent-400 font-bold">98%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[98%] bg-accent-500 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Időben érkezés</span>
                    <span className="text-accent-400 font-bold">96%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[96%] bg-accent-500 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Visszatérő ügyfelek</span>
                    <span className="text-accent-400 font-bold">85%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-accent-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
