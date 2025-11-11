
import React from 'react';
import Button from './Button';

const Cheesecake: React.FC = () => {
  return (
    <section className="grid grid-cols-1 items-center gap-8 rounded-xl bg-primary/5 dark:bg-primary/10 p-8 md:grid-cols-2 md:gap-16">
      <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
          Nuestra Famosa Tarta de Queso
        </h2>
        <p className="text-stone-700 dark:text-stone-300">
          Disfrute de nuestro postre estrella, una cremosa tarta de queso con base de galleta graham y una gran variedad de ingredientes.
        </p>
        <div className="w-full flex justify-center md:justify-start">
          <Button to="/desserts">
            Ver Postres
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div
          className="aspect-video w-full rounded-xl bg-cover bg-center shadow-md"
          style={{
            backgroundImage:
              'url("https://picsum.photos/seed/cheesecake/600/400")',
          }}
        ></div>
        <div>
          <h3 className="font-medium text-stone-900 dark:text-stone-100">Tarta de queso clásica</h3>
          <p className="text-sm text-stone-600 dark:text-stone-400">
            Una rica y cremosa tarta de queso con una base de galleta graham clásica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cheesecake;
