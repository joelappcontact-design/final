import React from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import StickyCTA from '@/components/ui/StickyCTA';

const contactInfo = [
  {
    icon: '📞',
    title: 'Téléphone',
    content: '07 56 90 21 12',
    description: 'Disponible 24h/24 et 7j/7'
  },
  {
    icon: '💬',
    title: 'WhatsApp',
    content: '07 56 90 21 12',
    description: 'Réponse rapide garantie'
  },
  {
    icon: '📧',
    title: 'Email',
    content: 'contact@serrurierfrancais.com',
    description: 'Nous vous répondons sous 24h'
  },
  {
    icon: '📍',
    title: 'Adresse',
    content: 'Île-de-France',
    description: 'Intervention dans toute la région'
  }
];

const services = [
  'Ouverture de porte',
  'Changement de cylindre',
  'Réparation de serrure',
  'Installation de serrure',
  'Dépannage de coffre-fort',
  'Urgence 24h/24',
  'Serrure de voiture',
  'Serrure de bureau'
];

export default function ContactPage() {
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
              Contactez-Nous
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-600 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
              Besoin d'une intervention ? Nous sommes là pour vous aider
              <br />
              <span className="text-lg text-zinc-500">Réponse rapide • Devis gratuit • Intervention 24h/24</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Nos Coordonnées</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Plusieurs façons de nous contacter selon vos préférences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-zinc-50 to-blue-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{info.title}</h3>
                <p className="text-lg font-semibold text-zinc-800 mb-2" style={{
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {info.content}
                </p>
                <p className="text-sm text-zinc-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Formulaire de Contact</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Décrivez-nous votre problème et nous vous recontacterons rapidement
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-zinc-100 p-8">
            <form className="space-y-6">
              {/* Nom et Prénom */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-zinc-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-zinc-50 focus:bg-white"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-zinc-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-zinc-50 focus:bg-white"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              {/* Email et Téléphone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-zinc-50 focus:bg-white"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-zinc-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-zinc-50 focus:bg-white"
                    placeholder="07 12 34 56 78"
                  />
                </div>
              </div>

              {/* Adresse */}
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-zinc-700 mb-2">
                  Adresse d'intervention
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-zinc-50 focus:bg-white"
                  placeholder="123 Rue de la Paix, 75001 Paris"
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-zinc-700 mb-2">
                  Type de service *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-zinc-50 focus:bg-white"
                >
                  <option value="">Sélectionnez un service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Urgence */}
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-3">
                  Niveau d'urgence *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <label className="flex items-center space-x-3 p-4 rounded-xl border border-zinc-200 hover:bg-zinc-50 cursor-pointer transition-all duration-200">
                    <input type="radio" name="urgency" value="urgent" className="text-blue-500" />
                    <div>
                      <div className="font-medium text-zinc-900">🚨 Urgent</div>
                      <div className="text-sm text-zinc-600">Intervention immédiate</div>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 p-4 rounded-xl border border-zinc-200 hover:bg-zinc-50 cursor-pointer transition-all duration-200">
                    <input type="radio" name="urgency" value="normal" className="text-blue-500" />
                    <div>
                      <div className="font-medium text-zinc-900">⏰ Normal</div>
                      <div className="text-sm text-zinc-600">Sous 24h</div>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 p-4 rounded-xl border border-zinc-200 hover:bg-zinc-50 cursor-pointer transition-all duration-200">
                    <input type="radio" name="urgency" value="planning" className="text-blue-500" />
                    <div>
                      <div className="font-medium text-zinc-900">📅 Planifié</div>
                      <div className="text-sm text-zinc-600">À programmer</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-zinc-700 mb-2">
                  Description du problème *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-zinc-50 focus:bg-white resize-none"
                  placeholder="Décrivez votre problème de serrurerie en détail..."
                />
              </div>

              {/* Consentement RGPD */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  className="mt-1 text-blue-500 rounded focus:ring-blue-500"
                />
                <label htmlFor="consent" className="text-sm text-zinc-600">
                  J'accepte que mes données personnelles soient utilisées pour traiter ma demande de contact. 
                  <a href="/confidentialite" className="text-blue-600 hover:underline ml-1">
                    Politique de confidentialité
                  </a>
                </label>
              </div>

              {/* Bouton Submit */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-white text-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)'
                  }}
                >
                  📤 Envoyer la demande
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Rapide */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Questions Fréquentes</h2>
            <p className="text-xl text-zinc-600">
              Réponses rapides aux questions les plus courantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-zinc-50 to-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-zinc-900 mb-3">⏱️ Délai d'intervention</h3>
              <p className="text-zinc-600">Nous intervenons en moyenne en 30-45 minutes dans toute l'Île-de-France, 24h/24 et 7j/7.</p>
            </div>

            <div className="bg-gradient-to-br from-zinc-50 to-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-zinc-900 mb-3">💰 Tarifs</h3>
              <p className="text-zinc-600">Devis gratuit et tarifs transparents. Ouverture de porte à partir de 39€, sans coût caché.</p>
            </div>

            <div className="bg-gradient-to-br from-zinc-50 to-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-zinc-900 mb-3">🛡️ Garantie</h3>
              <p className="text-zinc-600">Toutes nos interventions sont garanties. Satisfaction client ou remboursement.</p>
            </div>

            <div className="bg-gradient-to-br from-zinc-50 to-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-zinc-900 mb-3">🔧 Types d'intervention</h3>
              <p className="text-zinc-600">Ouverture de porte, changement de cylindre, réparation, installation, coffre-fort, voiture, bureau.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-zinc-900 mb-6">
            Besoin d'une intervention urgente ?
          </h2>
          <p className="text-xl text-zinc-600 mb-8">
            Appelez-nous directement pour une intervention immédiate
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