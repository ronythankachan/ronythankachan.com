import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  href, 
  onClick, 
  children, 
  variant = 'primary',
  className = ''
}) => {
  const baseStyles = "px-6 py-2 rounded-full transition-colors text-lg";
  const variants = {
    primary: "bg-[#fd976d] text-black hover:bg-[#fcd56b]",
    secondary: "bg-[#5dccf1] text-black hover:bg-[#4bb8dd]"
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
};

export default Button; 