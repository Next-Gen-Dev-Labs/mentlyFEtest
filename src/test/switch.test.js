import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Switch from '@/components/reusables/switch';

describe('Switch Component', () => {
  const mockToggle = jest.fn();
  const props = {
    isOn: false,
    handleToggle: mockToggle,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly in off state', () => {
    render(<Switch {...props} />);
    
    const switchContainer = screen.getByRole('switch');
    expect(switchContainer).toBeInTheDocument();
    expect(switchContainer).toHaveClass('bg-gray-300');
    expect(switchContainer).toHaveClass('w-10');
    expect(switchContainer).toHaveClass('h-4');
    
    const switchThumb = switchContainer.firstChild;
    expect(switchThumb).toHaveClass('translate-x-0');
  });

  it('renders correctly in on state', () => {
    render(<Switch {...props} isOn={true} />);
    
    const switchContainer = screen.getByRole('switch');
    expect(switchContainer).toHaveClass('bg-blue-500');
    
    const switchThumb = switchContainer.firstChild;
    expect(switchThumb).toHaveClass('translate-x-6');
  });

  it('calls handleToggle when clicked', () => {
    render(<Switch {...props} />);
    
    const switchContainer = screen.getByRole('switch');
    fireEvent.click(switchContainer);
    
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });

  it('applies correct transition classes', () => {
    render(<Switch {...props} />);
    
    const switchContainer = screen.getByRole('switch');
    const switchThumb = switchContainer.firstChild;
    
    expect(switchContainer).toHaveClass('transition-colors');
    expect(switchContainer).toHaveClass('duration-300');
    expect(switchThumb).toHaveClass('transition-transform');
    expect(switchThumb).toHaveClass('duration-300');
  });

  it('has proper accessibility attributes', () => {
    const { rerender } = render(<Switch {...props} />);
    
    const switchContainer = screen.getByRole('switch');
    expect(switchContainer).toHaveAttribute('aria-checked', 'false');
    expect(switchContainer).toHaveAttribute('tabindex', '0');
    
    // Test with on state using rerender
    rerender(<Switch {...props} isOn={true} />);
    expect(switchContainer).toHaveAttribute('aria-checked', 'true');
  });

  it('matches snapshot in off state', () => {
    const { asFragment } = render(<Switch {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot in on state', () => {
    const { asFragment } = render(<Switch {...props} isOn={true} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('responds to keyboard events', () => {
    render(<Switch {...props} />);
    const switchContainer = screen.getByRole('switch');
    
    // Test space key
    fireEvent.keyDown(switchContainer, { key: ' ' });
    expect(mockToggle).toHaveBeenCalledTimes(1);
    
    // Test enter key
    fireEvent.keyDown(switchContainer, { key: 'Enter' });
    expect(mockToggle).toHaveBeenCalledTimes(2);
  });
});