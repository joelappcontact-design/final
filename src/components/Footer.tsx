import Link from 'next/link';
import { config } from '@/lib/config';
import CallButton from './CallButton';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12 shadow-inner">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
          {/* Section 1: Logo and Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa]">
                Serrurierfrancais.com
              </span>
            </Link>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Serrurier d'urgence Île-de-France - Intervention 24h/24, 7j/7. Intervention rapide, artisans vérifiés.
            </p>
            <div className="flex items-center space-x-2 text-blue-300 mb-2">
              <span className="font-semibold">{config.phoneDisplay}</span>
            </div>
            <div className="text-blue-300 text-sm mb-4">Disponible 24/7</div>
            <div className="text-blue-300 text-sm mb-6">Intervention en 30–45 min</div>
            <CallButton
              phoneNumber={config.phone.replace(/\s/g, '')}
              variant="primary"
              size="md"
            >
              Appeler {config.phoneDisplay}
            </CallButton>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Liens rapides</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">Accueil</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-blue-400 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Informations</h4>
            <ul className="space-y-3">
              <li><Link href="/mentions-legales" className="text-gray-400 hover:text-blue-400 transition-colors">Mentions légales</Link></li>
              <li><Link href="/confidentialite" className="text-gray-400 hover:text-blue-400 transition-colors">Confidentialité</Link></li>
              <li><a href={`mailto:${config.legal.email}`} className="text-gray-400 hover:text-blue-400 transition-colors">{config.legal.email}</a></li>
            </ul>
          </div>

          {/* Zones d'intervention */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Zones d'intervention</h4>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Nous intervenons dans tout Île-de-France et ses environs : Paris, Meaux, Melun, Chelles, Champs-sur-Marne, Torcy, Lagny-sur-Marne, Fontainebleau et bien d'autres.
            </p>
            <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm">
              Voir toutes les zones →
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          © 2025 Serrurierfrancais.com. Tous droits réservés.
          <br />
          Site optimisé pour la conversion et conforme RGPD.
        </div>
      </div>
    </footer>
  );
}