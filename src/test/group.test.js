import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Group from '@/components/group';


// Update the mock to render actual group names
jest.mock('../components/cards/groupCard.js', () => ({
    __esModule: true,
    default: ({ group }) => (
      <div data-testid="group-card">
        <span>{group.name}</span>
      </div>
    ),
  }));

jest.mock('../components/reusables/menu.js', () => ({
  __esModule: true,
  default: ({ head }) => <h2 data-testid="header">{head}</h2>,
}));

// Mock the groups data
jest.mock('@/data', () => ({
  groups: [
    { id: 1, name: 'Design Team', members: 5 },
    { id: 2, name: 'Development Team', members: 8 },
    { id: 3, name: 'Marketing Team', members: 4 }
  ]
}));

describe('Group Component', () => {
  beforeEach(() => {
    render(<Group />);
  });

  it('renders with correct container styling', () => {
    const container = screen.getByTestId('header').parentElement;
    expect(container).toHaveClass('bg-white');
    expect(container).toHaveClass('rounded-[10.52px]');
    expect(container).toHaveClass('w-full');
    expect(container).toHaveClass('py-1.5');
    expect(container).toHaveClass('px-3');
    expect(container).toHaveClass('xl:px-4');
    expect(container).toHaveClass('space-y-3.5');
  });

  it('displays the correct header', () => {
    expect(screen.getByTestId('header')).toHaveTextContent('Group calls');
  });

  it('renders all group cards from the data', () => {
    const groupCards = screen.getAllByTestId('group-card');
    expect(groupCards.length).toBe(3);
    expect(screen.getByText('Design Team')).toBeInTheDocument();
    expect(screen.getByText('Development Team')).toBeInTheDocument();
    expect(screen.getByText('Marketing Team')).toBeInTheDocument();
  });

  it('has correct horizontal scrolling layout for cards', () => {
    const cardsContainer = screen.getByTestId('header').nextSibling;
    expect(cardsContainer).toHaveClass('flex');
    expect(cardsContainer).toHaveClass('gap-3');
    expect(cardsContainer).toHaveClass('overflow-x-scroll');
    expect(cardsContainer).toHaveClass('w-full');
  });

  it('has proper vertical spacing between elements', () => {
    const container = screen.getByTestId('header').parentElement;
    expect(container).toHaveClass('space-y-3.5');
  });
});