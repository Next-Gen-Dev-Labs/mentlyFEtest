import { render, screen, fireEvent } from '@testing-library/react';
import UsersSection from '@/components/dashboard/users-section';

describe('UsersSection', () => {
  it('renders users chart with correct total', () => {
    render(<UsersSection />);
    
    expect(screen.getByText('240')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
  });

  it('renders all user categories', () => {
    render(<UsersSection />);
    
    expect(screen.getByText('Students')).toBeInTheDocument();
    expect(screen.getByText('Mentors')).toBeInTheDocument();
    expect(screen.getByText('Programs')).toBeInTheDocument();
    expect(screen.getByText('Others')).toBeInTheDocument();
  });

  it('shows correct user counts for each category', () => {
    render(<UsersSection />);
    
    expect(screen.getByText('(200)')).toBeInTheDocument();
    expect(screen.getByText('(8)')).toBeInTheDocument();
    expect(screen.getByText('(22)')).toBeInTheDocument();
    expect(screen.getByText('(10)')).toBeInTheDocument();
  });
});