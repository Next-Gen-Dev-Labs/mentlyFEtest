import { render, screen, fireEvent } from '@testing-library/react';
import ProgramsSection from '@/components/dashboard/programs-section';

describe('ProgramsSection', () => {
  it('renders section title', () => {
    render(<ProgramsSection />);
    expect(screen.getByText('Programs')).toBeInTheDocument();
  });

  it('renders program cards', () => {
    render(<ProgramsSection />);
    
    expect(screen.getByText('Fundamentals of User Interface & Experience')).toBeInTheDocument();
    expect(screen.getByText('Colour Magic Practical: Neon Chill')).toBeInTheDocument();
  });

  it('displays program tags', () => {
    render(<ProgramsSection />);
    
    expect(screen.getByText('Featured')).toBeInTheDocument();
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('renders filter and tab buttons', () => {
    render(<ProgramsSection />);
    
    expect(screen.getByText('Filter')).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'All' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Active' })).toBeInTheDocument();
  });

  it('handles tab changes', () => {
    render(<ProgramsSection />);
    
    const activeTab = screen.getByRole('tab', { name: 'Active' });
    fireEvent.click(activeTab);
    
    expect(activeTab).toHaveAttribute('aria-selected', 'true');
  });

  it('renders program actions', () => {
    render(<ProgramsSection />);
    
    const viewDetailsButtons = screen.getAllByText('View Details');
    const enrollButtons = screen.getAllByText('Enroll');
    
    expect(viewDetailsButtons).toHaveLength(2);
    expect(enrollButtons).toHaveLength(2);
  });
});