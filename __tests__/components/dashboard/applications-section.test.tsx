import { render, screen } from '@testing-library/react';
import ApplicationsSection from '@/components/dashboard/applications-section';

describe('ApplicationsSection', () => {
  it('renders section title', () => {
    render(<ApplicationsSection />);
    expect(screen.getByText('Applications')).toBeInTheDocument();
  });

  it('renders all applications', () => {
    render(<ApplicationsSection />);
    
    expect(screen.getByText('Victor Okoye')).toBeInTheDocument();
    expect(screen.getByText('Adeoye Samuel')).toBeInTheDocument();
  });

  it('displays applicant roles', () => {
    render(<ApplicationsSection />);
    
    expect(screen.getByText('Developer')).toBeInTheDocument();
    expect(screen.getByText('Product Designer')).toBeInTheDocument();
  });

  it('renders action buttons for each application', () => {
    render(<ApplicationsSection />);
    
    const rejectButtons = screen.getAllByText('Reject');
    const acceptButtons = screen.getAllByText('Accept');
    
    expect(rejectButtons).toHaveLength(2);
    expect(acceptButtons).toHaveLength(2);
  });
});