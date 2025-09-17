import React from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import StickyCTA from '@/components/ui/StickyCTA';

const values = [
  {
    icon: '🏆',
    title: 'Excellence',
    description: 'Nous nous engageons à fournir un service de qualité supérieure avec des techniciens certifiés et expérimentés.'
  },
  {
    icon: '⚡',
    title: 'Rapidité',
    description: 'Intervention en 30-45 minutes dans toute l\'Île-de-France, 24h/24 et 7j/7 pour vos urgences.'
  },
  {
    icon: '🤝',
    title: 'Confiance',
    description: 'Transparence totale sur nos tarifs, devis gratuit et garantie sur toutes nos interventions.'
  },
  {
    icon: '🔧',
    title: 'Expertise',
    description: 'Plus de 15 ans d\'expérience dans la serrurerie et partenariat avec les plus grandes marques.'
  }
];

const team = [
  {
    name: 'Alexandre MARINO',
    role: 'Directeur Général & Chef d\'Équipe',
    experience: '15+ ans d\'expérience',
    description: 'Expert en serrurerie depuis plus de 15 ans, Alexandre dirige une équipe de 200+ techniciens qualifiés à travers l\'Île-de-France.',
    image: '👨‍💼'
  },
  {
    name: 'Marie Dubois',
    role: 'Responsable Qualité',
    experience: '10+ ans d\'expérience',
    description: 'Garantit la qualité de nos interventions et la satisfaction client avec une approche rigoureuse et professionnelle.',
    image: '👩‍💼'
  },
  {
    name: 'Thomas Martin',
    role: 'Responsable Technique',
    experience: '12+ ans d\'expérience',
    description: 'Expert technique formé aux dernières technologies de serrurerie et aux normes de sécurité les plus strictes.',
    image: '👨‍🔧'
  }
];

const partners = [
  { name: 'Fichet', logo: '🔐', description: 'Leader mondial de la sécurité' },
  { name: 'Bricard', logo: '🔑', description: 'Innovation et tradition' },
  { name: 'Vachette', logo: '🏠', description: 'Sécurité résidentielle' },
  { name: 'Héraclès', logo: '🛡️', description: 'Protection renforcée' },
  { name: 'Abus', logo: '🔒', description: 'Qualité allemande' },
  { name: 'Mul-T-Lock', logo: '🔐', description: 'Haute sécurité' },
  { name: 'Cisa', logo: '🏢', description: 'Solutions professionnelles' },
  { name: 'Dom', logo: '🔧', description: 'Innovation technique' }
];

const stats = [
  { number: '15+', label: 'Années d\'expérience', icon: '📅' },
  { number: '200+', label: 'Techniciens qualifiés', icon: '👥' },
  { number: '50k+', label: 'Interventions réussies', icon: '✅' },
  { number: '98%', label: 'Clients satisfaits', icon: '😊' }
];

export default function AboutPage() {
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
              À Propos de Nous
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-600 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
              Votre partenaire de confiance en serrurerie depuis plus de 15 ans
              <br />
              <span className="text-lg text-zinc-500">Excellence • Rapidité • Professionnalisme</span>
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-zinc-900 mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                <p>
                  Fondée en 2008 par <strong>Alexandre MARINO</strong>, Serrurierfrancais.com est née d'une passion pour la serrurerie et d'un engagement envers l'excellence du service client.
                </p>
                <p>
                  Depuis plus de 15 ans, nous avons construit notre réputation sur la <strong>qualité de nos interventions</strong>, la <strong>rapidité de nos services</strong> et la <strong>transparence de nos tarifs</strong>.
                </p>
                <p>
                  Aujourd'hui, nous sommes fiers de diriger une équipe de <strong>200+ techniciens qualifiés</strong> qui interviennent dans toute l'Île-de-France, 24h/24 et 7j/7.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Notre Mission</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Offrir des solutions de serrurerie professionnelles, rapides et fiables à tous nos clients, 
                  en maintenant les plus hauts standards de qualité et de service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Nos Chiffres</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Une croissance constante et une satisfaction client exceptionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-zinc-100 hover:shadow-md transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-zinc-900 mb-2" style={{
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {stat.number}
                </div>
                <div className="text-sm text-zinc-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Nos Valeurs</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-50 to-blue-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{value.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Notre Équipe</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Des professionnels expérimentés à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-100 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{member.name}</h3>
                  <div className="text-sm text-zinc-500 mb-2">{member.role}</div>
                  <div className="text-xs text-blue-600 font-medium mb-4">{member.experience}</div>
                  <p className="text-zinc-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Partenaires */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Nos Partenaires</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Nous travaillons avec les plus grandes marques de serrurerie
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-50 to-blue-50 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <div className="text-sm font-semibold text-zinc-900 mb-1">{partner.name}</div>
                <div className="text-xs text-zinc-500">{partner.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Qualité */}
      <section className="py-16 bg-gradient-to-r from-zinc-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Notre Engagement</h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
              Nous nous engageons à vous offrir le meilleur service possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-zinc-100">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Garantie</h3>
              <p className="text-zinc-600">Toutes nos interventions sont garanties. Satisfaction client ou remboursement.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-zinc-100">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Disponibilité</h3>
              <p className="text-zinc-600">Service 24h/24 et 7j/7 pour toutes vos urgences de serrurerie.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-zinc-100">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Transparence</h3>
              <p className="text-zinc-600">Devis gratuit et tarifs transparents. Aucun coût caché.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-zinc-900 mb-6">
            Faites confiance à notre expertise
          </h2>
          <p className="text-xl text-zinc-600 mb-8">
            Plus de 15 ans d'expérience au service de votre sécurité
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
