import React from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import StickyCTA from '@/components/ui/StickyCTA';

const zones = [
  {
    id: 1,
    name: 'Paris',
    arrondissements: 'Tous les arrondissements',
    time: '15-30 minutes',
    color: 'from-blue-500 to-blue-600',
    icon: '🏛️'
  },
  {
    id: 2,
    name: 'Hauts-de-Seine',
    cities: ['Boulogne-Billancourt', 'Neuilly-sur-Seine', 'Levallois-Perret', 'Issy-les-Moulineaux', 'Nanterre', 'Antony', 'Rueil-Malmaison'],
    time: '20-35 minutes',
    color: 'from-green-500 to-green-600',
    icon: '🏢'
  },
  {
    id: 3,
    name: 'Seine-Saint-Denis',
    cities: ['Saint-Denis', 'Aubervilliers', 'Montreuil', 'Pantin', 'Bondy', 'Aulnay-sous-Bois'],
    time: '25-40 minutes',
    color: 'from-purple-500 to-purple-600',
    icon: '🏭'
  },
  {
    id: 4,
    name: 'Val-de-Marne',
    cities: ['Créteil', 'Vincennes', 'Saint-Maur-des-Fossés', 'Champigny-sur-Marne', 'Vitry-sur-Seine'],
    time: '25-40 minutes',
    color: 'from-orange-500 to-orange-600',
    icon: '🌳'
  },
  {
    id: 5,
    name: 'Val-d\'Oise',
    cities: ['Cergy', 'Argenteuil', 'Sarcelles', 'Garges-lès-Gonesse', 'Bezons'],
    time: '30-45 minutes',
    color: 'from-red-500 to-red-600',
    icon: '🏘️'
  },
  {
    id: 6,
    name: 'Yvelines',
    cities: ['Versailles', 'Saint-Germain-en-Laye', 'Mantes-la-Jolie', 'Rambouillet', 'Poissy'],
    time: '30-50 minutes',
    color: 'from-indigo-500 to-indigo-600',
    icon: '🏰'
  },
  {
    id: 7,
    name: 'Essonne',
    cities: ['Évry', 'Corbeil-Essonnes', 'Massy', 'Palaiseau', 'Orsay'],
    time: '30-50 minutes',
    color: 'from-pink-500 to-pink-600',
    icon: '🌿'
  },
  {
    id: 8,
    name: 'Seine-et-Marne',
    cities: ['Melun', 'Meaux', 'Chelles', 'Fontainebleau', 'Torcy'],
    time: '35-55 minutes',
    color: 'from-teal-500 to-teal-600',
    icon: '🌾'
  }
];

const ZoneCard = ({ zone, index }: { zone: typeof zones[0]; index: number }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-zinc-100 hover:shadow-lg transition-all duration-300 p-6 group animate-fade-in-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <div className="flex items-center space-x-4 mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${zone.color} flex items-center justify-center text-2xl`}>
          {zone.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-zinc-900">{zone.name}</h3>
          <p className="text-sm text-zinc-500">Intervention: {zone.time}</p>
        </div>
      </div>

      {/* Cities */}
      <div className="mb-4">
        {zone.arrondissements ? (
          <p className="text-sm text-zinc-600 font-medium">{zone.arrondissements}</p>
        ) : (
          <div className="flex flex-wrap gap-1">
            {zone.cities?.map((city, cityIndex) => (
              <span
                key={cityIndex}
                className="text-xs bg-zinc-100 text-zinc-700 px-2 py-1 rounded-full"
              >
                {city}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Status */}
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm text-green-600 font-medium">Disponible 24h/24</span>
      </div>
    </div>
  );
};

export default function ZonesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zinc-50 to-blue-50 pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight" style={{
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Zones d'Intervention
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-600 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
              Nous intervenons dans toute l'Île-de-France
              <br />
              <span className="text-lg text-zinc-500">24h/24 • 7j/7 • Intervention rapide</span>
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Carte de l'Île-de-France</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Découvrez toutes nos zones d'intervention avec nos temps de réponse
            </p>
          </div>

          {/* Interactive Map */}
          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 mb-16 overflow-hidden">
            <div className="relative z-10">
              {/* Map Title */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Île-de-France</h3>
                <p className="text-zinc-600">Notre zone de couverture complète</p>
              </div>

              {/* Department Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {zones.map((zone, index) => (
                  <div
                    key={zone.id}
                    className={`bg-white rounded-xl p-4 shadow-sm border border-zinc-200 hover:shadow-md transition-all duration-300 group cursor-pointer`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${zone.color} flex items-center justify-center text-lg`}>
                        {zone.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-900 text-sm">{zone.name}</h4>
                        <p className="text-xs text-zinc-500">{zone.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">Disponible</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full"></div>
              <div className="absolute top-32 right-20 w-24 h-24 bg-indigo-500 rounded-full"></div>
              <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-purple-500 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-28 h-28 bg-pink-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Zones */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Détail des Zones</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Informations détaillées sur nos zones d'intervention
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {zones.map((zone, index) => (
              <ZoneCard key={zone.id} zone={zone} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Notre Couverture</h2>
            <p className="text-xl text-zinc-600">
              Une présence forte dans toute l'Île-de-France
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">8</div>
              <div className="text-lg font-semibold text-zinc-900 mb-1">Départements</div>
              <div className="text-sm text-zinc-600">Couverture complète</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl">
              <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-lg font-semibold text-zinc-900 mb-1">Techniciens</div>
              <div className="text-sm text-zinc-600">Disponibles 24h/24</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">30min</div>
              <div className="text-lg font-semibold text-zinc-900 mb-1">Temps moyen</div>
              <div className="text-sm text-zinc-600">D'intervention</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zinc-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-zinc-900 mb-6">
            Besoin d'une intervention ?
          </h2>
          <p className="text-xl text-zinc-600 mb-8">
            Nous intervenons dans toute l'Île-de-France, 24h/24, 7j/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33756902112"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white text-lg transition-all duration-300 hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)'
              }}
            >
              📞 07 56 90 21 12
            </a>
            <a
              href="https://wa.me/+33756902112"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white text-lg bg-green-500 hover:bg-green-600 transition-all duration-300 hover:shadow-xl"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
}
