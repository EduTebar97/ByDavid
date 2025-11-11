
import React from 'react';

const Reservations: React.FC = () => (
  <main className="container mx-auto px-6 py-12">
    <div className="relative min-h-[400px] flex items-end justify-start rounded-xl overflow-hidden mb-12">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBg0b8VgxQhvdEmKhJHwrS4dbvJOmrL-_OpZIwipO_80g5tgCoQInFHullZyhCAf8bKCs478hPIqU1-wdJiNniuZ_Q-Cz4BzoDtkUCHBaBCGgTxXm9-UqYBqIwnquFFmOr1WzbXWowd0sEWXy6w358R5qM7-L6TGWMxnt8m3LtDlSbXNy0k8vGquOUxDTjSajMBzvJIoZh5W1mrMJ5e0mXbKTF2reUFTKeMfMGqFbf42Njwn-6HpdqHZ1IovdlMN0Ezs774g4dte1U")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      <div className="relative p-8">
        <h1 className="text-5xl font-extrabold text-white text-shadow">Arroces y Paellas de Especialidad</h1>
      </div>
    </div>
    <div className="max-w-3xl mx-auto text-center mb-12">
      <p className="text-lg text-neutral-700 dark:text-neutral-300">
        En El Rincón del Sabor, nuestro amor por el arroz es el corazón de nuestras creaciones culinarias. Usamos solo los mejores
        ingredientes para elaborar cada plato, asegurando una experiencia gastronómica memorable. Nuestras paellas son un testimonio de nuestro
        compromiso con la calidad y la tradición.
      </p>
    </div>
    <div className="bg-primary/10 dark:bg-primary/20 p-8 rounded-xl mb-12 flex flex-col md:flex-row items-center gap-6 border-l-4 border-primary">
      <span className="material-symbols-outlined text-primary text-5xl">info</span>
      <div>
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">Aviso Importante</h2>
        <p className="text-neutral-700 dark:text-neutral-300">
          Tenga en cuenta que todos los pedidos de paella requieren un <strong>aviso previo de 24 horas</strong> para garantizar la preparación más fresca
          y la disponibilidad. Agradecemos su comprensión y esperamos poder servirle.
        </p>
      </div>
    </div>
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-neutral-900 dark:text-neutral-100">Nuestros Arroces</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-background-light dark:bg-background-dark/50 rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
          <div
            className="w-full h-48 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("/images/Fotosweb/Arroces%20y%20fidegua/ArrozNegro.jpeg")',
            }}
          ></div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">Arroz Negro</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              Una paella clásica con una variedad de mariscos frescos.
            </p>
          </div>
        </div>
        <div className="bg-background-light dark:bg-background-dark/50 rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
          <div
            className="w-full h-48 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("/images/Fotosweb/Arroces%20y%20fidegua/Secretoyajitostiernos.jpeg")',
            }}
          ></div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">Secreto y Ajitos Tiernos</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              Una paella contundente con pollo tierno y chorizo picante.
            </p>
          </div>
        </div>
        <div className="bg-background-light dark:bg-background-dark/50 rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
          <div
            className="w-full h-48 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("/images/Fotosweb/Arroces%20y%20fidegua/arroz%20de%20secreto%20setas%20y%20ajos%20tiernos_.jpg")',
            }}
          ></div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">Arroz de Secreto, Setas y Ajos Ttiernos</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              Una sabrosa paella con una mezcla de verduras de temporada.
            </p>
          </div>
        </div>
        <div className="bg-background-light dark:bg-background-dark/50 rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
          <div
            className="w-full h-48 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("/images/Fotosweb/Arroces%20y%20fidegua/Fideua.jpeg")',
            }}
          ></div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">Fideuá</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              Una combinación de mariscos, pollo y verduras.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-background-light dark:bg-background-dark/50 rounded-xl p-10 text-center">
      <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">Pedidos para Grupos y Catering</h2>
      <p className="max-w-2xl mx-auto text-neutral-700 dark:text-neutral-300 mb-8">
        ¿Está planeando una reunión grande? Ofrecemos precios especiales y opciones personalizadas para pedidos de grupos. Por favor, llámenos para discutir sus necesidades y hacer su pedido.
      </p>
      <button className="bg-primary text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/40">
        <span className="material-symbols-outlined align-middle mr-2">call</span>
        Llamar para Pedidos Grandes
      </button>
    </div>
  </main>
);

export default Reservations;
