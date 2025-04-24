'use client '


interface CustomCheckboxProps {
    checked: boolean;
    onClick: () => void;
  }

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked,onClick }) => {



  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onClick}
        className="hidden"
      />
      <div
        className={`w-4 h-4 flex items-center justify-center border-2 rounded-sm cursor-pointer transition-all duration-300 ${
          checked ? 'bg-green-500 border-green-500' : 'border-gray-400'
        }`}
      >
        {checked && (
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        )}
      </div>
    </label>
  );
};

export default CustomCheckbox;
