import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mentions Légales | Serrurier d\'urgence 24h/24',
  description: 'Mentions légales du site Serrurierfrancais.com - Informations légales, conditions d\'utilisation et politique de confidentialité.',
  keywords: [
    'mentions légales',
    'conditions d\'utilisation',
    'politique confidentialité',
    'informations légales'
  ],
};

export default function MentionsLegalesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-black text-gray-100">
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500 rounded-full opacity-0 animate-particle"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 10}s`,
            }}
          />
        ))}
      </div>

      <Header />

      <main className="relative z-10 pt-20">
        <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-lg animate-fade-in-up">
              Mentions Légales
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Informations légales et conditions d'utilisation
            </p>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-blue-950 to-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-8 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Éditeur du site
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Le présent site est édité par Serrurierfrancais.com, société spécialisée dans les services de serrurerie d'urgence.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Coordonnées
                  </h2>
                  <div className="text-gray-300 space-y-2">
                    <p><strong>Raison sociale :</strong> Serrurierfrancais.com</p>
                    <p><strong>Adresse :</strong> 123 Rue de la Paix, 75001 Paris</p>
                    <p><strong>Téléphone :</strong> 07 56 90 21 12</p>
                    <p><strong>Email :</strong> contact@serrurierfrancais.com</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Hébergement
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Propriété intellectuelle
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    L'ensemble du contenu du site (textes, images, vidéos, etc.) est protégé par le droit d'auteur. 
                    Toute reproduction ou utilisation sans autorisation est interdite.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Responsabilité
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Les informations contenues sur ce site sont données à titre indicatif. 
                    Serrurierfrancais.com ne peut être tenu responsable des dommages directs ou indirects 
                    résultant de l'utilisation des informations présentes sur le site.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Données personnelles
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Les données personnelles collectées via ce site sont traitées conformément à notre 
                    <a href="/confidentialite" className="text-blue-400 hover:underline"> Politique de Confidentialité</a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Droit applicable
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
                  </p>
                </div>

                <div className="pt-8 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">
                    Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
