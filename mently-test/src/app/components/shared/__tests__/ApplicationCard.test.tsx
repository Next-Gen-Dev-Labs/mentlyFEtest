import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Role } from '@/app/types/enum';
import ApplicationCard from '../application-card';

describe('ApplicationCard', () => {
  const defaultProps = {
    name: 'Nasir Mohammed',
    email: 'nas@example.com',
    role: Role.Mentor,
    roleLabel: 'Frontend Mentor',
    experience: '5+ years',
    location: 'Lagos',
    timezone: 'WAT',
    onAccept: jest.fn(),
    onReject: jest.fn(),
  };

  it('renders name, email, and role label', () => {
    render(<ApplicationCard {...defaultProps} />);
    expect(screen.getByText('Nasir Mohammed')).toBeInTheDocument();
    expect(screen.getByText('nas@example.com')).toBeInTheDocument();
    expect(screen.getByText('Frontend Mentor')).toBeInTheDocument();
  });

  it('toggles checkbox state when clicked', async () => {
    const user = userEvent.setup();
    render(<ApplicationCard {...defaultProps} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('calls onAccept when Accept button is clicked', async () => {
    const user = userEvent.setup();
    render(<ApplicationCard {...defaultProps} />);
    const acceptButton = screen.getByRole('button', {
      name: /accept jane doe/i,
    });
    await user.click(acceptButton);
    expect(defaultProps.onAccept).toHaveBeenCalled();
  });

  it('calls onReject when Reject button is clicked', async () => {
    const user = userEvent.setup();
    render(<ApplicationCard {...defaultProps} />);
    const rejectButton = screen.getByRole('button', {
      name: /reject jane doe/i,
    });
    await user.click(rejectButton);
    expect(defaultProps.onReject).toHaveBeenCalled();
  });
});
