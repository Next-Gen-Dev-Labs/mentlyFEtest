import { render, screen, fireEvent } from '@testing-library/react';
import GroupCallsWidget from '../GroupCallsWidget';

// Mock Next.js components
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />
  },
}));

jest.mock('next/link', ({ children, ...props }) => {
  return <a {...props}>{children}</a>;
});

// Mock scrollBy for scroll button tests
const scrollByMock = jest.fn();
Element.prototype.scrollBy = scrollByMock;

describe('GroupCallsWidget Component', () => {
  beforeEach(() => {
    // Clear mock function calls between tests
    scrollByMock.mockClear();
  });

  it('renders the widget with title and group call cards', () => {
    render(<GroupCallsWidget />);
    
    // Check for widget header
    expect(screen.getByText('Group Calls')).toBeInTheDocument();
    
    // Check for call cards - specifically the titles
    expect(screen.getByText('Weekly Meeting - Product Demo Review with Testers')).toBeInTheDocument();
    expect(screen.getByText('Design System Workshop - Component Library Review')).toBeInTheDocument();
    expect(screen.getByText('User Research Findings Presentation')).toBeInTheDocument();
  });

  it('displays call cards with correct status badges', () => {
    render(<GroupCallsWidget />);
    
    // Check for status badges
    expect(screen.getByText('Ongoing')).toBeInTheDocument();
    expect(screen.getAllByText('Upcoming').length).toBe(2);
  });

  it('displays date and time information', () => {
    render(<GroupCallsWidget />);
    
    // Check for date information
    expect(screen.getByText('Mon. Jul 30, 2024')).toBeInTheDocument();
    expect(screen.getByText('Wed. Aug 1, 2024')).toBeInTheDocument();
    expect(screen.getByText('Fri. Aug 3, 2024')).toBeInTheDocument();
    
    // Check for time information
    expect(screen.getByText('9:00-11:00 AM')).toBeInTheDocument();
    expect(screen.getByText('2:00-4:00 PM')).toBeInTheDocument();
    expect(screen.getByText('10:00-11:30 AM')).toBeInTheDocument();
  });

  it('shows study group information', () => {
    render(<GroupCallsWidget />);
    
    // Check for Study Group label
    expect(screen.getAllByText('Study Group').length).toBe(3);
    
    // Check for specific group names
    expect(screen.getByText('UX Strategy Study group')).toBeInTheDocument();
    expect(screen.getByText('Design System Team')).toBeInTheDocument();
    expect(screen.getByText('Research & Insights')).toBeInTheDocument();
  });

  it('displays action buttons for each call', () => {
    render(<GroupCallsWidget />);
    
    // Check for View Participants buttons
    expect(screen.getAllByText('View Participants').length).toBe(3);
    
    // Check for Join Now buttons
    expect(screen.getAllByText('Join Now').length).toBe(3);
  });

  it('has scroll navigation buttons that trigger scrolling', () => {
    render(<GroupCallsWidget />);
    
    // Find the scroll buttons
    const leftScrollButton = screen.getByLabelText('Scroll left');
    const rightScrollButton = screen.getByLabelText('Scroll right');
    
    // Click the left scroll button
    fireEvent.click(leftScrollButton);
    
    // Check if scrollBy was called with the correct parameters
    expect(scrollByMock).toHaveBeenCalledWith({ left: -300, behavior: 'smooth' });
    
    // Click the right scroll button
    fireEvent.click(rightScrollButton);
    
    // Check if scrollBy was called with the correct parameters
    expect(scrollByMock).toHaveBeenCalledWith({ left: 300, behavior: 'smooth' });
  });

  it('has accessible buttons with aria labels', () => {
    render(<GroupCallsWidget />);
    
    // Check for menu button
    expect(screen.getByLabelText('Menu')).toBeInTheDocument();
    
    // Check for options button
    expect(screen.getByLabelText('Options')).toBeInTheDocument();
    
    // Check for scroll buttons
    expect(screen.getByLabelText('Scroll left')).toBeInTheDocument();
    expect(screen.getByLabelText('Scroll right')).toBeInTheDocument();
    
    // Check for action buttons
    expect(screen.getAllByLabelText('View participants').length).toBe(3);
    expect(screen.getAllByLabelText('Join now').length).toBe(3);
  });
  
  it('displays "See all" link', () => {
    render(<GroupCallsWidget />);
    
    const seeAllLink = screen.getByText('See all');
    expect(seeAllLink).toBeInTheDocument();
    expect(seeAllLink.tagName.toLowerCase()).toBe('a');
  });
  
  it('shows mentors section for each call', () => {
    render(<GroupCallsWidget />);
    
    // Check for Mentors labels
    expect(screen.getAllByText('Mentors').length).toBe(3);
    
    // Check for mentor avatars (there should be multiple avatar images)
    const avatarImages = screen.getAllByRole('img');
    // We have 3 cards with 3 mentors each + 3 call images + 3 study group images
    expect(avatarImages.length).toBeGreaterThanOrEqual(15);
  });
}); 