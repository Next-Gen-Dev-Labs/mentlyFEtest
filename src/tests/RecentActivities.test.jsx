import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecentActivities from '../component/RecentActivities';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} alt={props.alt} />,
}));

describe('RecentActivities Component', () => {
  test('renders component header correctly', () => {
    render(<RecentActivities />);
    
    expect(screen.getByText('Recent Activities')).toBeInTheDocument();
    expect(screen.getByText('See all')).toBeInTheDocument();
  });

  test('displays all activity types correctly', () => {
    render(<RecentActivities />);
    
    // Check if activity types are displayed
    expect(screen.getByText('KYC Verification')).toBeInTheDocument();
    expect(screen.getByText('New User Sign Up!')).toBeInTheDocument();
    expect(screen.getByText('Withdrawal Request')).toBeInTheDocument();
  });

  test('displays activity messages correctly', () => {
    render(<RecentActivities />);
    
    expect(screen.getByText('40 new persons just signed up on Mentify')).toBeInTheDocument();
    expect(screen.getByText('45 new persons just signed up on Mentify')).toBeInTheDocument();
    expect(screen.getByText('Kachi has requested a withdrawal')).toBeInTheDocument();
  });

  test('displays timestamp for all activities', () => {
    render(<RecentActivities />);
    
    const timestamps = screen.getAllByText('25 minutes ago');
    expect(timestamps).toHaveLength(3);
  });

  test('renders menu button', () => {
    render(<RecentActivities />);
    
    // Check if the ellipsis menu button is rendered
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(2); 
  });
});
