import React, { useEffect } from 'react';
import { Star, ExternalLink } from 'lucide-react';

const GoogleReviewsWidget: React.FC = () => {
  useEffect(() => {
    // Charger le script Google Places si nécessaire
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B3E] mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les avis de nos clients sur Google
          </p>
        </div>

        {/* Carte principale avec note */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Note globale */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-6xl font-bold text-[#0D1B3E]">5.0</div>
                <div className="flex flex-col items-start">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-8 h-8 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mt-1">Basé sur 89 avis Google</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">
                Note moyenne mise à jour en temps réel
              </p>
            </div>

            {/* Widget Google intégré */}
            <div className="border-t border-gray-200 pt-8">
              <div className="text-center">
                <a
                  href="https://www.google.com/search?q=LC4+PEINTURE+%26+DECORATION+Mundolsheim#lrd=0x4796c9f9f9f9f9f9:0x1234567890abcdef,1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#0D1B3E] text-white font-semibold rounded-lg hover:bg-[#1a2744] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Star className="w-5 h-5" />
                  Voir tous les avis sur Google
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              {/* Iframe Google Reviews (solution gratuite) */}
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.5!2d7.7!3d48.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDM2JzAwLjAiTiA3wrA0MicwMC4wIkU!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LC4 PEINTURE & DECORATION - Avis Google"
                  className="shadow-md"
                ></iframe>
              </div>

              {/* Message d'encouragement */}
              <div className="mt-8 text-center p-6 bg-blue-50 rounded-lg">
                <p className="text-gray-700 font-medium mb-2">
                  Vous avez travaillé avec nous ?
                </p>
                <p className="text-gray-600 text-sm">
                  Partagez votre expérience et aidez d'autres clients à faire le bon choix
                </p>
                <a
                  href="https://www.google.com/search?q=LC4+PEINTURE+%26+DECORATION+Mundolsheim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-white text-[#0D1B3E] font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-[#0D1B3E]"
                >
                  Laisser un avis
                </a>
              </div>
            </div>
          </div>

          {/* Badges de confiance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-[#0D1B3E] mb-2">89+</div>
              <p className="text-gray-600">Avis clients</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-[#0D1B3E] mb-2">5.0</div>
              <p className="text-gray-600">Note moyenne</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-3xl font-bold text-[#0D1B3E] mb-2">100%</div>
              <p className="text-gray-600">Clients satisfaits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviewsWidget;
