"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Mail, MapPin, Phone, Send, AlertCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Hiba történt az üzenet küldésekor.");
        setStatus("error");
        return;
      }

      router.push("/koszonjuk");
    } catch {
      setErrorMsg("Hálózati hiba. Kérjük próbálja újra.");
      setStatus("error");
    }
  };

  return (
    <section id="kapcsolat" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent-500/10 text-accent-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            KAPCSOLAT
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Lépj velünk kapcsolatba
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 bg-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-500/20">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">
                  Email-cím
                </h3>
                <a
                  href="mailto:mobilgumis.sos@gmail.com"
                  className="text-gray-400 hover:text-accent-500 transition-colors"
                >
                  mobilgumis.sos@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 bg-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-500/20">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">
                  Szolgáltatási terület
                </h3>
                <p className="text-gray-400">Budapest és Pest megye</p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 bg-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-500/20">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">
                  Telefonszám
                </h3>
                <a
                  href="tel:+36307408998"
                  className="text-2xl font-bold text-accent-500 hover:text-accent-400 transition-colors"
                >
                  06 30 740 8998
                </a>
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-accent-500/10 border border-accent-500/20 rounded-2xl p-8 text-white mt-8">
              <h3 className="text-xl font-bold mb-3">
                Sürgős segítségre van szüksége?
              </h3>
              <p className="text-gray-400 mb-6">
                Hívjon minket bármikor, az év minden napján, 0-24!
              </p>
              <a
                href="tel:+36307408998"
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3 rounded-full transition-all hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                06 30 740 8998
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-gray-800/60 rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-xl font-bold text-white mb-6">
              Írjon nekünk
            </h3>

            {status === "error" && (
              <div className="mb-6 bg-red-900/30 border border-red-700/50 rounded-xl p-4 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <span className="text-red-300 font-medium">{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Név
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-white placeholder:text-gray-500 disabled:opacity-50"
                  placeholder="Az Ön neve"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all text-white placeholder:text-gray-500 disabled:opacity-50"
                  placeholder="pelda@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-300 mb-2"
                >
                  Miben segíthetünk?
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all resize-none text-white placeholder:text-gray-500 disabled:opacity-50"
                  placeholder="Írja le, miben segíthetünk..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-6 rounded-xl transition-all hover:shadow-lg hover:shadow-accent-500/20 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Küldés...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Küldés
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
