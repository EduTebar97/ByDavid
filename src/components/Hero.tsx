
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-[480px] w-full flex-col justify-end overflow-hidden rounded-xl p-8 shadow-lg">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5X4X3eTY6tc75EGr2uevzp7ZaWDPO8f6_h3B_SdZ4nnOW61Opc4LPGA3Nzti7nmH7xfTLdgDuGZJfmUb_31tixnf2xbGdvguOTyR9IGp9fDfKZU31drGtXuOvlaHS-3a7OmfarcDCdxAyFkDPFRqr1lKv8ZDm0oXE2cIYPzJrBRL0wc70FZ83K7Al5UrJDf0VWgRhO42akCD8CncG8Y5T2bn-wFTUyWBnEIXxyYStj1Er6Q1n3b2rfYzYWGUXh7npw3kW5RH6Zkk")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10"></div>
      <div className="relative z-10 flex flex-col items-start gap-4 text-left text-white">
        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl">Bienvenidos al Rincón de los Sabores By David</h1>
        <p className="max-w-xl text-base font-normal">
          Experimenta el sabor de las comidas caseras en un ambiente acogedor y atractivo. Nuestro menú presenta platos clásicos elaborados con ingredientes frescos y locales.
        </p>
        <button className="inline-flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 py-3 text-base font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95">
          <span className="truncate">Ver Menú</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
