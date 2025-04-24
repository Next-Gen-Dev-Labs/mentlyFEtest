import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Head from '@/components/layouts/header';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}));

// Mock the SVG imports
jest.mock('@/assets/icons/notification.svg', () => 'notification-icon-path');
jest.mock('@/assets/icons/Clip path group.svg', () => 'logo-icon-path');

describe('Head Component', () => {
  beforeEach(() => {
    render(<Head />);
  });

  it('renders with correct container styling', () => {
    const container = screen.getByRole('banner');
    expect(container).toHaveClass('w-full');
    expect(container).toHaveClass('hidden');
    expect(container).toHaveClass('lg:flex');
    expect(container).toHaveClass('gap-12');
    expect(container).toHaveClass('justify-end');
    expect(container).toHaveClass('bg-[#FDFDFD]');
    expect(container).toHaveClass('py-5');
    expect(container).toHaveClass('px-14');
    expect(container).toHaveStyle('box-shadow: 0px 2px 4px 0px #00000010');
  });
  it('renders the notification button correctly', () => {
    const notifyButton = screen.getByRole('button');
    expect(notifyButton).toHaveClass('rounded-full');
    expect(notifyButton).toHaveClass('relative');
    
    // We now check for the alt text instead of specific src path
    const notifyIcon = screen.getByAltText('notification');
    expect(notifyIcon).toBeInTheDocument();
    expect(notifyIcon).toHaveClass('h-6');
    expect(notifyIcon).toHaveClass('w-6');
    
    const notificationDot = screen.getByTestId('notification-dot');
    expect(notificationDot).toBeInTheDocument();
    expect(notificationDot).toHaveClass('absolute');
    expect(notificationDot).toHaveClass('top-3');
    expect(notificationDot).toHaveClass('right-1');
    expect(notificationDot).toHaveClass('h-2');
    expect(notificationDot).toHaveClass('w-2');
    expect(notificationDot).toHaveClass('bg-red-500');
    expect(notificationDot).toHaveClass('rounded-full');
    // ... other dot assertions
  });
  

  it('renders the user profile section correctly', () => {
    const profileSection = screen.getByTestId('profile-section');
    expect(profileSection).toHaveClass('flex');
    expect(profileSection).toHaveClass('items-center');
    expect(profileSection).toHaveClass('gap-2');
    
    const avatarContainer = screen.getByTestId('avatar-container');
    expect(avatarContainer).toHaveClass('h-11');
    expect(avatarContainer).toHaveClass('w-11');
    expect(avatarContainer).toHaveClass('rounded-full');
    expect(avatarContainer).toHaveClass('bg-[#8B72FC]');
    
    const logo = screen.getByAltText('logo');
    expect(logo).toHaveAttribute('src', 'logo-icon-path');
    
    expect(screen.getByText('Techrity Foun...')).toBeInTheDocument();
    expect(screen.getByText('Member')).toBeInTheDocument();
    
    const statusIndicator = screen.getByTestId('status-indicator');
    expect(statusIndicator).toHaveClass('w-5');
    expect(statusIndicator).toHaveClass('h-5');
    expect(statusIndicator).toHaveClass('bg-[#6F01D0]');
    expect(statusIndicator).toHaveClass('rounded');
    expect(statusIndicator).toHaveClass('ml-2');
  });
});