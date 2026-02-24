import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'bordered';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

const variantStyles = {
  default: 'bg-white shadow-md',
  elevated: 'bg-white shadow-lg shadow-gray-200/50',
  bordered: 'bg-white border-2 border-gray-200',
};

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export default function Card({
  children,
  variant = 'default',
  hover = true,
  padding = 'md',
  className = '',
  ...props
}: CardProps) {
  const baseStyles = 'rounded-lg transition-all duration-300';

  const hoverStyles = hover
    ? 'hover:shadow-xl hover:shadow-gray-300/50 hover:-translate-y-1 cursor-pointer'
    : '';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyles} ${className}`;

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
}
