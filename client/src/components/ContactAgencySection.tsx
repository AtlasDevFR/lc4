import React from 'react';
import { Link } from 'wouter';
import { MapPin, Phone, ArrowRight, Clock } from 'lucide-react';

export default function ContactAgencySection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* BLOC A : Hero Contact + CTA Principal */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2340] mb-4">
            Un projet en tête ?
          </h2>
          <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour un devis gratuit et des conseils personnalisés.
          </p>
          
          {/* CTA Principal Unique */}
          <Link 
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#0f2340] text-white px-10 py-4 rounded-xl font-semibold hover:bg-[#1a2e5a] transition-all shadow-lg hover:shadow-xl text-lg"
          >
            Demander un devis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* BLOC B : Carte Agence */}
        <div className="max-w-[880px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2340] mb-4">
              Notre agence
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Retrouvez-nous dans notre agence principale à Mundolsheim, au cœur de notre secteur géographique.
            </p>
          </div>

          {/* Carte Agence Premium */}
          <div className="bg-white rounded-[14px] shadow-lg border border-gray-100 overflow-hidden">
            {/* En-tête avec dégradé */}
            <div className="bg-gradient-to-r from-[#0f2340] to-[#1a2e5a] px-7 py-6 text-white">
              <div className="flex items-center gap-4">
                <div className="bg-white/15 backdrop-blur-sm p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">
                    LC4 Peinture & Décoration
                  </h3>
                  <p className="text-blue-100 text-sm">
                    Votre partenaire expert en Alsace
                  </p>
                </div>
              </div>
            </div>

            {/* Contenu de la carte */}
            <div className="px-7 py-7 space-y-6">
              {/* Adresse */}
              <div className="flex items-start gap-4">
                <div className="bg-[#dfe7f6] p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#0f2340]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#0f2340] mb-1 text-base">
                    Adresse
                  </h4>
                  <address className="not-italic text-gray-600 text-sm leading-relaxed">
                    3 Rue Alexandre Volta<br />
                    67450 Mundolsheim
                  </address>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-start gap-4">
                <div className="bg-[#dfe7f6] p-3 rounded-full flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#0f2340]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#0f2340] mb-1 text-base">
                    Téléphone
                  </h4>
                  <a 
                    href="tel:0388047196"
                    className="text-gray-600 text-sm hover:text-[#0f2340] transition-colors font-medium"
                  >
                    03 88 04 71 96
                  </a>
                </div>
              </div>

              {/* Horaires */}
              <div className="flex items-start gap-4">
                <div className="bg-[#dfe7f6] p-3 rounded-full flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#0f2340]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#0f2340] mb-2 text-base">
                    Horaires d'ouverture
                  </h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Lundi - Vendredi</span>
                      <time>8h00 - 18h00</time>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Samedi</span>
                      <time>9h00 - 12h00</time>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bouton secondaire discret */}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="https://maps.google.com/?q=3+Rue+Alexandre+Volta+67450+Mundolsheim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0f2340] text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-[#0f2340] focus:ring-offset-2 rounded"
                >
                  <MapPin className="w-4 h-4" />
                  Voir l'agence
                </a>
              </div>
            </div>
          </div>

          {/* Secteur géographique */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-[#0f2340]">Secteur géographique :</span> Strasbourg, Souffelweyersheim, Haguenau, Schweighouse et environs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
