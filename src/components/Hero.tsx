import { Phone, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-32 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />
      {/* Red tint overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/60 via-black/30 to-red-950/40" />

      <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
        <div className="animate-fade-in-up">
          <span className="inline-block bg-accent-500/20 text-accent-400 text-sm font-semibold px-4 py-1.5 rounded-full border border-accent-500/30 mb-6">
            NON-STOP SZOLGÁLTATÁS &bull; 0-24
          </span>
        </div>

        <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">
          ORSZÁGOS
          <br />
          <span className="text-accent-400">MobilGUMI</span> SZERVIZ
        </h1>

        <h2 className="animate-fade-in-up-delay-2 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 mb-8">
          SOS KISZÁLLÁSSAL
        </h2>

        <p className="animate-fade-in-up-delay-3 text-lg md:text-xl text-gray-300/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Defekt az út szélén? Szezonális gumicsere? Budapesten és Pest
          megyében éjjel-nappal rendelkezésre állunk - hívjon, és már indulunk is!
        </p>

        <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="tel:+36206282000"
            className="group relative bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:shadow-2xl hover:shadow-accent-500/30 flex items-center gap-3"
          >
            <Phone className="w-5 h-5 group-hover:animate-bounce" />
            Hívás most
          </a>
          <a
            href="#szolgaltatasok"
            className="bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold px-8 py-4 rounded-full text-lg transition-all border border-white/20 hover:border-white/40"
          >
            Szolgáltatásaink
          </a>
        </div>

        {/* Emergency call box */}
        <div className="animate-fade-in-up-delay-3 inline-flex flex-col items-center bg-black/40 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/10 mb-12">
          <span className="text-sm text-gray-300 font-medium mb-2">
            24/7 sürgősségi hívás
          </span>
          <div className="relative pulse-ring flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <a
              href="tel:+36206282000"
              className="text-3xl md:text-4xl font-black text-accent-400 hover:text-accent-300 transition-colors"
            >
              +36 20 628 2000
            </a>
            <span className="hidden sm:block text-gray-500 text-2xl">|</span>
            <a
              href="tel:+36301940601"
              className="text-3xl md:text-4xl font-black text-accent-400 hover:text-accent-300 transition-colors"
            >
              +36 30 194 0601
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/50 mx-auto" />
        </div>
      </div>
    </section>
  );
}
