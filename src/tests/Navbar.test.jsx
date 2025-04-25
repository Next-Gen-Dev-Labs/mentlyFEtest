import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../component/Navbar';

// Mock the useSidebar hook
const mockToggleSidebar = jest.fn();

jest.mock('../context/SidebarContext', () => ({
  useSidebar: jest.fn().mockReturnValue({
    isSidebarOpen: false,
    toggleSidebar: mockToggleSidebar,
  }),
}));

describe('Navbar Component', () => {
  beforeEach(() => {
    mockToggleSidebar.mockClear();
  });

  test('renders navbar with logo and menu button', () => {
    render(<Navbar />);
    
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    
    // Check if the menu button is rendered
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('calls toggleSidebar when menu button is clicked', () => {
    render(<Navbar />);
    
    // Find and click the menu button
    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);
    
    // Check if toggleSidebar was called
    expect(mockToggleSidebar).toHaveBeenCalledTimes(1);
  });
});
