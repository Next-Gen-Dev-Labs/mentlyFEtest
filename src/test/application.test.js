import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Application from '@/components/application';


// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // Simplify the Image component for testing
    return <img {...props} />;
  },
}));

// Mock the Header component
jest.mock('../components/reusables/menu.js', () => ({
  __esModule: true,
  default: ({ head }) => <h2 data-testid="header">{head}</h2>,
}));

// Mock the students data
jest.mock('@/data', () => ({
  students: [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      image: '/path/to/image1.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      image: '/path/to/image2.jpg',
    },
  ],
  mentor: {
    name: 'Maxwell Smith',
    email: 'maxwellsmith@gmail.com',
    image: '/path/to/mentor.jpg',
    tags: [
      { text: 'Product Designer', class: 'border-[#DDCEEE] bg-[#F3ECF9] text-[#9985A7]' },
      { text: '4years Experience', class: 'border-[#A1BDBA] bg-[#E8FDFB] text-[#58948E]' },
      { text: 'Lagos, Nigeria', class: 'border-[#ABBEE0] bg-[#E3ECF9] text-[#8196B5]' },
      { text: 'GMT +1', class: 'border-[#C8C8C8] bg-#F4F4F4] text-[#595564]' },
    ]
  }
}));

// Mock the mentor image
jest.mock('@/assets/images/Ellipse 56 (2).svg', () => '/path/to/mentor.jpg');

describe('Application Component', () => {
  beforeEach(() => {
    render(<Application />);
  });

  it('renders the header correctly', () => {
    expect(screen.getByTestId('header')).toHaveTextContent('Application');
  });

  it('displays the mentor section', () => {
    expect(screen.getByText('Mentor')).toBeInTheDocument();
    expect(screen.getByText('Maxwell Smith')).toBeInTheDocument();
    expect(screen.getByText('maxwellsmith@gmail.com')).toBeInTheDocument();
  });

  it('shows mentor tags', () => {
    expect(screen.getByText('Product Designer')).toBeInTheDocument();
    expect(screen.getByText('4years Experience')).toBeInTheDocument();
    expect(screen.getByText('Lagos, Nigeria')).toBeInTheDocument();
    expect(screen.getByText('GMT +1')).toBeInTheDocument();
  });

  it('renders mentor action buttons', () => {
    // Test mentor's buttons specifically
    const mentorSection = screen.getByText('Mentor').closest('div');
    expect(within(mentorSection).getByRole('button', { name: 'Reject' })).toBeInTheDocument();
    expect(within(mentorSection).getByRole('button', { name: 'Accept' })).toBeInTheDocument();
  });

  it('displays the students section header', () => {
    expect(screen.getByText('Students')).toBeInTheDocument();
  });

  it('renders all students from mock data', () => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('johndoe@example.com')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('janesmith@example.com')).toBeInTheDocument();
  });

  it('renders checkboxes for selection', () => {
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes.length).toBe(3); // Mentor + 2 students
  });

  it('allows selecting mentor checkbox', () => {
    const checkbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('renders action buttons for each student', () => {
    const rejectButtons = screen.getAllByRole('button', { name: 'Reject' });
    const acceptButtons = screen.getAllByRole('button', { name: 'Accept' });
    
    expect(rejectButtons.length).toBe(3); // Mentor + 2 students
    expect(acceptButtons.length).toBe(3); // Mentor + 2 students
  });

  it('applies correct styling to buttons', () => {
    const rejectButton = screen.getAllByRole('button', { name: 'Reject' })[0];
    const acceptButton = screen.getAllByRole('button', { name: 'Accept' })[0];
    
    expect(rejectButton).toHaveClass('bg-[#FFEDED]');
    expect(rejectButton).toHaveClass('border-[#D09696]');
    expect(rejectButton).toHaveClass('text-[#D83535]');
    
    expect(acceptButton).toHaveClass('bg-[#6F01D0]');
    expect(acceptButton).toHaveClass('text-white');
  });

  it('has correct container styling', () => {
    const container = screen.getByTestId('header').parentElement;
    expect(container).toHaveClass('bg-white');
    expect(container).toHaveClass('lg:w-[370px]');
    expect(container).toHaveClass('xl:w-[431px]');
  });
});