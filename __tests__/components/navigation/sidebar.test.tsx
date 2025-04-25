import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '@/components/navigation/sidebar';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Sidebar', () => {
  const mockOnToggle = jest.fn();

  it('renders logo when not collapsed', () => {
    render(<Sidebar collapsed={false} onToggle={mockOnToggle} />);
    expect(screen.getByText('techrity')).toBeInTheDocument();
  });

  it('hides logo when collapsed', () => {
    render(<Sidebar collapsed={true} onToggle={mockOnToggle} />);
    expect(screen.queryByText('techrity')).not.toBeInTheDocument();
  });

  it('renders all navigation items', () => {
    render(<Sidebar collapsed={false} onToggle={mockOnToggle} />);
    
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Programs')).toBeInTheDocument();
    expect(screen.getByText('Activities')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
  });

  it('handles toggle click', () => {
    render(<Sidebar collapsed={false} onToggle={mockOnToggle} />);
    
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    
    expect(mockOnToggle).toHaveBeenCalled();
  });

  it('renders help section', () => {
    render(<Sidebar collapsed={false} onToggle={mockOnToggle} />);
    
    expect(screen.getByText('Got some questions, enquiries or feedback?')).toBeInTheDocument();
    expect(screen.getByText('Talk directly with Diane Mary')).toBeInTheDocument();
  });
});