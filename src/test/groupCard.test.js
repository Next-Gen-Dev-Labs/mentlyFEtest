import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GroupCard from '@/components/cards/groupCard';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, className }) => (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      data-testid={`image-${alt.toLowerCase().replace(/\s+/g, '-')}`}
    />
  ),
}));

// Mock SVG imports
jest.mock('@/assets/icons/mynaui_calendar.svg', () => 'calendar-icon');
jest.mock('@/assets/icons/clock.svg', () => 'clock-icon');
jest.mock('@/assets/images/man-438081_960_720.svg', () => 'host1-icon');
jest.mock('@/assets/images/fine.png', () => 'host2-icon');
jest.mock('@/assets/images/woman.png', () => 'host3-icon');

// Mock react-icons
jest.mock("react-icons/fa6", () => ({
  FaArrowRightLong: () => <span data-testid="arrow-icon">→</span>,
}));

describe('GroupCard Component', () => {
  const mockGroup = {
    img: 'group-image.jpg',
    status: 'Ongoing',
    title: 'Advanced React Patterns',
    date: 'Oct 15, 2023',
    time: '10:00 AM',
    group: 'React Masters',
  };

  it('renders correctly with ongoing status', () => {
    render(<GroupCard group={mockGroup} />);
    
    // Check main image
    const groupImage = screen.getByTestId('image-group');
    expect(groupImage).toBeInTheDocument();
    expect(groupImage).toHaveClass('w-full');
    expect(groupImage).toHaveClass('h-[68.7px]');
    
    // Check status indicator
    const statusIndicator = screen.getByText('Ongoing');
    expect(statusIndicator).toBeInTheDocument();
    expect(statusIndicator.parentElement).toHaveClass('bg-[#2AC10033]');
    expect(statusIndicator).toHaveClass('text-[#1F8B01]');
    
    // Check title
    expect(screen.getByText('Advanced React Patterns')).toBeInTheDocument();
    
    // Check date and time
    expect(screen.getByText('Oct 15, 2023')).toBeInTheDocument();
    expect(screen.getByText('10:00 AM')).toBeInTheDocument();
    
    // Check group name
    expect(screen.getByText('React Masters')).toBeInTheDocument();
    
    // Check mentor images - use getAllByTestId since there are multiple
    const hostImages = screen.getAllByTestId('image-host');
    expect(hostImages).toHaveLength(3);
    
    // Check buttons
    expect(screen.getByText('View Participants')).toBeInTheDocument();
    const joinButton = screen.getByRole('button', { name: /join now/i });
    expect(joinButton).toBeInTheDocument();
    expect(joinButton).toHaveClass('bg-[#6F01D0]');
    expect(screen.getByTestId('arrow-icon')).toBeInTheDocument();
  });

  it('renders correctly with upcoming status', () => {
    const upcomingGroup = {
      ...mockGroup,
      status: 'Upcoming'
    };
    render(<GroupCard group={upcomingGroup} />);
    
    // Check status indicator
    const statusIndicator = screen.getByText('Upcoming');
    expect(statusIndicator.parentElement).toHaveClass('bg-[#E0DDFF]');
    expect(statusIndicator).toHaveClass('text-[#1C0AE1]');
    
    // Check join button is disabled
    const joinButton = screen.getByRole('button', { name: /join now/i });
    expect(joinButton).toHaveClass('bg-[#6F01D04D]');
    expect(joinButton).toHaveClass('cursor-not-allowed');
    expect(joinButton).toBeDisabled();
  });

  it('renders all required icons', () => {
    render(<GroupCard group={mockGroup} />);
    
    expect(screen.getByTestId('image-calendar-icon')).toBeInTheDocument();
    expect(screen.getByTestId('image-clock-icon')).toBeInTheDocument();
    expect(screen.getAllByTestId('image-host')).toHaveLength(3);
  });

  it('has correct layout structure', () => {
    const { container } = render(<GroupCard group={mockGroup} />);
    
    // Check main container
    const card = container.firstChild;
    expect(card).toHaveClass('w-[270px]');
    expect(card).toHaveClass('bg-[#F9F7FF]');
    expect(card).toHaveClass('rounded-[9.7px]');
    
    // Check grid layout
    const grid = screen.getByText('Oct 15, 2023').parentElement.parentElement;
    expect(grid).toHaveClass('grid');
    expect(grid).toHaveClass('grid-cols-2');
  });

  it('handles button states correctly', () => {
    render(<GroupCard group={mockGroup} />);
    
    // View Participants button
    const viewButton = screen.getByRole('button', { name: /view participants/i });
    expect(viewButton).toHaveClass('border-[#6F01D0]');
    expect(viewButton).toHaveClass('text-[#6F01D0]');
    expect(viewButton).toHaveClass('hover:bg-white');
    
    // Join Now button (ongoing)
    const joinButton = screen.getByRole('button', { name: /join now/i });
    expect(joinButton).toHaveClass('bg-[#6F01D0]');
    expect(joinButton).toHaveClass('hover:bg-[#6f01d0d1]');
    expect(joinButton).not.toBeDisabled();
  });
});