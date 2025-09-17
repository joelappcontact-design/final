import React from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import StickyCTA from '@/components/ui/StickyCTA';

const services = [
  {
    id: 1,
    title: "Ouverture de porte",
    description: "Dépannage rapide 24h/24 pour tous types de portes",
    price: "À partir de 39€",
    features: [
      "Intervention en 30-45 minutes",
      "Tous types de serrures",
      "Matériel professionnel",
      "Garantie sur l'intervention"
    ],
    icon: "🔑"
  },
  {
    id: 2,
    title: "Changement de cylindre",
    description: "Remplacement de cylindre pour renforcer votre sécurité",
    price: "À partir de 65€",
    features: [
      "Cylindres haute sécurité",
      "Installation professionnelle",
      "Test de fonctionnement",
      "Garantie 2 ans"
    ],
    icon: "🔐"
  },
  {
    id: 3,
    title: "Réparation de serrure",
    description: "Maintenance et réparation de tous types de serrures",
    price: "À partir de 45€",
    features: [
      "Diagnostic gratuit",
      "Pièces de qualité",
      "Réparation sur place",
      "Garantie 6 mois"
    ],
    icon: "🔧"
  },
  {
    id: 4,
    title: "Installation de serrure",
    description: "Installation de nouvelles serrures et systèmes de sécurité",
    price: "À partir de 85€",
    features: [
      "Serrures multipoints",
      "Systèmes électroniques",
      "Installation propre",
      "Formation à l'utilisation"
    ],
    icon: "🏠"
  },
  {
    id: 5,
    title: "Dépannage de coffre-fort",
    description: "Ouverture et réparation de coffres-forts",
    price: "À partir de 120€",
    features: [
      "Ouverture sans dommage",
      "Réparation mécanique",
      "Remise en service",
      "Conseils sécurité"
    ],
    icon: "🏦"
  },
  {
    id: 6,
    title: "Urgence 24h/24",
    description: "Service d'urgence disponible jour et nuit",
    price: "À partir de 39€",
    features: [
      "Disponible 7j/7",
      "Intervention rapide",
      "Techniciens certifiés",
      "Tarif transparent"
    ],
    icon: "🚨"
  },
  {
    id: 7,
    title: "Serrure de voiture",
    description: "Ouverture et réparation de serrures de véhicules",
    price: "À partir de 55€",
    features: [
      "Ouverture sans clé",
      "Réparation de cylindre",
      "Programmation clés",
      "Tous véhicules"
    ],
    icon: "🚗"
  },
  {
    id: 8,
    title: "Serrure de bureau",
    description: "Services de serrurerie pour entreprises et bureaux",
    price: "À partir de 75€",
    features: [
      "Serrures commerciales",
      "Systèmes d'accès",
      "Maintenance préventive",
      "Contrats d'entretien"
    ],
    icon: "🏢"
  }
];

export default function ServicesPage() {
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
              Nos Services
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-600 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
              Découvrez l'ensemble de nos services de serrurerie professionnelle
              <br />
              <span className="text-lg text-zinc-500">Intervention rapide • Techniciens certifiés • Tarifs transparents</span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-sm border border-zinc-100 hover:shadow-lg transition-all duration-300 p-8 group"
              >
                {/* Icon */}
                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 text-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-600 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>

                {/* Price */}
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold" style={{
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {service.price}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-sm text-zinc-600">
                      <div className="w-2 h-2 rounded-full" style={{
                        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)'
                      }}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-8 text-center">
                  <a
                    href="tel:+33756902112"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)'
                    }}
                  >
                    Appeler maintenant
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zinc-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-zinc-900 mb-6">
            Besoin d'un service personnalisé ?
          </h2>
          <p className="text-xl text-zinc-600 mb-8">
            Contactez-nous pour un devis gratuit et personnalisé selon vos besoins
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
