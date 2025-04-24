import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Mentor from '@/components/mentor';


// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}));

// Mock the mentor data
jest.mock('@/data', () => ({
  mentor: [
    {
      id: 1,
      name: 'John Doe',
      role: 'Senior Developer',
      img: '/path/to/john.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'UX Designer',
      img: '/path/to/jane.jpg',
    },
  ],
}));

// Mock the icon assets
jest.mock('@/assets/icons/Vector (3).svg', () => '/path/to/icon.svg');
jest.mock('@/assets/icons/Vector (1).svg', () => '/path/to/menu.svg');
jest.mock('@/assets/icons/Frame 1321318605.svg', () => '/path/to/add.svg');

describe('Mentor Component', () => {
  beforeEach(() => {
    render(<Mentor />);
  });

  it('renders the component container with correct styling', () => {
    const container = screen.getByTestId('mentor-container');
    expect(container).toHaveClass('bg-white');
    expect(container).toHaveClass('rounded-xl');
    expect(container).toHaveClass('w-full');
    expect(container).toHaveClass('md:w-[49%]');
    expect(container).toHaveClass('lg:w-[280px]');
    expect(container).toHaveClass('xl:w-[320px]');
  });

  it('displays the header section correctly', () => {
    expect(screen.getByText('Mentors')).toBeInTheDocument();
    expect(screen.getByText('Mentors')).toHaveClass('text-[#B0B0B0]');
    expect(screen.getByText('Mentors')).toHaveClass('font-bold');
    
    // Update these lines to match your actual implementation
  const icons = screen.getAllByRole('img');
  expect(icons.length).toBeGreaterThanOrEqual(2); // At least 2 icons

  });

  it('renders all mentor cards from mock data', () => {
    const mentors = screen.getAllByTestId('mentor-card');
    expect(mentors.length).toBe(2);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Senior Developer')).toBeInTheDocument();
    
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('UX Designer')).toBeInTheDocument();
  });

  it('displays mentor images correctly', () => {
    const images = screen.getAllByRole('img');
    // 3 icons + 2 mentor images
    expect(images.length).toBe(5); 
    
    const johnImage = images.find(img => img.alt === 'John Doe');
    expect(johnImage).toHaveAttribute('src', '/path/to/john.jpg');
    
    const janeImage = images.find(img => img.alt === 'Jane Smith');
    expect(janeImage).toHaveAttribute('src', '/path/to/jane.jpg');
  });

  it('renders message buttons for each mentor', () => {
    const messageButtons = screen.getAllByRole('button', { name: 'Message' });
    expect(messageButtons.length).toBe(2);
    
    messageButtons.forEach(button => {
      expect(button).toHaveClass('bg-[#6F01D0]');
      expect(button).toHaveClass('text-white');
      expect(button).toHaveClass('rounded-2xl');
    });
  });

  it('renders the "See all" button with correct styling', () => {
    const seeAllButton = screen.getByRole('button', { name: 'See all' });
    expect(seeAllButton).toBeInTheDocument();
    expect(seeAllButton).toHaveClass('bg-[#DDD6FB]');
    expect(seeAllButton).toHaveClass('text-[#6F01D0]');
    expect(seeAllButton).toHaveClass('rounded-3xl');
    expect(seeAllButton).toHaveClass('w-full');
  });

  it('responds to button hover states', () => {
    const messageButton = screen.getAllByRole('button', { name: 'Message' })[0];
    expect(messageButton).toHaveClass('hover:bg-[#6f01d0d1]');
    
    const seeAllButton = screen.getByRole('button', { name: 'See all' });
    expect(seeAllButton).toHaveClass('hover:bg-white');
    expect(seeAllButton).toHaveClass('hover:border-2');
    expect(seeAllButton).toHaveClass('hover:border-[#6F01D0]');
  });

  it('has proper spacing between elements', () => {
    const container = screen.getByTestId('mentor-container');
    expect(container).toHaveClass('space-y-[15px]');
    
    const mentorList = screen.getByTestId('mentor-list');
    expect(mentorList).toHaveClass('gap-4');
  });
});