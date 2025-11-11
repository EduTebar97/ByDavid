
import React from 'react';

const Contact: React.FC = () => (
  <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100">Ponte en contacto</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          ¡Estamos aquí para ayudar con tus pedidos, responder preguntas y escuchar tus sugerencias!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Información de contacto</h3>
            <div className="space-y-6">
              <a className="flex items-center gap-4 group" href="tel:555-123-4567">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-200">Teléfono</p>
                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors">
                    (555) 123-4567
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-200">Dirección</p>
                  <p className="text-gray-600 dark:text-gray-400">123 Main Street, Anytown, USA</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg text-primary">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-200">Horario de apertura</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lun-Vie: 11 AM - 9 PM
                    <br />
                    Sáb-Dom: 10 AM - 10 PM
                  </p>
                </div>
              </div>
            </div>
            <a
              className="mt-8 flex w-full items-center justify-center gap-3 py-3 px-6 rounded-lg bg-green-500 text-white font-bold text-base shadow-md hover:bg-green-600 transition-all"
              href="#"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.75 13.96c.25.13.41.33.46.57.06.26.03.52-.08.75-.19.41-.51.73-.9.96-.39.23-.83.35-1.28.35-.54 0-1.07-.12-1.57-.35-.51-.23-.97-.54-1.38-.91-.42-.37-.78-.79-1.09-1.25-.31-.46-.54-.97-.7-1.51-.15-.55-.23-1.12-.23-1.71 0-.61.1-1.21.29-1.79.2-.58.48-1.12.83-1.61.35-.49.77-.91 1.25-1.26.48-.35 1.02-.62 1.59-.79.57-.17 1.17-.25 1.77-.25.25 0 .5-.02.73.04.24.05.47.13.68.25.21.12.4.28.54.48.14.2.23.43.26.69.02.26-.03.51-.13.74-.1.23-.26.43-.46.59l-.07.05c-.19.14-.4.22-.62.22-.2 0-.39-.06-.57-.17-.18-.11-.34-.26-.49-.43-.15-.17-.28-.36-.4-.57s-.21-.43-.28-.66c-.05-.16-.12-.3-.2-.41-.09-.11-.2-.2-.31-.25-.12-.05-.25-.07-.38-.07-.48 0-.93.15-1.32.42s-.71.65-.96 1.1c-.24.45-.37.95-.37 1.48 0 .44.09.87.27 1.28.18.41.44.78.75 1.1.32.32.68.58 1.09.78.41.2.85.32 1.3.36.45.04.88-.02 1.3-.16.42-.14.8-.36 1.12-.65.33-.29.57-.63.72-1.01.15-.38.2-.79.16-1.2l-.01-.13c-.05-.26-.04-.52.02-.77.06-.25.18-.48.35-.67l.2-.21.2-.2c.16-.16.36-.29.58-.37.22-.08.46-.11.7-.11.23 0 .45.03.66.1.21.07.41.17.59.3l.03.02zM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
              </svg>
              <span>Envíanos un mensaje por WhatsApp</span>
            </a>
          </div>
          <div className="bg-background-light dark:bg-background-dark rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div
              className="w-full h-64 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvcbaUL1E4uGEFHac-FB7D2ZvtvXoocdjcnZbGRjsf_djzdCeNO5Rajxth-c_CnTe6rhPDBVKCZU9ffbWBtalyK6nScJKHaxJG69DZ2uvSSIYWeqLVForzKnR0ZoPBU0zKXg4Jz2BZw5o2xEbqvkRxnQMOUaDCwDn9U6Wu2U1Bu57WTAoPyqJQT_RhHV6-t7-XcqBWQ72IOSSI80knKotb2TjhaB1KrRe0xN_N9huS2mL6oBDzQV5iHtCqUT57sOC-nYqdcDARFuY")',
              }}
            ></div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Formulario de contacto</h3>
            <form action="#" className="space-y-6" method="POST">
              <div>
                <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">
                  Nombre
                </label>
                <input
                  className="form-input block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark py-3 px-4 text-base placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:ring-primary"
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="phone">
                  Teléfono
                </label>
                <input
                  className="form-input block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark py-3 px-4 text-base placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:ring-primary"
                  id="phone"
                  name="phone"
                  placeholder="Tu teléfono"
                  type="tel"
                />
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
                  Correo electrónico
                </label>
                <input
                  className="form-input block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark py-3 px-4 text-base placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:ring-primary"
                  id="email"
                  name="email"
                  placeholder="Tu correo electrónico"
                  type="email"
                />
              </div>
              <div>
                <label
                  className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2"
                  htmlFor="message"
                >
                  Mensaje
                </label>
                <textarea
                  className="form-textarea block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark py-3 px-4 text-base placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:ring-primary"
                  id="message"
                  name="message"
                  placeholder="Tu mensaje"
                  rows={4}
                ></textarea>
              </div>
              <div>
                <button
                  className="inline-flex min-w-[180px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 py-3 text-base font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
          <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-xl border border-primary/20 dark:border-primary/30">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Buzón de sugerencias digital</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              ¿Tienes una idea para un nuevo plato? ¡Nos encantaría escucharla! Comparte tus creaciones culinarias con nosotros.
            </p>
            <form action="#" className="space-y-6" method="POST">
              <div>
                <label
                  className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2"
                  htmlFor="suggestion-name"
                >
                  Tu nombre
                </label>
                <input
                  className="form-input block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark py-3 px-4 text-base placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:ring-primary"
                  id="suggestion-name"
                  name="suggestion-name"
                  placeholder="Tu nombre"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2"
                  htmlFor="suggestion"
                >
                  Sugerencia
                </label>
                <textarea
                  className="form-textarea block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark py-3 px-4 text-base placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:ring-primary"
                  id="suggestion"
                  name="suggestion"
                  placeholder="Describe tu idea de plato"
                  rows={4}
                ></textarea>
              </div>
              <div>
                <button
                  className="inline-flex min-w-[180px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 py-3 text-base font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
                  type="submit"
                >
                  Enviar sugerencia
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Contact;
