import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgramCard from '@/components/cards/programCard';

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

// Mock SVG import
jest.mock('@/assets/icons/setting-2.svg', () => 'setting-icon');

describe('ProgramCard Component', () => {
  const mockProgram = {
    progImg: 'program-image.jpg',
    title: 'Advanced React Course',
    program: 'Ongoing',
    bg: 'bg-[#2AC10033]',
    span: 'bg-[#1F8B01]',
    text: 'text-[#1F8B01]',
    desc: 'Learn advanced React patterns and best practices',
    hostImg: 'host-image.jpg',
    host: 'John Doe'
  };

  it('renders correctly with all props', () => {
    render(<ProgramCard program={mockProgram} />);
    
    // Check main program image
    const programImage = screen.getByTestId('image-programs');
    expect(programImage).toBeInTheDocument();
    expect(programImage).toHaveClass('w-full');
    expect(programImage).toHaveClass('h-full');
    
    // Check title
    expect(screen.getByText('Advanced React Course')).toBeInTheDocument();
    
    // Check program status
    const statusIndicator = screen.getByText('Ongoing');
    expect(statusIndicator).toBeInTheDocument();
    expect(statusIndicator.parentElement).toHaveClass('bg-[#2AC10033]');
    expect(statusIndicator).toHaveClass('text-[#1F8B01]');
    
    // Check description
    expect(screen.getByText('Learn advanced React patterns and best practices')).toBeInTheDocument();
    
    // Check host info
    expect(screen.getByTestId('image-host')).toBeInTheDocument();
    expect(screen.getByText('Hosted by: John Doe')).toBeInTheDocument();
    
    // Check buttons
    expect(screen.getByText('View Details')).toBeInTheDocument();
    expect(screen.getByText('Analysis')).toBeInTheDocument();
  });

  it('renders setting icon correctly', () => {
    render(<ProgramCard program={mockProgram} />);
    
    const settingIcon = screen.getByTestId('image-setting-icon');
    expect(settingIcon).toBeInTheDocument();
    expect(settingIcon).toHaveAttribute('src', 'setting-icon');
    expect(settingIcon).toHaveClass('h-3.5');
    expect(settingIcon).toHaveClass('w-3.5');
  });

  it('has correct layout structure', () => {
    const { container } = render(<ProgramCard program={mockProgram} />);
    
    // Check main container
    const card = container.firstChild;
    expect(card).toHaveClass('w-[291px]');
    expect(card).toHaveClass('md:w-[271px]');
    expect(card).toHaveClass('xl:w-[291px]');
    expect(card).toHaveClass('bg-[#FFFFFF]');
    expect(card).toHaveClass('shadow-lg');
    
    // Check buttons container
    const buttonsContainer = screen.getByText('View Details').parentElement;
    expect(buttonsContainer).toHaveClass('flex');
    expect(buttonsContainer).toHaveClass('gap-[5.26px]');
  });

  it('applies correct hover styles to buttons', () => {
    render(<ProgramCard program={mockProgram} />);
    
    const viewDetailsButton = screen.getByText('View Details');
    expect(viewDetailsButton).toHaveClass('hover:bg-[#F9F7FF]');
    
    const analysisButton = screen.getByText('Analysis');
    expect(analysisButton).toHaveClass('hover:bg-[#6f01d0d1]');
  });

  it('handles different program statuses', () => {
    const upcomingProgram = {
      ...mockProgram,
      program: 'Upcoming',
      bg: 'bg-[#E0DDFF]',
      span: 'bg-[#1C0AE1]',
      text: 'text-[#1C0AE1]'
    };
    
    render(<ProgramCard program={upcomingProgram} />);
    
    const statusIndicator = screen.getByText('Upcoming');
    expect(statusIndicator.parentElement).toHaveClass('bg-[#E0DDFF]');
    expect(statusIndicator).toHaveClass('text-[#1C0AE1]');
  });

  it('renders responsive classes correctly', () => {
    render(<ProgramCard program={mockProgram} />);
    
    const card = screen.getByTestId('image-programs').closest('div').parentElement.parentElement;
    expect(card).toHaveClass('p-1.5');
    expect(card).toHaveClass('xl:p-3');
  });
});