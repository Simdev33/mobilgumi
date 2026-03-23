"use client";

import { useState, useEffect, useCallback } from "react";
import { Cookie, X, ChevronDown, Shield } from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const DEFAULT_PREFS: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
};

const COOKIE_KEY = "cookie_consent";

function getStoredConsent(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(COOKIE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function storeConsent(prefs: CookiePreferences) {
  localStorage.setItem(COOKIE_KEY, JSON.stringify(prefs));
}

const categories = [
  {
    key: "necessary" as const,
    label: "Szükséges",
    locked: true,
    description:
      "Ezek a sütik elengedhetetlenek a weboldal alapvető működéséhez. Nem kapcsolhatók ki.",
  },
  {
    key: "functional" as const,
    label: "Funkcionális",
    locked: false,
    description:
      "Ezek a sütik a weboldal bővített funkcionalitását és személyre szabását teszik lehetővé.",
  },
  {
    key: "analytics" as const,
    label: "Analitikai",
    locked: false,
    description:
      "Ezek a sütik segítenek megérteni, hogyan használják a látogatók a weboldalt (Google Analytics).",
  },
  {
    key: "marketing" as const,
    label: "Marketing",
    locked: false,
    description:
      "Ezek a sütik a hirdetések személyre szabásához használatosak (Google Ads, remarketing).",
  },
];

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>(DEFAULT_PREFS);
  const [expandedCat, setExpandedCat] = useState<string | null>(null);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = useCallback(() => {
    const all: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    storeConsent(all);
    setVisible(false);
    if (typeof window !== "undefined") window.dispatchEvent(new Event("cookieConsentUpdate"));
  }, []);

  const handleDeclineAll = useCallback(() => {
    storeConsent(DEFAULT_PREFS);
    setVisible(false);
  }, []);

  const handleSavePrefs = useCallback(() => {
    storeConsent(prefs);
    setVisible(false);
    if (typeof window !== "undefined") window.dispatchEvent(new Event("cookieConsentUpdate"));
  }, [prefs]);

  const togglePref = (key: keyof CookiePreferences) => {
    if (key === "necessary") return;
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:p-6 pointer-events-none">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto animate-fade-in"
        onClick={() => {}}
      />

      {/* Banner */}
      <div className="relative pointer-events-auto w-full max-w-2xl bg-gray-900 border border-gray-700/60 rounded-2xl shadow-2xl shadow-black/40 animate-slide-up">
        {/* Header */}
        <div className="flex items-start gap-4 p-6 pb-4">
          <div className="w-10 h-10 bg-accent-500/15 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
            <Cookie className="w-5 h-5 text-accent-500" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-1">
              Cookie beállítások
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Weboldalunk sütiket használ a legjobb felhasználói élmény
              biztosításához, valamint analitikai és marketing célokra. Válaszd
              ki, mely sütiket engedélyezed.
            </p>
          </div>
        </div>

        {/* Details panel */}
        {showDetails && (
          <div className="px-6 pb-2 space-y-2 max-h-64 overflow-y-auto scrollbar-thin">
            {categories.map((cat) => (
              <div
                key={cat.key}
                className="bg-gray-800/60 border border-gray-700/40 rounded-xl overflow-hidden"
              >
                <div className="flex items-center justify-between p-3.5">
                  <button
                    onClick={() =>
                      setExpandedCat(expandedCat === cat.key ? null : cat.key)
                    }
                    className="flex items-center gap-2 text-left flex-1"
                  >
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                        expandedCat === cat.key ? "rotate-180" : ""
                      }`}
                    />
                    <span className="text-sm font-semibold text-white">
                      {cat.label}
                    </span>
                    {cat.locked && (
                      <span className="text-[10px] bg-gray-700 text-gray-400 px-1.5 py-0.5 rounded font-medium">
                        KÖTELEZŐ
                      </span>
                    )}
                  </button>

                  {/* Toggle */}
                  <button
                    onClick={() => togglePref(cat.key)}
                    disabled={cat.locked}
                    className={`relative w-11 h-6 rounded-full transition-colors duration-200 flex-shrink-0 ${
                      prefs[cat.key]
                        ? "bg-accent-500"
                        : "bg-gray-700"
                    } ${cat.locked ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                        prefs[cat.key] ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                {expandedCat === cat.key && (
                  <div className="px-3.5 pb-3.5 pt-0">
                    <p className="text-xs text-gray-500 leading-relaxed pl-6">
                      {cat.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="p-6 pt-4 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAcceptAll}
            className="flex-1 bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-6 rounded-xl transition-all hover:shadow-lg hover:shadow-accent-500/20 text-sm flex items-center justify-center gap-2"
          >
            <Shield className="w-4 h-4" />
            Összes elfogadása
          </button>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all border border-gray-700 text-sm"
          >
            {showDetails ? "Beállítások mentése" : "Testreszabás"}
          </button>

          {showDetails ? (
            <button
              onClick={handleSavePrefs}
              className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-400 font-semibold py-3 px-6 rounded-xl transition-all border border-gray-700 text-sm"
            >
              Mentés
            </button>
          ) : (
            <button
              onClick={handleDeclineAll}
              className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-400 font-semibold py-3 px-6 rounded-xl transition-all border border-gray-700 text-sm"
            >
              Csak szükségesek
            </button>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 pb-4">
          <p className="text-[11px] text-gray-600 text-center">
            A &quot;Testreszabás&quot; gombra kattintva részletesen
            kiválaszthatja, mely sütiket engedélyezi. Részletek az{" "}
            <a href="#" className="text-accent-500/70 hover:text-accent-400 underline">
              Adatvédelmi tájékoztatóban
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsButton() {
  const [, setForceRender] = useState(0);

  const openSettings = () => {
    localStorage.removeItem(COOKIE_KEY);
    setForceRender((n) => n + 1);
    window.dispatchEvent(new Event("reopenCookieConsent"));
  };

  return (
    <button
      onClick={openSettings}
      className="text-gray-600 hover:text-accent-400 transition-colors text-xs flex items-center gap-1.5"
    >
      <Cookie className="w-3 h-3" />
      Cookie beállítások
    </button>
  );
}
