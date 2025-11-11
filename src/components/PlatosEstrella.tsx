
import React from 'react';

const PlatosEstrella: React.FC = () => {
  const platos = [
    { name: 'Manitas de Cerdo', seed: 'manitas', size: 'large' },
    { name: 'Arroces de la Casa', seed: 'arroces', size: 'normal' },
    { name: 'Callos de Ternera', seed: 'callos', size: 'normal' },
    { name: 'Carrillada al Vino Tinto', seed: 'carrillada', size: 'normal' },
    { name: 'Rabo de Toro Estofado', seed: 'rabo', size: 'normal' },
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
          Nuestros Platos Estrella
        </h2>
        <p className="mt-4 text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          Descubre los sabores que nos hacen únicos. Platos elaborados con la mejor materia prima y el cariño de nuestra cocina.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platos.map((plato) => (
          <div
            key={plato.name}
            className={`group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out ${
              plato.size === 'large' ? 'lg:col-span-2 lg:row-span-2' : ''
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-300"
              style={{
                backgroundImage: `url(https://picsum.photos/seed/${plato.seed}/${plato.size === 'large' ? 800 : 400}/${
                  plato.size === 'large' ? 800 : 400
                })`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
            <div
              className={`relative flex flex-col items-start justify-end h-full p-6 text-white text-left ${
                plato.size === 'large' ? 'min-h-[400px]' : 'min-h-[190px]'
              }`}
            >
              <h3
                className={`${
                  plato.size === 'large' ? 'text-2xl lg:text-3xl' : 'text-xl'
                } font-bold tracking-tight text-shadow`}
              >
                {plato.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatosEstrella;
