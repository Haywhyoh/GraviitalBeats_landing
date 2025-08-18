
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'gradient';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'default', 
  className,
  ...props 
}) => {
  return (
    <button
      className={cn(
        "px-6 lg:px-6 py-3 font-medium  rounded-md transition-all duration-200 flex items-center justify-center gap-2",
        variant === 'default' && "bg-graviital-purple text-white hover:bg-graviital-purple/90",
        variant === 'outline' && "border border-graviital-purple-light text-graviital-purple-light hover:bg-graviital-purple-light/10",
        variant === 'gradient' && "bg-gradient-to-r from-graviital-blue via-graviital-purple-light to-graviital-accent text-white hover:shadow-lg hover:shadow-graviital-purple/20",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
