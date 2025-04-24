import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/reusables/menu';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, className, 'data-testid': testId }) => (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      data-testid={testId || `image-${alt.toLowerCase().replace(/\s+/g, '-')}`}
    />
  ),
}));

// Mock SVG imports
jest.mock('@/assets/icons/Vector (3).svg', () => 'vector3-icon');
jest.mock('@/assets/icons/Vector (1).svg', () => 'vector1-icon');

describe('Header Component', () => {
  const testProps = {
    head: 'Test Header',
  };

  it('renders correctly with given props', () => {
    render(<Header {...testProps} />);
    
    // Check header text
    expect(screen.getByText(testProps.head)).toBeInTheDocument();
    expect(screen.getByText(testProps.head)).toHaveClass('text-[#B0B0B0]');
    expect(screen.getByText(testProps.head)).toHaveClass('font-bold');
    
    // Check "See all" button
    const seeAllButton = screen.getByText('See all');
    expect(seeAllButton).toBeInTheDocument();
    expect(seeAllButton).toHaveClass('text-[#6F01D0]');
    expect(seeAllButton).toHaveClass('hover:text-[#6f01d0d1]');
    expect(seeAllButton).toHaveClass('font-semibold');
  });

  it('renders all icons correctly', () => {
    render(<Header {...testProps} />);
    
    // Menu icon (using explicit test ID)
    const menuIcon = screen.getByTestId('menu-icon');
    expect(menuIcon).toBeInTheDocument();
    expect(menuIcon).toHaveAttribute('src', 'vector1-icon');
    expect(menuIcon).toHaveClass('h-4');
    expect(menuIcon).toHaveClass('w-4');
    
    // Action icon (using explicit test ID)
    const actionIcon = screen.getByTestId('action-icon');
    expect(actionIcon).toBeInTheDocument();
    expect(actionIcon).toHaveAttribute('src', 'vector3-icon'); // Fixed expectation
    expect(actionIcon).toHaveClass('cursor-pointer');
  });

  it('has correct layout structure', () => {
    const { container } = render(<Header {...testProps} />);
    
    // Check main container
    const headerDiv = container.firstChild;
    expect(headerDiv).toHaveClass('flex');
    expect(headerDiv).toHaveClass('justify-between');
    expect(headerDiv).toHaveClass('items-center');
    
    // Check left section
    const leftSection = screen.getByText(testProps.head).parentElement;
    expect(leftSection).toHaveClass('flex');
    expect(leftSection).toHaveClass('gap-2.5');
    expect(leftSection).toHaveClass('items-center');
    
    // Check right section
    const rightSection = screen.getByText('See all').parentElement;
    expect(rightSection).toHaveClass('flex');
    expect(rightSection).toHaveClass('gap-5');
    expect(rightSection).toHaveClass('items-center');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Header {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('applies hover styles correctly', () => {
    render(<Header {...testProps} />);
    const seeAllButton = screen.getByText('See all');
    expect(seeAllButton).toHaveClass('hover:text-[#6f01d0d1]');
  });

  it('handles icon clicks when provided', () => {
    // Currently no onClick handlers, but this is how you'd test them:
    // const mockClick = jest.fn();
    // render(<Header {...testProps} onMenuClick={mockClick} />);
    // fireEvent.click(screen.getByTestId('image-menu-icon'));
    // expect(mockClick).toHaveBeenCalled();
  });
});