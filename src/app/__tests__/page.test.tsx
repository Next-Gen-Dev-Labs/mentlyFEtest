import { render, screen, waitFor } from '@testing-library/react';
import Home from '../page';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Mock the components
jest.mock('@/components/Sidebar', () => () => <div data-testid="sidebar">Sidebar</div>);
jest.mock('@/components/TopBar', () => () => <div data-testid="topbar">TopBar</div>);
jest.mock('@/components/WidgetArrangement', () => {
  return ({ onWidgetsChange }) => (
    <div data-testid="widget-arrangement">
      <button 
        data-testid="toggle-widget-visibility" 
        onClick={() => {
          onWidgetsChange(prev => 
            prev.map(widget => 
              widget.id === 'programs' 
                ? { ...widget, isVisible: !widget.isVisible } 
                : widget
            )
          );
        }}
      >
        Toggle Programs
      </button>
    </div>
  );
});
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

    // Check for widget components with a longer timeout for animations
    await waitFor(() => {
      expect(screen.getByTestId('programs-widget')).toBeInTheDocument();
      expect(screen.getByTestId('group-calls-widget')).toBeInTheDocument();
      expect(screen.getByTestId('applications-widget')).toBeInTheDocument();
      expect(screen.getByTestId('mentors-widget')).toBeInTheDocument();
      expect(screen.getByTestId('recent-activities-widget')).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it('applies animation classes to welcome banner', async () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <Home />
      </DndProvider>
    );

    const welcomeBannerContainer = screen.getByTestId('welcome-banner-container');
    expect(welcomeBannerContainer).toHaveClass('transition-opacity');
    expect(welcomeBannerContainer).toHaveClass('duration-500');
    
    // Initially should be invisible
    expect(welcomeBannerContainer.className).toContain('opacity-0');
    
    // After animation delay, should be visible
    await waitFor(() => {
      expect(welcomeBannerContainer.className).toContain('opacity-100');
    }, { timeout: 1000 });
  });

  it('applies responsive flex layout for adaptive design', async () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <Home />
      </DndProvider>
    );

    const mainGrid = screen.getByTestId('main-grid');
    expect(mainGrid).toHaveClass('flex');
    expect(mainGrid).toHaveClass('flex-col');
    expect(mainGrid).toHaveClass('lg:flex-row');
  });

  it('can toggle widget visibility', async () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <Home />
      </DndProvider>
    );

    // Initially the Programs widget should be visible
    await waitFor(() => {
      expect(screen.getByTestId('programs-widget')).toBeInTheDocument();
    }, { timeout: 1000 });

    // Toggle the widget visibility
    const toggleButton = screen.getByTestId('toggle-widget-visibility');
    toggleButton.click();

    // Wait for re-render and check the Programs widget is no longer visible
    await waitFor(() => {
      expect(screen.queryByTestId('programs-widget')).not.toBeInTheDocument();
    }, { timeout: 1000 });

    // Toggle it back on
    toggleButton.click();

    // Check it appears again
    await waitFor(() => {
      expect(screen.getByTestId('programs-widget')).toBeInTheDocument();
    }, { timeout: 1000 });
  });

  it('applies staggered animations to widgets', async () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <Home />
      </DndProvider>
    );

    // Check the main grid has animation styles
    const mainGrid = screen.getByTestId('main-grid');
    await waitFor(() => {
      expect(mainGrid.className).toContain('duration-700');
      expect(mainGrid.className).toContain('opacity-100');
      expect(mainGrid.className).toContain('translate-y-0');
    }, { timeout: 1000 });
  });
}); 