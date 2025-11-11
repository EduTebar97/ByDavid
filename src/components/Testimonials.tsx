
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
            Escuche a nuestros clientes satisfechos y su experiencia gastronómica.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-white dark:bg-stone-800/50 p-6 shadow-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  alt="Jane D."
                  className="h-12 w-12 rounded-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOhfi0zWMGH2i0DD7xsE5iLqjV5Y0WOTHF44QiHMitWRJ-PBlGEkf0QcENbN3JJAKvkw7NHG3Wrw_x-2jBQs-bc2eW9ZGtDt5TzFuvraAvPYG-aNdb0dcJUejY0dpZqzfwZVha5bTxlFC3GY51QwxaQOmGPh7I5nbbAfMpiayM4g8zvKYQpyamOdQOeUu7MJrR6xk60DqHBY9X_eUnTcwfiK2Ep6-et5ys0U7P0rnKb98UsJtBFw0Nhk8fSBJsDk8h3SO-IhDikWA"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-stone-900 dark:text-stone-100">Jane D.</h3>
                <div className="flex items-center text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <blockquote className="mt-4 text-stone-600 dark:text-stone-400">
              "¡La comida estuvo absolutamente deliciosa! Un verdadero sabor a hogar. El ambiente es muy acogedor y agradable. ¡Definitivamente regresaré!"
            </blockquote>
          </div>
          <div className="rounded-xl bg-white dark:bg-stone-800/50 p-6 shadow-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  alt="Mark S."
                  className="h-12 w-12 rounded-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkl1q5Enre4G12574aDU3IzPcnbqXTYuzkgq_Y2bWP95bHfAB_FyvIFbZ8q0_a8g4HksoPtCxYHHnXj-RVz7vZX3WGnyzxz1G4xGa6KmpGx5ZiATgrD8Ay4J5iLfvHwwOBm7Hwy4Oj44VoLRLz8X1toaLFRm5LWMWA-o5Ve63vuAVGQZmPHAN4ZyT5VfRxxuLVo1b9eRyOnFZWo1Sx0-mWvd7UzEVO2wjMdk0l_y-xKFKqjSwY6QFbcjGMZOF-ssy8KdA1NS9lEHg"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-stone-900 dark:text-stone-100">Mark S.</h3>
                <div className="flex items-center text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <blockquote className="mt-4 text-stone-600 dark:text-stone-400">
              "¡La tarta de queso es algo que debes probar! La mejor que he probado. Excelente servicio y un lugar maravilloso para una cena familiar."
            </blockquote>
          </div>
          <div className="rounded-xl bg-white dark:bg-stone-800/50 p-6 shadow-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  alt="Emily R."
                  className="h-12 w-12 rounded-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdEMH_3EpYJwjGre99YYteoXSucWJKXtGJ7aiG0Atv3UMHGMMeaBJb7JV9Ri-34imuU-yYYCp8141n8nnIZLZRFf1ZSfOxl2E2spHvEw25EMlnKsRAj3jQWmhtZDyWuCOaILV9P80tDsKnkc924d6Xkvdxxb714GieMsK_06D3bAr1RZsza1nswrlBQUh4apCqdkhbeXKcrgrwpfM_U7DAaUYO5aXLO6vLS2BBNKYeThlrLTUPKTf8KLnptNzL1Ffxx_PIXrdGePs"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-stone-900 dark:text-stone-100">Emily R.</h3>
                <div className="flex items-center text-primary">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <svg
                    className="h-5 w-5 text-stone-300 dark:text-stone-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <blockquote className="mt-4 text-stone-600 dark:text-stone-400">
              "¡Una joya escondida! El Rincón del Bistro tiene un menú fantástico con algo para todos. El personal es amable y atento."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
