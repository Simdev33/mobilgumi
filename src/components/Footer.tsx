import { Phone, Mail, MapPin } from "lucide-react";
import { CookieSettingsButton } from "./CookieConsent";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center">
                <span className="text-white font-black text-lg">M</span>
              </div>
              <div>
                <span className="font-extrabold text-lg">SOS</span>
                <span className="font-bold text-gray-400 text-lg">
                  {" "}
                  MobilGumiPest
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Országos mobil gumiszerviz szolgáltatás, SOS kiszállással. Az év
              minden napján, 0-24.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Gyors linkek</h4>
            <ul className="space-y-2">
              {[
                { href: "#szolgaltatasok", label: "Szolgáltatások" },
                { href: "#araink", label: "Áraink" },
                { href: "#gyik", label: "Gyakori kérdések" },
                { href: "#kapcsolat", label: "Kapcsolat" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-accent-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Elérhetőségek</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-400" />
                <a
                  href="tel:+36206282000"
                  className="text-gray-500 hover:text-accent-400 transition-colors text-sm"
                >
                  +36 20 628 2000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-400" />
                <a
                  href="tel:+36301940601"
                  className="text-gray-500 hover:text-accent-400 transition-colors text-sm"
                >
                  +36 30 194 0601
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-400" />
                <a
                  href="mailto:mobilgumis.sos@gmail.com"
                  className="text-gray-500 hover:text-accent-400 transition-colors text-sm"
                >
                  mobilgumis.sos@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent-400" />
                <span className="text-gray-500 text-sm">
                  Budapest és Pest megye
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} SOS MobilGumiPest. Minden jog
            fenntartva.
          </p>
          <CookieSettingsButton />
        </div>
      </div>
    </footer>
  );
}
