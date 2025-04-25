import { render, screen } from '@testing-library/react';
import Header from '@/components/navigation/header';

describe('Header', () => {
  it('renders search input', () => {
    render(<Header />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('renders notification button with badge', () => {
    render(<Header />);
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('renders manage widgets button', () => {
    render(<Header />);
    expect(screen.getByText('Manage Widgets')).toBeInTheDocument();
  });

  it('renders notifications popover content', () => {
    render(<Header />);
    expect(screen.getByText('New application received')).toBeInTheDocument();
  });
});