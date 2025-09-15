import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-white to-red-500 text-gray-800 p-4">
      <h1 className="text-9xl font-extrabold text-white drop-shadow-lg">404</h1>
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-6 drop-shadow">Page Non Trouvée</h2>
      <p className="text-lg md:text-xl text-white/90 text-center mb-8 max-w-md">
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <div className="flex space-x-4">
        <Link href="/" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
          Retour à l'accueil
        </Link>
        <a href="javascript:history.back()" className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105">
          Page précédente
        </a>
      </div>
    </div>
  );
}