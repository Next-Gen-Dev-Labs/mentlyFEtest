import { render, screen, fireEvent } from '@testing-library/react';
import DashboardOverview from '../page';
import { AppContextProvider } from '@/contexts/app-context';
import { SidebarProvider } from '@/components/ui/sidebar';

// Mock all the components used in the dashboard
jest.mock('@/components/common/card/groupcall-cards', () => ({
  GroupCallCard: () => <div data-testid="group-call-card" />
}));

jest.mock('@/components/common/card/groupcall-cards-2', () => ({
  GroupCallCard2: () => <div data-testid="group-call-card-2" />
}));

jest.mock('@/components/common/chart/UserStatsDonutChart', () => ({
  __esModule: true,
  default: () => <div data-testid="donut-chart" />
}));

jest.mock('@/components/common/card/business-card', () => ({
  __esModule: true,
  default: () => <div data-testid="business-card" />
}));

jest.mock('@/components/common/notification/notification-1', () => ({
  __esModule: true,
  default: () => <div data-testid="notification" />
}));

jest.mock('@/components/common/card/mentor-card', () => ({
  __esModule: true,
  default: () => <div data-testid="mentor-card" />
}));

describe('DashboardOverview', () => {
  const renderWithProviders = () => {
    return render(
      <AppContextProvider>
        <SidebarProvider>
          <DashboardOverview />
        </SidebarProvider>
      </AppContextProvider>
    );
  };

  it('renders welcome message', () => {
    renderWithProviders();
    expect(screen.getByText(/Welcome Aboard, Blessing/)).toBeInTheDocument();
  });

  it('renders update profile button', () => {
    renderWithProviders();
    expect(screen.getByText('Update Profile')).toBeInTheDocument();
  });

  it('renders collapsible sections', () => {
    renderWithProviders();
    const sections = screen.getAllByText(/See All/);
    expect(sections.length).toBeGreaterThan(0);
  });

  it('renders filter dropdown', () => {
    renderWithProviders();
    expect(screen.getByText('Filter')).toBeInTheDocument();
    expect(screen.getByText('Pending')).toBeInTheDocument();
  });

  it('changes filter selection', () => {
    renderWithProviders();
    const filterButton = screen.getByText('Pending');
    fireEvent.click(filterButton);
    const activeOption = screen.getByText('Active');
    fireEvent.click(activeOption);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('renders all main components', () => {
    renderWithProviders();
    
    // Check for group call cards
    const groupCallCards = screen.getAllByTestId('group-call-card');
    const groupCallCards2 = screen.getAllByTestId('group-call-card-2');
    expect(groupCallCards.length).toBeGreaterThan(0);
    expect(groupCallCards2.length).toBeGreaterThan(0);

    // Check for donut chart
    expect(screen.getByTestId('donut-chart')).toBeInTheDocument();

    // Check for business cards
    const businessCards = screen.getAllByTestId('business-card');
    expect(businessCards.length).toBeGreaterThan(0);

    // Check for notifications
    const notifications = screen.getAllByTestId('notification');
    expect(notifications.length).toBeGreaterThan(0);

    // Check for mentor cards
    const mentorCards = screen.getAllByTestId('mentor-card');
    expect(mentorCards.length).toBeGreaterThan(0);
  });

  it('opens and closes popup menus', () => {
    renderWithProviders();
    const menuButtons = screen.getAllByRole('button', { name: /more vertical/i });
    fireEvent.click(menuButtons[0]);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    
    // Click outside to close
    fireEvent.click(document.body);
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });
});