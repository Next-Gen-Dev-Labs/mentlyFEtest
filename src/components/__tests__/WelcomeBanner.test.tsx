import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import WelcomeBanner from '../WelcomeBanner';

describe('WelcomeBanner Component', () => {
  it('renders the welcome message with user name', () => {
    render(<WelcomeBanner />);
    
    // Check for welcome message with the user's name
    expect(screen.getByText(/Welcome Aboard, Blessing/)).toBeInTheDocument();
  });

  it('displays the secondary welcome message', () => {
    render(<WelcomeBanner />);
    
    // Check for the secondary text
    expect(screen.getByText("We're thrilled to have you join Techrity Team!")).toBeInTheDocument();
  });

  it('has an Update Profile button', () => {
    render(<WelcomeBanner />);
    
    // Check for the update profile button
    const updateButton = screen.getByRole('button', { name: /Update your profile information/i });
    expect(updateButton).toBeInTheDocument();
    expect(updateButton).toHaveTextContent('Update Profile');
  });

  it('applies animations after mounting', async () => {
    render(<WelcomeBanner />);
    
    // Get welcome heading element
    const welcomeHeading = screen.getByText(/Welcome Aboard, Blessing/);
    
    // Animation should be completed after a short delay
    await waitFor(() => {
      // Check for transition style being present
      expect(welcomeHeading).toHaveStyle('opacity: 1');
      expect(welcomeHeading).toHaveStyle('transform: translateY(0)');
    });
  });

  it('shows the update button with animation delay', async () => {
    render(<WelcomeBanner />);
    
    const updateButton = screen.getByRole('button', { name: /Update your profile information/i });
    
    // Initially button should be transparent (opacity 0)
    expect(updateButton).toHaveStyle('opacity: 0');
    
    // Button should be visible after animation delay
    await waitFor(() => {
      expect(updateButton).toHaveStyle('opacity: 1');
    }, { timeout: 500 });
  });

  it('logs a message when Update Profile button is clicked', () => {
    // Spy on console.log
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    
    render(<WelcomeBanner />);
    
    // Click on update profile button
    const updateButton = screen.getByRole('button', { name: /Update your profile information/i });
    fireEvent.click(updateButton);
    
    // Check if console.log was called with the correct message
    expect(consoleSpy).toHaveBeenCalledWith('Navigate to profile update page');
    
    // Restore console.log
    consoleSpy.mockRestore();
  });
  
  it('has the expected styling and design elements', () => {
    render(<WelcomeBanner />);
    
    // Check for the banner container
    const banner = screen.getByTestId('welcome-banner');
    expect(banner).toHaveClass('bg-[#6F01D0]');
    expect(banner).toHaveClass('rounded-md');
    
    // Check for the animated background gradient
    const backgroundGradient = banner.querySelector('.absolute.inset-0.bg-gradient-to-r');
    expect(backgroundGradient).toBeInTheDocument();
  });
}); 