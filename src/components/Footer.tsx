import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Shield } from 'lucide-react';
import CallButton from './CallButton';
import { config } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white" style={{backgroundColor: '#1e293b'}}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informations principales */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/logo-serrurier-francais.png" 
                alt="Serrurierfrancais.com" 
                width={200} 
                height={100}
                className="h-20 w-auto brightness-0 invert logo-outline"
              />
              <span className="text-white font-bold text-lg">Serrurierfrancais.com</span>
            </div>
            
            <p className="mb-6 max-w-md font-medium" style={{color: '#ffffff'}}>
              Serrurier d'urgence {config.primaryCity} - Intervention 24h/24, 7j/7. 
              Intervention rapide, artisans vérifiés.
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
              
              <div className="flex items-center gap-3" style={{color: '#ffffff'}}>
                <Clock size={20} />
                <span>Disponible {config.serviceHours}</span>
              </div>
              
              <div className="flex items-center gap-3" style={{color: '#ffffff'}}>
                <MapPin size={20} />
                <span>Intervention en {config.slaMinutes}</span>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{color: '#ffffff'}}>Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition-colors" style={{color: '#ffffff'}}>
                  Accueil
                </Link>
              </li>
              <li>
              </li>
              <li>
                <Link href="/faq" className="hover:text-yellow-400 transition-colors" style={{color: '#ffffff'}}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400 transition-colors" style={{color: '#ffffff'}}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{color: '#ffffff'}}>Informations</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/mentions-legales" className="hover:text-yellow-400 transition-colors" style={{color: '#ffffff'}}>
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="hover:text-yellow-400 transition-colors" style={{color: '#ffffff'}}>
                  Confidentialité
                </Link>
              </li>
              <li className="text-sm" style={{color: '#ffffff'}}>
                <a 
                  href={`mailto:${config.legal.email}`}
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2"
                  style={{color: '#ffffff'}}
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
            <h4 className="text-lg font-semibold" style={{color: '#ffffff'}}>Zones d'intervention</h4>
          </div>
          <p className="text-sm mb-4" style={{color: '#ffffff !important'}}>
            Nous intervenons dans tout {config.primaryCity} et ses environs : 
            <span style={{color: '#ffffff !important'}}>{config.cities.slice(0, 8).join(', ')} et bien d'autres.</span>
          </p>
          <Link 
            href="/zones" 
            className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-medium"
          >
            Voir toutes les zones →
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm" style={{color: '#ffffff'}}>
          <p style={{color: '#ffffff'}}>&copy; {new Date().getFullYear()} {config.siteName}. Tous droits réservés.</p>
          <p className="mt-2" style={{color: '#ffffff'}}>
            Site optimisé pour la conversion et conforme RGPD.
          </p>
        </div>
      </div>
    </footer>
  );
}
