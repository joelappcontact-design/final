'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import CallCTA from '@/components/CallCTA';
import { config } from '@/lib/config';

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
  city: string;
  honeypot: string;
}

export default function ContactClient() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    phone: '',
    email: '',
    message: '',
    city: '',
    honeypot: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérification honeypot
    if (form.honeypot) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulation d'envoi (à remplacer par une vraie API)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle size={32} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4 text-shadow">
              Message envoyé !
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Merci pour votre message. Nous vous recontacterons dans les plus brefs délais.
            </p>
            <CallCTA variant="primary" size="lg" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-lg">
            Contactez-nous
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto text-shadow">
            Intervention d'urgence 24h/24 - Nous répondons à tous vos appels
          </p>
          
          <CallCTA variant="primary" size="lg" showWhatsApp={true} />
        </div>
      </section>

      {/* Informations de contact */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Informations principales */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-shadow">
                Nos coordonnées
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Téléphone</h3>
                    <a 
                      href={config.urls.phone}
                      className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                      {config.phone}
                    </a>
                    <p className="text-white/80 text-sm mt-1">
                      Disponible {config.serviceHours}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={24} className="text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
                    <a 
                      href={config.urls.whatsapp}
                      className="text-lg text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                      Envoyer un message
                    </a>
                    <p className="text-white/80 text-sm mt-1">
                      Réponse rapide garantie
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <a 
                      href={`mailto:${config.legal.email}`}
                      className="text-lg text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                      {config.legal.email}
                    </a>
                    <p className="text-white/80 text-sm mt-1">
                      Pour les demandes non urgentes
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Zone d'intervention</h3>
                    <p className="text-white/80">
                      {config.primaryCity} et environs
                    </p>
                    <p className="text-white/80 text-sm mt-1">
                      Intervention en {config.slaMinutes}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Horaires</h3>
                    <p className="text-white/80">
                      {config.serviceHours}
                    </p>
                    <p className="text-white/80 text-sm mt-1">
                      Y compris nuits, week-ends et jours fériés
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-shadow">
                Envoyez-nous un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:border-yellow-400"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:border-yellow-400"
                      placeholder="Votre téléphone"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:border-yellow-400"
                    placeholder="Votre email"
                  />
                </div>
                
                <div>
                  <label htmlFor="city" className="block text-white font-medium mb-2">
                    Ville
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:border-yellow-400"
                  >
                    <option value="">Sélectionnez votre ville</option>
                    {config.cities.map((city) => (
                      <option key={city} value={city} className="text-gray-900">
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:border-yellow-400 resize-none"
                    placeholder="Décrivez votre problème..."
                  />
                </div>
                
                {/* Honeypot */}
                <input
                  type="text"
                  name="honeypot"
                  value={form.honeypot}
                  onChange={handleChange}
                  className="sr-only"
                  tabIndex={-1}
                  autoComplete="off"
                />
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary px-8 py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 text-shadow">
              Urgence ? Appelez-nous directement !
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Pour une intervention d'urgence, l'appel téléphonique reste le plus rapide
            </p>
            <CallCTA variant="primary" size="lg" showWhatsApp={true} />
          </div>
        </div>
      </section>
    </div>
  );
}
