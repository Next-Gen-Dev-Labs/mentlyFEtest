import { render, fireEvent, screen } from '@testing-library/react';
import { AppSidebar } from '../app-sidebar';
import { AppContextProvider } from '@/contexts/app-context';
import { SidebarProvider } from '@/components/ui/sidebar';

// Mock usePathname hook
jest.mock('next/navigation', () => ({
  usePathname: () => '/dashboard'
}));

// Mock components that aren't needed for these tests
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe('AppSidebar', () => {
  const renderWithProviders = (component: React.ReactNode) => {
    return render(
      <AppContextProvider>
        <SidebarProvider>
          {component}
        </SidebarProvider>
      </AppContextProvider>
    );
  };

  it('renders all navigation items', () => {
    renderWithProviders(<AppSidebar />);
    
    // Check if all main navigation items are rendered
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Programs')).toBeInTheDocument();
    expect(screen.getByText('Activities')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('Forums')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('highlights active route correctly', () => {
    renderWithProviders(<AppSidebar />);
    
    // Since we mocked usePathname to return '/dashboard'
    const dashboardLink = screen.getByText('Dashboard').closest('a');
    expect(dashboardLink).toHaveClass('bg-white');
    expect(dashboardLink).toHaveClass('text-[#1F0954]');
  });

  it('renders classic mode switch', () => {
    renderWithProviders(<AppSidebar />);
    
    expect(screen.getByText('Switch to Classic Mode')).toBeInTheDocument();
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('toggles classic mode when switch is clicked', () => {
    renderWithProviders(<AppSidebar />);
    
    const switchElement = screen.getByRole('switch');
    expect(switchElement).not.toBeChecked();
    
    fireEvent.click(switchElement);
    expect(switchElement).toBeChecked();
  });

  it('renders help desk section', () => {
    renderWithProviders(<AppSidebar />);
    
    expect(screen.getByText('Got some questions, enquiries or need help?')).toBeInTheDocument();
    expect(screen.getByText('Visit Mently Help Desk Here')).toBeInTheDocument();
  });
});