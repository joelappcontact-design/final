'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CallButton from './CallButton';
import PhoneButton from './PhoneButton';
import { config } from '@/lib/config';

interface CityPageTemplateProps {
  cityName: string;
  citySlug: string;
  description: string;
  services?: {
    title: string;
    description: string;
    price: string;
    icon: string;
  }[];
  features?: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export default function CityPageTemplate({
  cityName,
  citySlug,
  description,
  services = [],
  features = []
}: CityPageTemplateProps) {
  const defaultServices = [
    {
      title: 'Ouverture de porte',
      description: 'Ouverture rapide et sécurisée de tous types de serrures sans endommager votre porte',
      price: 'À partir de 129€',
      icon: '🔓'
    },
    {
      title: 'Changement de cylindre',
      description: 'Installation et réparation de cylindres de serrure pour une sécurité optimale',
      price: 'À partir de 89€',
      icon: '🔧'
    },
    {
      title: 'Sécurisation',
      description: 'Renforcement et sécurisation de vos ouvertures avec les dernières technologies',
      price: 'Sur devis',
      icon: '🛡️'
    }
  ];

  const defaultFeatures = [
    {
      title: 'Intervention rapide',
      description: 'Délai garanti de 30-45 minutes',
      icon: '⚡'
    },
    {
      title: 'Artisans certifiés',
      description: 'Professionnels vérifiés et assurés',
      icon: '🛡️'
    },
    {
      title: 'Disponible 24h/24',
      description: 'Service d\'urgence permanent',
      icon: '📞'
    }
  ];

  const servicesToUse = services.length > 0 ? services : defaultServices;
  const featuresToUse = features.length > 0 ? features : defaultFeatures;

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Particules flottantes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-1" style={{top: '70%', left: '80%', animationDelay: '3s'}}></div>
          <div className="particle particle-2" style={{top: '40%', left: '60%', animationDelay: '5s'}}></div>
        </div>

        {/* Gradient de fond animé */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] animate-gradient"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge de confiance */}
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 animate-fade-in">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 font-medium">Service d'urgence 24h/24</span>
            </div>

            {/* Titre principal */}
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight animate-slide-up">
              Serrurier d'urgence
              <br />
              <span className="text-4xl md:text-6xl bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
                {cityName}
              </span>
            </h1>

            {/* Sous-titre */}
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
              {description}
              <br />
              <span className="text-blue-400 font-semibold">Disponible 24h/24, 7j/7</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <CallButton 
                phoneNumber={config.phone.replace(/\s/g, '')} 
                variant="primary" 
                size="lg" 
                className="animate-pulse-glow"
              >
                📞 Appeler maintenant
              </CallButton>
              <PhoneButton 
                phoneNumber={config.phone.replace(/\s/g, '')} 
                isWhatsApp 
                variant="secondary" 
                size="lg"
              >
                💬 WhatsApp
              </PhoneButton>
            </div>

            {/* Avantages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up" style={{animationDelay: '0.6s'}}>
              {featuresToUse.map((feature, index) => (
                <div key={index} className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-[#1e3a8a] to-[#3b82f6]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Nos services de serrurerie à {cityName}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Des solutions professionnelles pour tous vos besoins de serrurerie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {servicesToUse.map((service, index) => (
              <div key={index} className="card group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] bg-clip-text text-transparent">
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa]">
        <div className="container mx-auto text-center">
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-lg">
              Besoin d'un serrurier d'urgence à {cityName} ?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Appelez-nous maintenant pour une intervention rapide et professionnelle
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <CallButton 
                phoneNumber={config.phone.replace(/\s/g, '')} 
                variant="primary" 
                size="lg" 
                className="animate-pulse-glow"
              >
                📞 Appeler maintenant
              </CallButton>
              <PhoneButton 
                phoneNumber={config.phone.replace(/\s/g, '')} 
                isWhatsApp 
                variant="secondary" 
                size="lg"
              >
                💬 WhatsApp
              </PhoneButton>
            </div>

            {/* Badges de confiance */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300">
              <span className="glass px-4 py-2 rounded-full">✓ Service 24h/24</span>
              <span className="glass px-4 py-2 rounded-full">✓ Artisans certifiés</span>
              <span className="glass px-4 py-2 rounded-full">✓ Devis gratuit</span>
              <span className="glass px-4 py-2 rounded-full">✓ Garantie travaux</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
