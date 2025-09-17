'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Non Trouvée</h2>
        <p className="text-gray-600 mb-8">Désolé, la page que vous recherchez n'existe pas.</p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/" 
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            🏠 Retour à l'accueil
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700"
          >
            ⬅️ Page précédente
          </button>
        </div>
      </div>
    </div>
  );
}