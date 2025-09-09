import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Shield } from 'lucide-react';
import { config } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informations principales */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
                <Phone size={24} className="text-gray-900" />
              </div>
              <h3 className="text-xl font-bold">{config.siteName}</h3>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Serrurier d'urgence {config.primaryCity} - Intervention 24h/24, 7j/7. 
              Prix clairs et transparents, artisans vérifiés.
            </p>
            
            {/* Contact principal */}
            <div className="space-y-3">
              <a 
                href={config.urls.phone}
                className="flex items-center gap-3 text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <Phone size={24} />
                {config.phone}
              </a>
              
              <div className="flex items-center gap-3 text-gray-300">
                <Clock size={20} />
                <span>Disponible {config.serviceHours}</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={20} />
                <span>Intervention en {config.slaMinutes}</span>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="text-gray-300 hover:text-white transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Informations</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/mentions-legales" className="text-gray-300 hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-gray-300 hover:text-white transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li className="text-gray-300 text-sm">
                SIREN: {config.legal.siren}
              </li>
              <li className="text-gray-300 text-sm">
                <a 
                  href={`mailto:${config.legal.email}`}
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  {config.legal.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Zone d'intervention */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex items-center gap-2 mb-4">
            <Shield size={20} className="text-yellow-400" />
            <h4 className="text-lg font-semibold">Zones d'intervention</h4>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Nous intervenons dans tout {config.primaryCity} et ses environs : 
            {config.cities.slice(0, 8).join(', ')} et bien d'autres.
          </p>
          <Link 
            href="/zones" 
            className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-medium"
          >
            Voir toutes les zones →
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {config.siteName}. Tous droits réservés.</p>
          <p className="mt-2">
            Site optimisé pour la conversion et conforme RGPD.
          </p>
        </div>
      </div>
    </footer>
  );
}
