
import React from 'react';

const Desserts: React.FC = () => (
  <main className="container mx-auto flex-1 px-4 py-12 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-5xl">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-[#333333] dark:text-background-light sm:text-6xl">
          Postres caseros
        </h1>
        <p className="mt-4 text-xl text-[#666666] dark:text-gray-400">
          Elaborados con amor, desde nuestra cocina a tu mesa.
        </p>
      </div>
      <section className="mb-16">
        <h2 className="mb-8 border-b-2 border-primary/20 pb-4 text-3xl font-bold text-[#333333] dark:text-background-light">
          <span className="text-primary">★</span> Nuestra estrella
        </h2>
        <div className="group overflow-hidden rounded-xl bg-background-light shadow-lg transition-shadow duration-300 hover:shadow-2xl dark:bg-background-dark/50">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div
              className="h-64 w-full bg-cover bg-center md:h-full"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3r0vumF-sv3JP3BDB-lSlPEqGXWVoORTfngS9b8hGUFTZzRGjru8Axmmc6Hzxo0hzBtF8KYj1RfVE0kmdSTzjLduiRJhpdkhlf5TaLcb0L2cX8hJ4IHV3-aclQ09pYYtCeYXNy7P_BXZW2FmYRI2y45RbSGBGJC7dG6uSJunqmgNB4ikIDtdT257gu41zMEC2saoXLgpFaXjsPodJaM3M-42Ye-OwJMWV_1OABVGH3dFI4QftigKaRuj04ssIWFmHlIZ8eRelW7o")',
              }}
            ></div>
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-3xl font-bold tracking-tight text-[#333333] dark:text-background-light">
                Tarta de queso casera
              </h3>
              <p className="mt-2 text-lg font-medium text-primary">Un favorito de siempre</p>
              <p className="mt-4 text-base text-[#666666] dark:text-gray-400">
                Nuestro postre estrella, elaborado a diario con un relleno cremoso y rico y una base de galleta graham mantecosa. Un dulce clásico que seguro que te satisface y te deja con ganas de más.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-16">
        <h2 className="mb-8 border-b-2 border-primary/20 pb-4 text-3xl font-bold text-[#333333] dark:text-background-light">
          Más dulces
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:gap-8">
          <div className="group flex flex-col gap-4 overflow-hidden rounded-lg bg-background-light shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-background-dark/50">
            <div
              className="aspect-square w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("/images/Fotosweb/Postres/Tarta%20de%20queso.jpeg")',
              }}
            ></div>
            <h3 className="px-4 pb-4 text-center text-lg font-semibold text-[#333333] dark:text-background-light">
              Tarta de Queso
            </h3>
          </div>
          <div className="group flex flex-col gap-4 overflow-hidden rounded-lg bg-background-light shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-background-dark/50">
            <div
              className="aspect-square w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("/images/Fotosweb/Postres/TartaKItKat.jpeg")',
              }}
            ></div>
            <h3 className="px-4 pb-4 text-center text-lg font-semibold text-[#333333] dark:text-background-light">
              Tarta KitKat
            </h3>
          </div>
          <div className="group flex flex-col gap-4 overflow-hidden rounded-lg bg-background-light shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-background-dark/50">
            <div
              className="aspect-square w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("/images/Fotosweb/Postres/Tartapistacho.jpeg")',
              }}
            ></div>
            <h3 className="px-4 pb-4 text-center text-lg font-semibold text-[#333333] dark:text-background-light">
              Tarta de Pistacho
            </h3>
          </div>
          <div className="group flex flex-col gap-4 overflow-hidden rounded-lg bg-background-light shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-background-dark/50">
            <div
              className="aspect-square w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("/images/Fotosweb/Postres/Tartatrescholates.jpeg")',
              }}
            ></div>
            <h3 className="px-4 pb-4 text-center text-lg font-semibold text-[#333333] dark:text-background-light">
              Tarta Tres Chocolates
            </h3>
          </div>
        </div>
      </section>
      <section>
        <div
          className="relative flex min-h-[350px] flex-col items-center justify-center overflow-hidden rounded-xl bg-cover bg-center p-8 text-center"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDguRTSnpcg3NmzkiDiGzc8HlaZjxXiw5yyMRAHPhkmnuJ3qqMXRfmNufKK3E4vgKjUL1jaZfEcHebEsIklpRtqk6SY6dwieJmAlNURDqsMWA6ZF__wj-UiEkZy_oCIcMs_roqnvftidITJ5guMzD-rdtn16gULIl9IDmezjRU7yEQcw6J8K-RZw4x6nB2QtOdu0lyP02DW2gsadPbWAQ4PVK3-Lj8ByAvYe2EvLUxHPQ74SBt_NqxPaeNTBss1lN8-xBJ0hElfWOg")',
          }}
        >
          <h2 className="text-shadow text-4xl font-extrabold text-white sm:text-5xl">Tartas de cumpleaños por encargo</h2>
          <p className="text-shadow mt-4 max-w-2xl text-lg text-white">
            Celebra tu día especial con una tarta a medida. Elige los sabores, rellenos y adornos para crear el centro de mesa perfecto para tu celebración.
          </p>
          <button className="mt-8 min-w-[160px] max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95">
            <span className="truncate">Encargar una tarta</span>
          </button>
        </div>
      </section>
    </div>
  </main>
);

export default Desserts;
