interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      {...props}
      className={`w-full px-8 py-3 bg-[#f8f6f3] rounded-full outline-none ${className}`}
    />
  );
};

export default Input; 