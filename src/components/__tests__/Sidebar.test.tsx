import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '../Sidebar';

// Mock Next.js components
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />
  },
}));

describe('Sidebar Component', () => {
  beforeEach(() => {
    // Clear mocks
    jest.clearAllMocks();
    // Mock console.log
    jest.spyOn(console, 'log').mockImplementation();
  });

  it('renders the logo and all navigation items', () => {
    render(<Sidebar />);
    
    // Check for Techrity logo
    expect(screen.getByAltText('Techrity logo')).toBeInTheDocument();
    
    // Check if all navigation items are rendered
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Programs')).toBeInTheDocument();
    expect(screen.getByText('Activities')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('Forums')).toBeInTheDocument();
    expect(screen.getByText('Finances')).toBeInTheDocument();
    expect(screen.getByText('Rewards')).toBeInTheDocument();
    expect(screen.getByText('Analytics')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Log Out')).toBeInTheDocument();
  });

  it('shows "Coming Soon" badge on Analytics navigation item', () => {
    render(<Sidebar />);
    
    // Find the "Coming Soon" badge
    const comingSoonBadge = screen.getByText('Coming Soon');
    expect(comingSoonBadge).toBeInTheDocument();
    
    // Check if it's on the Analytics menu item
    const analyticsItem = screen.getByText('Analytics');
    expect(analyticsItem.parentElement).toContainElement(comingSoonBadge);
  });

  it('renders help section with correct text', () => {
    render(<Sidebar />);
    
    // Check for help text
    expect(screen.getByText('Got some questions, enquiries or need help?')).toBeInTheDocument();
    
    // Check for help desk link
    expect(screen.getByText('Visit')).toBeInTheDocument();
    expect(screen.getByText('Mighty Help Desk')).toBeInTheDocument();
    expect(screen.getByText('here!')).toBeInTheDocument();
  });

  it('has a toggle for Classic Mode', () => {
    render(<Sidebar />);
    
    // Check for classic mode toggle text
    expect(screen.getByText('Switch to Classic Mode')).toBeInTheDocument();
    
    // Check for toggle button
    const toggleButton = screen.getByRole('switch');
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute('aria-checked', 'false');
  });

  it('logs navigation when a nav item is clicked', () => {
    render(<Sidebar />);
    
    // Click on Programs menu item
    fireEvent.click(screen.getByText('Programs'));
    
    // Check if console.log was called with the navigation message
    expect(console.log).toHaveBeenCalledWith('Navigating to Programs');
  });

  it('handles classic mode toggle click', () => {
    render(<Sidebar />);
    
    // Click on the toggle button
    const toggleButton = screen.getByRole('switch');
    fireEvent.click(toggleButton);
    
    // Check if console.log was called with the toggle message
    expect(console.log).toHaveBeenCalledWith('Toggle classic mode');
  });

  it('has proper accessibility attributes for navigation', () => {
    render(<Sidebar />);
    
    // Check if the nav element has proper role and label
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Main Navigation');
    
    // Dashboard should be marked as current by default
    const dashboardLink = screen.getByText('Dashboard').closest('a');
    expect(dashboardLink).toHaveAttribute('aria-current', 'page');
    
    // Other items should not have aria-current
    const programsLink = screen.getByText('Programs').closest('a');
    expect(programsLink).not.toHaveAttribute('aria-current');
  });

  it('changes active item when a nav item is clicked', () => {
    render(<Sidebar />);
    
    // Dashboard should be active by default
    expect(screen.getByText('Dashboard').closest('a')).toHaveAttribute('aria-current', 'page');
    
    // Click on Settings menu item
    fireEvent.click(screen.getByText('Settings'));
    
    // Now Settings should be active
    expect(screen.getByText('Settings').closest('a')).toHaveAttribute('aria-current', 'page');
    
    // And Dashboard should no longer be active
    expect(screen.getByText('Dashboard').closest('a')).not.toHaveAttribute('aria-current', 'page');
  });
}); 