
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-primary/20 dark:border-primary/30">
      <div className="mx-auto max-w-7xl px-4 py-10 text-center sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-stone-500 dark:text-stone-400">
          <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#">
            Contáctenos
          </a>
          <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#">
            Política de privacidad
          </a>
          <a className="hover:text-primary dark:hover:text-primary transition-colors" href="#">
            Términos de servicio
          </a>
        </div>
        <p className="mt-6 text-sm text-stone-500 dark:text-stone-400">
          © 2023 The Corner Bistro. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
