// components/Button.tsx
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) => {
  const baseStyles = "font-medium rounded-lg focus:outline-none transition-all";
  const sizeStyles = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
  };
  const variantStyles = {
    primary:
      "bg-[#6F01D0] text-white hover:bg-[#6F01D0] focus:ring-2 focus:ring-blue-500",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
