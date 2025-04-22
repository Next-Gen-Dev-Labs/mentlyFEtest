import { useState } from 'react';

export default function ClassicModeSwitch() {
  const [isEnabled, setIsEnabled] = useState(false);
  
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };
  
  return (
    <div className="px-4 flex items-center justify-between rounded-md">
      <span className="text-white font-medium text-sm">Switch to Classic Mode</span>
      
      <button 
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${isEnabled ? 'bg-white' : 'bg-gray-200 bg-opacity-30'}`}
        onClick={toggleSwitch}
        aria-checked={isEnabled}
        role="switch"
      >
        <span 
          className={`inline-block h-4 w-4 transform rounded-full transition-transform ${isEnabled ? 'translate-x-6 bg-purple-900' : 'translate-x-1 bg-white'}`}
        />
      </button>
    </div>
  );
}