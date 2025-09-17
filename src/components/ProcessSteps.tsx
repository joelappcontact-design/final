export default function ProcessSteps() {
  const steps = [
    {
      number: '1',
      title: 'Appelez-nous',
      description: 'Expliquez votre situation et recevez un devis immédiat par téléphone'
    },
    {
      number: '2', 
      title: 'Intervention rapide',
      description: 'Un technicien expert se rend sur place en moins de 30 minutes'
    },
    {
      number: '3',
      title: 'Problème résolu',
      description: 'Ouverture sécurisée ou remplacement de serrure immédiat'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {steps.map((step, index) => (
        <div key={index} className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-[#1e3a8a] to-[#60a5fa] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
            {step.number}
          </div>
          <h3 className="text-xl font-bold text-white mb-4">
            {step.title}
          </h3>
          <p className="text-blue-200 leading-relaxed">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}