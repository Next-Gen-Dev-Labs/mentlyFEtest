import React from 'react';

interface TestComponentProps {
  message?: string;
}

export const TestComponent: React.FC<TestComponentProps> = ({ 
  message = 'Hello World' 
}) => {
  return (
    <div 
      data-testid="test-component"
      role="region"
      aria-label="Test dashboard"
    >
      {message}
    </div>
  );
};