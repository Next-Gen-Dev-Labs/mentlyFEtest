import { render, screen } from '@testing-library/react';
import WelcomeHeader from '@/components/dashboard/welcome-header';

describe('WelcomeHeader', () => {
  it('renders welcome message with user name', () => {
    render(<WelcomeHeader name="John" />);
    
    expect(screen.getByText(/Welcome Aboard, John/)).toBeInTheDocument();
    expect(screen.getByText(/We're thrilled to have you join Techrity Team!/)).toBeInTheDocument();
  });

  it('renders update profile button', () => {
    render(<WelcomeHeader name="John" />);
    
    const button = screen.getByRole('button', { name: /Update Profile/i });
    expect(button).toBeInTheDocument();
  });
});