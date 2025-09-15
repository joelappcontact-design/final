export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-white to-red-500">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center text-white overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Serrurier d'Urgence <span className="text-yellow-300">24/7</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow">
            Intervention rapide en 30-45 minutes dans toute l'Île-de-France.
            Artisans certifiés et tarifs transparents.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="tel:0756902112"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              📞 Appeler maintenant
            </a>
            <a
              href="https://wa.me/33756902112"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              💬 WhatsApp
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 inline-block">
            <span className="text-white font-bold text-lg">Intervention en 30-45 min</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-16">
            Nos services de serrurerie
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">🔓</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Ouverture de porte</h3>
              <p className="text-slate-600 mb-6">Ouverture rapide et sécurisée de tous types de serrures</p>
              <div className="text-3xl font-bold text-green-600">À partir de 129€</div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Changement de cylindre</h3>
              <p className="text-slate-600 mb-6">Installation et réparation de cylindres de serrure</p>
              <div className="text-3xl font-bold text-green-600">À partir de 89€</div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Sécurisation</h3>
              <p className="text-slate-600 mb-6">Renforcement et sécurisation de vos ouvertures</p>
              <div className="text-3xl font-bold text-green-600">Sur devis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-white to-red-600">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16 text-shadow-lg">
            Pourquoi nous choisir ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Intervention rapide</h3>
              <p className="text-white/80">En 30-45 minutes maximum</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Artisans certifiés</h3>
              <p className="text-white/80">Professionnels vérifiés</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Disponible 24h/24</h3>
              <p className="text-white/80">Service d'urgence permanent</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tarifs transparents</h3>
              <p className="text-white/80">Devis gratuit avant intervention</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-lg">
              Besoin d'un serrurier d'urgence ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Appelez-nous maintenant pour une intervention rapide et professionnelle
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:0756902112"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl"
              >
                📞 Appeler maintenant
              </a>
              <a
                href="https://wa.me/33756902112"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl"
              >
                💬 WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <span className="bg-white/20 px-3 py-1 rounded-full">✓ Service 24h/24</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">✓ Artisans certifiés</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">✓ Devis gratuit</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">✓ Garantie travaux</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}