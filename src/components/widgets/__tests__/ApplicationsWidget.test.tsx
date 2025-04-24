import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ApplicationsWidget from '../ApplicationsWidget';

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

describe('ApplicationsWidget Component', () => {
  beforeEach(() => {
    // Mock console.log
    jest.spyOn(console, 'log').mockImplementation();
  });

  it('renders the widget with title and tab navigation', () => {
    render(<ApplicationsWidget />);
    
    // Check for widget header
    expect(screen.getByText('Applications')).toBeInTheDocument();
    
    // Check for tab buttons
    expect(screen.getByRole('tab', { name: /Mentors/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Students/i })).toBeInTheDocument();
  });

  it('displays mentor applications by default', async () => {
    render(<ApplicationsWidget />);
    
    // Mentor tab should be selected by default
    const mentorsTab = screen.getByRole('tab', { name: /Mentors/i });
    expect(mentorsTab).toHaveAttribute('aria-selected', 'true');
    
    // Wait for animations to complete
    await waitFor(() => {
      // Check for mentor application content
      expect(screen.getByText('Sarah Johnson')).toBeInTheDocument();
      expect(screen.getByText('Product Designer')).toBeInTheDocument();
      expect(screen.getByText('4 years Experience')).toBeInTheDocument();
      expect(screen.getByText('🇳🇬 Lagos, Nigeria')).toBeInTheDocument();
      expect(screen.getByText('GMT +1')).toBeInTheDocument();
    });
  });

  it('switches to student applications when student tab is clicked', async () => {
    render(<ApplicationsWidget />);
    
    // Click on Students tab
    const studentsTab = screen.getByRole('tab', { name: /Students/i });
    fireEvent.click(studentsTab);
    
    // Students tab should now be selected
    expect(studentsTab).toHaveAttribute('aria-selected', 'true');
    
    // Mentors tab should not be selected
    const mentorsTab = screen.getByRole('tab', { name: /Mentors/i });
    expect(mentorsTab).toHaveAttribute('aria-selected', 'false');
    
    // Wait for animations to complete
    await waitFor(() => {
      // Check for student applications
      expect(screen.getByText('Emma Wilson')).toBeInTheDocument();
      expect(screen.getByText('David Kim')).toBeInTheDocument();
      expect(screen.getByText('Maria Rodriguez')).toBeInTheDocument();
      expect(screen.getByText('Alex Chen')).toBeInTheDocument();
    });
  });

  it('handles checkbox selection', async () => {
    render(<ApplicationsWidget />);
    
    // Find first mentor checkbox
    const checkbox = screen.getByLabelText('Select Sarah Johnson');
    
    // Initially it should be unchecked
    expect(checkbox).not.toBeChecked();
    
    // Click to check
    fireEvent.click(checkbox);
    
    // Now it should be checked
    expect(checkbox).toBeChecked();
    
    // Click again to uncheck
    fireEvent.click(checkbox);
    
    // Now it should be unchecked again
    expect(checkbox).not.toBeChecked();
  });

  it('logs accept action when accept button is clicked', async () => {
    render(<ApplicationsWidget />);
    
    // Find the accept button for Sarah Johnson
    const acceptButton = screen.getByLabelText('Accept Sarah Johnson');
    
    // Click the accept button
    fireEvent.click(acceptButton);
    
    // Check if the correct log message was generated
    expect(console.log).toHaveBeenCalledWith('Accepting mentor application with ID: 1');
  });

  it('logs reject action when reject button is clicked', async () => {
    render(<ApplicationsWidget />);
    
    // Find the reject button for Sarah Johnson
    const rejectButton = screen.getByLabelText('Reject Sarah Johnson');
    
    // Click the reject button
    fireEvent.click(rejectButton);
    
    // Check if the correct log message was generated
    expect(console.log).toHaveBeenCalledWith('Rejecting mentor application with ID: 1');
  });

  it('displays see all applications button', () => {
    render(<ApplicationsWidget />);
    
    // Check for the see all button
    const seeAllButton = screen.getByText('See all applications');
    expect(seeAllButton).toBeInTheDocument();
    expect(seeAllButton.tagName.toLowerCase()).toBe('a');
  });

  it('renders an accessible checkbox for each application', async () => {
    render(<ApplicationsWidget />);
    
    // Check mentor application checkbox
    expect(screen.getByLabelText('Select Sarah Johnson')).toHaveAttribute('type', 'checkbox');
    
    // Switch to student tab
    fireEvent.click(screen.getByRole('tab', { name: /Students/i }));
    
    // Check for student checkboxes (should be 4)
    await waitFor(() => {
      expect(screen.getByLabelText('Select Emma Wilson')).toHaveAttribute('type', 'checkbox');
      expect(screen.getByLabelText('Select David Kim')).toHaveAttribute('type', 'checkbox');
      expect(screen.getByLabelText('Select Maria Rodriguez')).toHaveAttribute('type', 'checkbox');
      expect(screen.getByLabelText('Select Alex Chen')).toHaveAttribute('type', 'checkbox');
    });
  });
}); 