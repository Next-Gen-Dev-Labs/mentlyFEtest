import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Program from '@/components/programs';


// Mock child components
jest.mock('../components/cards/programCard.js', () => ({
  __esModule: true,
  default: ({ program }) => <div data-testid="program-card">{program.name}</div>,
}));

jest.mock('../components/reusables/menu.js', () => ({
  __esModule: true,
  default: ({ head }) => <h2 data-testid="header">{head}</h2>,
}));

// Mock react-icons
jest.mock('react-icons/io', () => ({
  IoIosArrowDown: jest.fn(() => <div data-testid="arrow-down" />),
}));

// Mock programs data
jest.mock('@/data', () => ({
  programs: [
    { id: 1, name: 'Web Development' },
    { id: 2, name: 'Data Science' },
    { id: 3, name: 'UX Design' },
  ],
}));

describe('Program Component', () => {
  beforeEach(() => {
    render(<Program />);
  });

  it('renders with correct container styling', () => {
    const container = screen.getByTestId('header').parentElement;
    expect(container).toHaveClass('bg-white');
    expect(container).toHaveClass('rounded-xl');
    expect(container).toHaveClass('w-full');
    expect(container).toHaveClass('xl:w-[329px]');
  });

  it('displays the correct header', () => {
    expect(screen.getByTestId('header')).toHaveTextContent('Programs');
  });

  it('renders filter controls', () => {
    expect(screen.getByText('Filter')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByTestId('arrow-down')).toBeInTheDocument();
  });

  it('applies correct styling to filter controls', () => {
    const filterContainer = screen.getByTestId('filter-container');
    expect(filterContainer).toHaveClass('text-xs');
    expect(filterContainer).toHaveClass('font-medium');
    
    const activeFilter = screen.getByTestId('active-filter');
    expect(activeFilter).toHaveClass('border');
    expect(activeFilter).toHaveClass('border-[#E1E7EC]');
});

  it('renders all program cards', () => {
    const programCards = screen.getAllByTestId('program-card');
    expect(programCards.length).toBe(3); // Matches mock data
    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('Data Science')).toBeInTheDocument();
    expect(screen.getByText('UX Design')).toBeInTheDocument();
  });

  it('has correct layout for program cards', () => {
    const cardsContainer = screen.getByTestId('header').nextSibling.nextSibling;
    expect(cardsContainer).toHaveClass('flex');
    expect(cardsContainer).toHaveClass('flex-row');
    expect(cardsContainer).toHaveClass('lg:flex-col');
    expect(cardsContainer).toHaveClass('gap-2');
    expect(cardsContainer).toHaveClass('overflow-x-scroll');
    expect(cardsContainer).toHaveClass('lg:overflow-x-hidden');
  });

  it('has proper spacing between elements', () => {
    const container = screen.getByTestId('header').parentElement;
    expect(container).toHaveClass('space-y-2');
    expect(container).toHaveClass('px-2.5');
    expect(container).toHaveClass('pt-4');
  });
});