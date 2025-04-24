import { render, screen, fireEvent } from '@testing-library/react';
import DashboardLayout from '../layout';
import { AppContextProvider } from '@/contexts/app-context';
import { SidebarProvider } from '@/components/ui/sidebar';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/dashboard',
}));

// Mock components
jest.mock('@/components/common/sidebar/app-sidebar', () => ({
  AppSidebar: () => <div data-testid="app-sidebar">Sidebar Content</div>
}));

describe('DashboardLayout', () => {
  const renderWithProviders = (children: React.ReactNode = 'Test Content') => {
    return render(
      <AppContextProvider>
        <SidebarProvider>
          <DashboardLayout>
            {children}
          </DashboardLayout>
        </SidebarProvider>
      </AppContextProvider>
    );
  };

  it('renders sidebar and main content', () => {
    renderWithProviders();
    
    expect(screen.getByTestId('app-sidebar')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('toggles sidebar visibility', () => {
    renderWithProviders();
    
    const trigger = screen.getByRole('button', { name: /toggle sidebar/i });
    const sidebar = screen.getByTestId('app-sidebar').parentElement;
    
    // Initial state
    expect(sidebar).toHaveAttribute('data-state', 'open');
    
    // Toggle sidebar
    fireEvent.click(trigger);
    expect(sidebar).toHaveAttribute('data-state', 'closed');
    
    // Toggle back
    fireEvent.click(trigger);
    expect(sidebar).toHaveAttribute('data-state', 'open');
  });

  it('maintains sidebar state across renders', () => {
    const { unmount } = renderWithProviders();
    
    const trigger = screen.getByRole('button', { name: /toggle sidebar/i });
    fireEvent.click(trigger);
    
    // Unmount and remount
    unmount();
    renderWithProviders();
    
    // Sidebar should maintain its closed state
    const sidebar = screen.getByTestId('app-sidebar').parentElement;
    expect(sidebar).toHaveAttribute('data-state', 'closed');
  });

  it('renders children within main content area', () => {
    const testContent = <div data-testid="test-child">Child Content</div>;
    renderWithProviders(testContent);
    
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('applies responsive layout classes', () => {
    renderWithProviders();
    
    const mainLayout = screen.getByRole('main');
    expect(mainLayout).toHaveClass('flex-1', 'space-y-4', 'p-8', 'pt-6');
  });
});