import { render, screen } from '@testing-library/react';
import ActivitiesSection from '@/components/dashboard/activities-section';

describe('ActivitiesSection', () => {
  it('renders section title', () => {
    render(<ActivitiesSection />);
    expect(screen.getByText('Recent Activities')).toBeInTheDocument();
  });

  it('renders all activities', () => {
    render(<ActivitiesSection />);
    
    expect(screen.getByText('KYC Verification')).toBeInTheDocument();
    expect(screen.getByText('New User Sign Up!')).toBeInTheDocument();
    expect(screen.getByText('Withdrawal Request')).toBeInTheDocument();
  });

  it('displays activity timestamps', () => {
    render(<ActivitiesSection />);
    
    expect(screen.getByText('25 minutes ago')).toBeInTheDocument();
    expect(screen.getByText('35 minutes ago')).toBeInTheDocument();
    expect(screen.getByText('40 minutes ago')).toBeInTheDocument();
  });

  it('renders see all button', () => {
    render(<ActivitiesSection />);
    expect(screen.getByText('See all')).toBeInTheDocument();
  });
});