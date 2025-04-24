import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from '../component/Sidebar';
import { usePathname } from 'next/navigation';

// Mock dependencies
jest.mock('next/navigation', () => ({
  usePathname: jest.fn().mockReturnValue('/dashboard'),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} alt={props.alt} />,
}));

jest.mock('@/context/SidebarContext', () => ({
  useSidebar: jest.fn().mockReturnValue({
    isSidebarOpen: true,
    toggleSidebar: jest.fn(),
  }),
}));

describe('Sidebar Component', () => {
  beforeEach(() => {
    // Mock document methods for dark mode
    document.documentElement.classList.contains = jest.fn().mockReturnValue(false);
    document.documentElement.classList.toggle = jest.fn();
  });

  test('renders essential sidebar elements', () => {
    render(<Sidebar />);
    
    expect(screen.getByAltText('Techrity logo')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    
    // Check if help section is rendered
    expect(screen.getByText(/Got some questions/i)).toBeInTheDocument();
  });

  test('highlights active menu item', () => {
    render(<Sidebar />);
    
    const dashboardLink = screen.getByText('Dashboard').closest('a');
    expect(dashboardLink).toHaveClass('bg-white');
    expect(dashboardLink).toHaveClass('text-purple-700');
  });

  test('toggles dark mode when switch is clicked', () => {
    render(<Sidebar />);
    
    // Find and click the dark mode toggle
    const darkModeToggle = screen.getByRole('button', { name: /toggle dark mode/i });
    fireEvent.click(darkModeToggle);
    
    expect(document.documentElement.classList.toggle).toHaveBeenCalledWith('dark', true);
  });
});
