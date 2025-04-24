import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SideBar from '@/components/layouts/sidebar';

// Mock all SVG imports
jest.mock('@/assets/icons/Frame 1171276268.svg', () => 'logo-path');
jest.mock('@/assets/icons/grid-4.svg', () => 'menu-path');
jest.mock('@/assets/icons/Icon (2).svg', () => 'dashboard-path');
// ... mock all other SVG imports similarly

// Mock the Switch component
jest.mock('../components/reusables/switch.js', () => ({
  __esModule: true,
  default: ({ isOn, handleToggle }) => (
    <button 
      data-testid="switch" 
      onClick={handleToggle}
      className={isOn ? 'on' : 'off'}
    >
      {isOn ? 'ON' : 'OFF'}
    </button>
  ),
}));

// Mock next/image properly
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, onClick, className, 'data-testid': testId }) => (
    <img 
      src={src} 
      alt={alt} 
      onClick={onClick}
      className={className}
      data-testid={testId || `image-${alt.toLowerCase().replace(/\s+/g, '-')}`}
    />
  ),
}));

describe('SideBar Component', () => {
  beforeEach(() => {
    render(<SideBar />);
  });

  it('renders mobile header correctly', () => {
    const mobileHeader = screen.getByTestId('mobile-header');
    expect(mobileHeader).toBeInTheDocument();
    expect(mobileHeader).toHaveClass('lg:hidden');
    expect(mobileHeader).toHaveStyle('box-shadow: 0px 2px 4px 0px #00000010');
  });

  it('toggles sidebar visibility when mobile menu icon is clicked', () => {
    const menuButton = screen.getByTestId('image-menu'); // Use mobile menu button
    const sidebar = screen.getByTestId('sidebar');
    
    // Sidebar should be hidden initially on mobile
    expect(sidebar).toHaveClass('-translate-x-full');
    
    fireEvent.click(menuButton);
    expect(sidebar).toHaveClass('translate-x-0');
    
    fireEvent.click(menuButton);
    expect(sidebar).toHaveClass('-translate-x-full');
  });

  it('renders all menu items correctly', () => {
    const menuItems = screen.getAllByTestId('menu-item');
    expect(menuItems.length).toBe(10);
    
    // Check first menu item (Dashboard) has active styling
    expect(menuItems[0]).toHaveClass('bg-white');
    expect(menuItems[0]).toHaveClass('text-[#340260]');
    expect(menuItems[0]).toHaveClass('rounded-lg');
  });

  it('renders responsive sidebar correctly', () => {
    const sidebar = screen.getByTestId('sidebar');
    
    // Should have responsive width classes
    expect(sidebar).toHaveClass('w-[240px]');
    expect(sidebar).toHaveClass('lg:w-[100px]');
    expect(sidebar).toHaveClass('xl:w-[240px]');
    
    // Should have responsive positioning
    expect(sidebar).toHaveClass('fixed');
    expect(sidebar).toHaveClass('lg:static');
  });

  it('renders help section and switch correctly', () => {
    expect(screen.getByText('Got some questions, enquiries or need help?')).toBeInTheDocument();
    expect(screen.getByText('Visit Mently Help Desk Here')).toBeInTheDocument();
    
    const switchButton = screen.getByTestId('switch');
    expect(switchButton).toBeInTheDocument();
    
    // Test switch toggle
    expect(switchButton).toHaveClass('off');
    fireEvent.click(switchButton);
    expect(switchButton).toHaveClass('on');
  });

  it('closes sidebar when clicking overlay on mobile', () => {
    // Open sidebar first
    const menuButton = screen.getByTestId('image-menu');
    fireEvent.click(menuButton);
    
    // Get the overlay by its test ID (add data-testid="sidebar-overlay" to your component)
    const overlay = screen.getByTestId('sidebar-overlay');
    const sidebar = screen.getByTestId('sidebar');
    
    fireEvent.click(overlay);
    expect(sidebar).toHaveClass('-translate-x-full');
  });
});