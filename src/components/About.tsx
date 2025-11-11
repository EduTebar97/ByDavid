
import React from 'react';
import Button from './Button';

const About: React.FC = () => {
  return (
    <section className="grid grid-cols-1 items-center gap-8 rounded-xl bg-primary/5 dark:bg-primary/10 p-8 md:grid-cols-2 md:gap-16">
      <div className="flex flex-col items-start gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
          Sobre Nosotros
        </h2>
        <p className="text-stone-700 dark:text-stone-300">
          The Corner Bistro es un restaurante familiar dedicado a servir comida casera con amor. Nuestra chef, Sarah,
          aporta años de experiencia y pasión a cada plato.
        </p>
        <Button to="/about">
          Aprende más
        </Button>
      </div>
      <div className="flex flex-col gap-3">
        <div
          className="aspect-video w-full rounded-xl bg-cover bg-center shadow-md"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwjb_Fx-O9AqG0xaFPUCyU1lbK4WYfja-9Y4nuRS_rVQcqS-19OKO7d5yx7A7TDWX34zKg27DRPKf4H12sLICvDXdX32UyoXVJ2RXg-4VCnE6dWoUHpzfYm8-WQFR36n8hTgXmaaxcxQ2PsQix278f-cttViUglWItUrCHpUMixMT2a6C8lc9osp-7kTmqPGikElYcKZOVepFvUouZJOm0VyUaF4_H0D-FC-B2xFINBWMIPu1kKmueFZ7H3vycXhu4MHgO4MMHeFc")',
          }}
        ></div>
        <div>
          <h3 className="font-medium text-stone-900 dark:text-stone-100">Nuestra Historia</h3>
          <p className="text-sm text-stone-600 dark:text-stone-400">
            Conoce más sobre nuestra trayectoria y nuestro compromiso con la calidad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
