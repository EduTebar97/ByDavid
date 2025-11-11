
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ to, children, className }) => {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-lg bg-stone-900 px-5 py-3 text-base font-bold text-white shadow-md transition-transform hover:scale-105 dark:bg-stone-100 dark:text-stone-900 ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
