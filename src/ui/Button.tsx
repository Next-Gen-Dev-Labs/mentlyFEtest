import React from "react";

interface ButtonProps {
  label: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type,
  disabled = false,
  loading = false,
  className = "",
  icon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`flex items-center shadow-xs transition-all duration-500 ease-in-out justify-center px-4 py-2 rounded-lg text-white bg-primary  font-semibold hover:bg-[#340260] disabled:bg-orange-100 ${
        !disabled ? "cursor-pointer " : ""
      } ${className}`}
    >
      {loading ? <span className="flex items-center">Loading...</span> : label}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
