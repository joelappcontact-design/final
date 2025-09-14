import { config } from '@/lib/config';
import CallButton from '@/components/CallButton';
import PhoneButton from '@/components/PhoneButton';
import { CheckCircle, Clock, Shield, MapPin, Star, Users } from 'lucide-react';

interface CityPageProps {
  cityName: string;
  citySlug: string;
  zones: string[];
  description: string;
  keywords: string[];
}

export default function CityPage({ 
  cityName, 
  citySlug, 
  zones, 
  description, 
  keywords 
}: CityPageProps) {
  return (
    <div className="min-h-screen">
      {/* Section Hero */}
      <section className="hero-apple-french">
        <div className="container-apple">
          <h1 className="text-apple-hero mb-6">
            Serrurier d'urgence à {cityName}
          </h1>
          <p className="text-apple-subtitle mb-8">
            Intervention 24h/24, 7j/7 • Artisans vérifiés • {config.slaMinutes}
          </p>
          <div className="price-apple mb-8">
            <span className="text-4xl font-bold">À partir de 89€</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <CallButton variant="primary" size="lg" />
          </div>
          <div className="flex flex-wrap justify-center gap-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 text-primary">
              <CheckCircle size={20} className="text-accent" />
              <span className="text-apple-small">Intervention rapide</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Clock size={20} className="text-accent" />
              <span className="text-apple-small">{config.slaMinutes}</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Shield size={20} className="text-accent" />
              <span className="text-apple-small">Artisans vérifiés</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Zones de service */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Zones de service à {cityName}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous intervenons dans tous les quartiers de {cityName} et ses environs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {zones && zones.length > 0 ? zones.map((zone, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{zone}</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Intervention rapide dans le quartier de {zone}
                </p>
              </div>
            )) : (
              <div className="col-span-full text-center text-gray-500">
                <p>Aucune zone de service définie</p>
              </div>
            )}
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Besoin d'une intervention urgente ?
              </h3>
              <p className="text-gray-600 mb-6">
                Appelez-nous maintenant pour une intervention immédiate à {cityName}
              </p>
              <CallButton variant="secondary" size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Témoignages clients à {cityName}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les avis de nos clients satisfaits
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Service excellent, intervention rapide et professionnelle. Je recommande vivement !"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Users size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Client {cityName}</p>
                    <p className="text-sm text-gray-500">Habitant de {cityName}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA finale */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Besoin d'un serrurier à {cityName} ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Appelez-nous maintenant pour une intervention immédiate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CallButton variant="primary" size="lg" />
              <PhoneButton variant="secondary" size="lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
