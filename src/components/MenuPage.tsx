
import React from 'react';

// Define the types for our data structures
interface Dish {
  name: string;
  path: string;
}

// Define the specific categories our menu can have
type MenuCategory = 'Entrantes' | 'Arroces y fidegua' | 'De cuchara' | 'Sopas y cremas' | 'Carnes' | 'Pescados' | 'Guarnicion' | 'Postres';

// Define the Menu object type, ensuring only valid categories are used as keys
type Menu = {
  [key in MenuCategory]: Dish[];
};

const MenuPage: React.FC = () => {
  // Explicitly type the menu object
  const menu: Menu = {
    'Entrantes': [
      { name: 'Ensaladilla Rusa', path: '/images/Fotosweb/Entrantes/Ensaladillarusa.jpeg' },
      { name: 'Parrilla de Verduras', path: '/images/Fotosweb/Entrantes/Parrilla%20de%20verduras.jpeg' },
      { name: 'Bravas el Rincón', path: '/images/Fotosweb/Entrantes/bravas%20el%20Rincón_.jpg' },
      { name: 'Parrilla de Verduras', path: '/images/Fotosweb/Entrantes/parrilla%20de%20verduras_.jpg' }
    ],
    'Arroces y fidegua': [
      { name: 'Arroz Negro', path: '/images/Fotosweb/Arroces%20y%20fidegua/Arroz%20negro.jpeg' },
      { name: 'Arroz del Señorito', path: '/images/Fotosweb/Arroces%20y%20fidegua/ArrozSenyoret.jpeg' },
      { name: 'Arroz de Setas, Boletus y Verduras', path: '/images/Fotosweb/Arroces%20y%20fidegua/Arrozdesetasboletusyverduras.jpeg' },
      { name: 'Arroz de Secreto, Ajitos y Boletus', path: '/images/Fotosweb/Arroces%20y%20fidegua/Arrozsecretoajitosyboletus.jpeg' },
      { name: 'Secreto y Ajitos Ttiernos', path: '/images/Fotosweb/Arroces%20y%20fidegua/Secretoyajitostiernos.jpeg' },
      { name: 'Fideuá', path: "/images/Fotosweb/Arroces%20y%20fidegua/Fideua.jpeg" },
      { name: 'Paella Valenciana', path: '/images/Fotosweb/Arroces%20y%20fidegua/Paella%20Valenciana.jpeg' },
      { name: 'Arroz al Horno', path: '/images/Fotosweb/Arroces%20y%20fidegua/arroz%20al%20horno_.jpg' },
      { name: 'Arroz de Secreto, Setas y Ajos Ttiernos', path: '/images/Fotosweb/Arroces%20y%20fidegua/arroz%20de%20secreto%20setas%20y%20ajos%20tiernos_.jpg' }
    ],
    'De cuchara': [
      { name: 'Fabada', path: '/images/Fotosweb/De%20cuchara/Fabada.jpeg' },
      { name: 'Guiso de Pollo y Conejo', path: '/images/Fotosweb/De%20cuchara/Guisodepolloyconejo.jpeg' },
      { name: 'Lentejas', path: '/images/Fotosweb/De%20cuchara/Lentejas.jpeg' }
    ],
    'Sopas y cremas': [
      { name: 'Crema de Calabacín', path: '/images/Fotosweb/Sopas%20y%20cremas/Crema%20de%20calabacín.jpeg' }
    ],
    'Carnes': [
      { name: 'Carrillada al Oporto', path: '/images/Fotosweb/carnes/Carrillada%20al%20oporto.jpeg' },
      { name: 'Costilla al Horno', path: '/images/Fotosweb/carnes/Costillaalhorno.jpeg' },
      { name: 'Hígado con Cebolla', path: '/images/Fotosweb/carnes/Higadoconcebolla.jpeg' },
      { name: 'Costillas a la Miel y Mostaza', path: '/images/Fotosweb/carnes/Costillas%20miel%20y%20mostaza.jpeg' },
      { name: 'Albóndigas con Tomate', path: '/images/Fotosweb/carnes/albóndigas%20con%20tomate.jpg' },
      { name: 'Costillas a la Miel y Mostaza', path: '/images/Fotosweb/carnes/costillas%20a%20la%20miel%20y%20mostaza_.jpg' },
      { name: 'Manitas de Cerdo', path: '/images/Fotosweb/carnes/manitas%20de%20cerdo_.jpg' }
    ],
    'Pescados': [
      { name: 'Calamares a la Romana', path: '/images/Fotosweb/Pescados/Calamares%20a%20la%20romana.jpeg' },
      { name: 'Encocado de Marisco', path: '/images/Fotosweb/Pescados/Encocadodemarisco.jpeg' },
      { name: 'Encocado de Marisco', path: '/images/Fotosweb/Pescados/Encocadomarisco2.jpeg' },
      { name: 'Merluza al Horno con Setas', path: '/images/Fotosweb/Pescados/Merluzaalhornoconsetas.jpeg' },
      { name: 'Merluza al Papillote', path: '/images/Fotosweb/Pescados/Merluzaalpaillote.jpeg' }
    ],
    'Guarnicion': [
      { name: 'Taconera de Cerdo', path: '/images/Fotosweb/Guarnicion/taconera%20de%20cerdo.jpg' }
    ],
    'Postres': [
      { name: 'Porción de Tarta de Queso', path: '/images/Fotosweb/Postres/Porciontartadequeso.jpeg' },
      { name: 'Tarta de Queso y Mango', path: '/images/Fotosweb/Postres/Tartaquesoymango.jpeg' },
      { name: 'Tarta KitKat', path: '/images/Fotosweb/Postres/TartaKItKat.jpeg' },
      { name: 'Tarta de Pistacho', path: '/images/Fotosweb/Postres/Tartapistacho.jpeg' },
      { name: 'Tarta Tres Chocolates', path: '/images/Fotosweb/Postres/Tartatrescholates.jpeg' }
    ]
  };

  // Explicitly type the orderedMenu array
  const orderedMenu: MenuCategory[] = [
    'Entrantes',
    'Arroces y fidegua',
    'De cuchara',
    'Sopas y cremas',
    'Carnes',
    'Pescados',
    'Guarnicion',
    'Postres',
  ];

  return (
    <div className="min-h-screen w-full">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 dark-text-stone-100 mb-12 text-center">
            Nuestra Cocina, en Tu Mesa
          </h1>

          {orderedMenu.map((category) => (
            <section key={category} className="mb-12">
              <h2 className="text-3xl font-bold text-stone-800 dark-text-stone-200 mb-6">
                {category}
              </h2>
              <div className="flex overflow-x-auto p-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-4">
                <div className="flex flex-nowrap gap-6 px-4">
                  {/* Explicitly type the map parameters */}
                  {menu[category].map((dish: Dish, index: number) => (
                    <div key={index} className="w-64 flex-shrink-0 group">
                      <div className="flex flex-col gap-3">
                        <div
                           className="w-full aspect-square rounded-lg bg-cover bg-center overflow-hidden transform group-hover:scale-105 transition-transform duration-300 shadow.md"
                           style={{
                             backgroundImage: `url("${dish.path}")`,
                           }}
                        ></div>
                        <div>
                          <h3 className="font-medium text-stone-900 dark-text-stone-100 text-lg">{dish.name}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}

          <div className="mt-12 p-4 rounded-lg bg-primary/10 dark-bg-primary/20 text-center">
            <p className="text-sm text-stone-700 dark-text-stone-300">
              Nota: Los precios pueden variar según la disponibilidad de ingredientes frescos.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenuPage;
