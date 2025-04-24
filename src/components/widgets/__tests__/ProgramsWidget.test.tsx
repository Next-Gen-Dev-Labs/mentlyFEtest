import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProgramsWidget from '../ProgramsWidget';

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

describe('ProgramsWidget Component', () => {
  it('renders the widget with title and program cards', async () => {
    render(<ProgramsWidget />);
    
    // Check for widget header
    expect(screen.getByText('Programs')).toBeInTheDocument();
    
    // Check for filter dropdown
    expect(screen.getByText('Filter')).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: 'Filter programs' })).toBeInTheDocument();
    
    // Check for program cards - specifically the titles
    expect(screen.getByText('Fundamentals of User Interface & Experience')).toBeInTheDocument();
    expect(screen.getAllByText('Colour Hack Practical Group Call').length).toBe(2);
    
    // Check for program types
    expect(screen.getByText('Bootcamp')).toBeInTheDocument();
    expect(screen.getAllByText('Group Call').length).toBe(2);
  });

  it('displays program cards with action buttons', () => {
    render(<ProgramsWidget />);
    
    // Check for View Details buttons
    expect(screen.getAllByText('View Details').length).toBe(3);
    
    // Check for action buttons
    expect(screen.getByText('Analysis')).toBeInTheDocument();
    expect(screen.getAllByText('Assign Mentor').length).toBe(2);
  });

  it('displays mentors for the bootcamp program', () => {
    render(<ProgramsWidget />);
    
    // There should be a "Mentors" text in the bootcamp card
    expect(screen.getByText('Mentors')).toBeInTheDocument();
    
    // Check for host information in the group call cards
    expect(screen.getAllByText(/Hosted By: Sarah Williams/).length).toBe(2);
  });

  it('applies hover animations when mouse enters a card', async () => {
    render(<ProgramsWidget />);
    
    // Get the first program card
    const cards = screen.getAllByRole('img');
    const firstProgramCard = cards[0].closest('div[style]');
    
    // Trigger mouse enter
    if (firstProgramCard) {
      fireEvent.mouseEnter(firstProgramCard);
      
      // Wait for the animation to be applied
      await waitFor(() => {
        // Check if the component has applied the hover class/style
        // The exact check depends on how your component applies the hover effect
        expect(firstProgramCard.style.transform).toContain('scale');
      });
      
      // Trigger mouse leave
      fireEvent.mouseLeave(firstProgramCard);
      
      // Check if the hover effect is removed
      await waitFor(() => {
        expect(firstProgramCard.style.transform).not.toContain('scale(1.01)');
      });
    }
  });

  it('shows filter dropdown with options', () => {
    render(<ProgramsWidget />);
    
    const filterDropdown = screen.getByRole('combobox', { name: 'Filter programs' });
    expect(filterDropdown).toBeInTheDocument();
    
    // Check dropdown options
    const options = screen.getAllByRole('option');
    expect(options.length).toBe(3);
    expect(options[0]).toHaveTextContent('Active');
    expect(options[1]).toHaveTextContent('Completed');
    expect(options[2]).toHaveTextContent('Upcoming');
  });
  
  it('displays "See all" link', () => {
    render(<ProgramsWidget />);
    
    const seeAllLink = screen.getByText('See all');
    expect(seeAllLink).toBeInTheDocument();
    expect(seeAllLink.tagName.toLowerCase()).toBe('a');
  });
  
  it('has accessible buttons with aria labels', () => {
    render(<ProgramsWidget />);
    
    // Check for menu button
    expect(screen.getByLabelText('Menu')).toBeInTheDocument();
    
    // Check for options button
    expect(screen.getByLabelText('Options')).toBeInTheDocument();
    
    // Check for action buttons
    expect(screen.getByLabelText('Analysis')).toBeInTheDocument();
    expect(screen.getAllByLabelText('Assign Mentor').length).toBe(2);
    expect(screen.getAllByLabelText('View program details').length).toBe(3);
  });
}); 