import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
                Île-de-France
              </span>
            </h1>

            {/* Sous-titre */}
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
              Intervention rapide en 30-45 minutes
              <br />
              <span className="text-blue-400 font-semibold">Disponible 24h/24, 7j/7</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <a
                href="tel:+33756902112"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl animate-pulse-glow"
              >
                📞 Appeler maintenant
              </a>
              <a
                href="https://wa.me/+33756902112"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                💬 WhatsApp
              </a>
            </div>

            {/* Avantages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-2">Intervention rapide</h3>
                <p className="text-slate-300 text-sm">Délai garanti de 30-45 minutes</p>
              </div>
              <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-white mb-2">Artisans certifiés</h3>
                <p className="text-slate-300 text-sm">Professionnels vérifiés et assurés</p>
              </div>
              <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-white mb-2">Disponible 24h/24</h3>
                <p className="text-slate-300 text-sm">Service d'urgence permanent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-[#1e3a8a] to-[#3b82f6]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Nos services de serrurerie
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Des solutions professionnelles pour tous vos besoins de serrurerie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🔓</div>
              <h3 className="text-2xl font-bold text-white mb-4">Ouverture de porte</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Ouverture rapide et sécurisée de tous types de serrures sans endommager votre porte
              </p>
              <div className="text-3xl font-bold bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] bg-clip-text text-transparent">
                À partir de 39€
              </div>
            </div>
            <div className="card group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🔧</div>
              <h3 className="text-2xl font-bold text-white mb-4">Changement de cylindre</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Installation et réparation de cylindres de serrure pour une sécurité optimale
              </p>
              <div className="text-3xl font-bold bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] bg-clip-text text-transparent">
                À partir de 65€
              </div>
            </div>
            <div className="card group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🛡️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Sécurisation</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Renforcement et sécurisation de vos ouvertures avec les dernières technologies
              </p>
              <div className="text-3xl font-bold bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] bg-clip-text text-transparent">
                Sur devis
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}