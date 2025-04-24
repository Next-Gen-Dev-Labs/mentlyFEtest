import { render, screen, waitFor } from '@testing-library/react';
import Home from '../page';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Mock the components
jest.mock('@/components/Sidebar', () => () => <div data-testid="sidebar">Sidebar</div>);
jest.mock('@/components/TopBar', () => () => <div data-testid="topbar">TopBar</div>);
jest.mock('@/components/WidgetArrangement', () => () => <div data-testid="widget-arrangement">WidgetArrangement</div>);
jest.mock('@/components/WelcomeBanner', () => () => <div data-testid="welcome-banner">WelcomeBanner</div>);
jest.mock('@/components/widgets/ProgramsWidget', () => () => <div data-testid="programs-widget">ProgramsWidget</div>);
jest.mock('@/components/widgets/GroupCallsWidget', () => () => <div data-testid="group-calls-widget">GroupCallsWidget</div>);
jest.mock('@/components/widgets/UsersWidget', () => () => <div data-testid="users-widget">UsersWidget</div>);
jest.mock('@/components/widgets/ApplicationsWidget', () => () => <div data-testid="applications-widget">ApplicationsWidget</div>);
jest.mock('@/components/widgets/MentorsWidget', () => () => <div data-testid="mentors-widget">MentorsWidget</div>);
jest.mock('@/components/widgets/RecentActivitiesWidget', () => () => <div data-testid="recent-activities-widget">RecentActivitiesWidget</div>);

describe('Home Page', () => {
  it('renders all main components', async () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <Home />
      </DndProvider>
    );

    // Wait for the initial animation to complete
    await waitFor(() => {
      expect(screen.getByTestId('sidebar')).toBeInTheDocument();
      expect(screen.getByTestId('topbar')).toBeInTheDocument();
      expect(screen.getByTestId('widget-arrangement')).toBeInTheDocument();
      expect(screen.getByTestId('welcome-banner')).toBeInTheDocument();
    });

    // Check for widget components
    expect(screen.getByTestId('programs-widget')).toBeInTheDocument();
    expect(screen.getByTestId('group-calls-widget')).toBeInTheDocument();
    expect(screen.getByTestId('users-widget')).toBeInTheDocument();
    expect(screen.getByTestId('applications-widget')).toBeInTheDocument();
    expect(screen.getByTestId('mentors-widget')).toBeInTheDocument();
    expect(screen.getByTestId('recent-activities-widget')).toBeInTheDocument();
  });

  it('applies fade-in animation to welcome banner', async () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <Home />
      </DndProvider>
    );

    const welcomeBanner = screen.getByTestId('welcome-banner');
    expect(welcomeBanner).toHaveClass('transition-opacity');
    expect(welcomeBanner).toHaveClass('duration-500');
  });

  it('applies grid layout for responsive design', async () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <Home />
      </DndProvider>
    );

    const mainGrid = screen.getByTestId('main-grid');
    expect(mainGrid).toHaveClass('grid');
    expect(mainGrid).toHaveClass('grid-cols-1');
    expect(mainGrid).toHaveClass('lg:grid-cols-2');
  });
}); 