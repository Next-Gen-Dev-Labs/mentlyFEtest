import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgramsList from '../component/ProgramsList';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />;
  },
}));

describe('ProgramsList Component', () => {
  test('renders programs list with header', () => {
    render(<ProgramsList />);
    
    expect(screen.getByText('Programs')).toBeInTheDocument();
    expect(screen.getByText('See all')).toBeInTheDocument();
  });

  test('renders filter options', () => {
    render(<ProgramsList />);
    
    // Check if filter options are rendered
    expect(screen.getByText('Filter')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  test('renders program cards with correct information', () => {
    render(<ProgramsList />);
    
    // Check if program titles are rendered
    expect(screen.getByText('Fundamentals of User interface & Experience')).toBeInTheDocument();
    expect(screen.getAllByText('Colour Hack Practical Group Call').length).toBe(2);
    
    // Check if program levels are rendered
    expect(screen.getByText('Beginner')).toBeInTheDocument();
    expect(screen.getAllByText('Group Call').length).toBe(2);
    
    // Check if hosted by information is rendered
    expect(screen.getByText('Hosted By: Faith Okolo')).toBeInTheDocument();
    expect(screen.getByText('Hosted By: Gal')).toBeInTheDocument();
  });

  test('renders different action buttons based on program type', () => {
    render(<ProgramsList />);
    
    // All programs should have "View Details" button
    expect(screen.getAllByText('View Details').length).toBe(3);
    
    expect(screen.getAllByText('Analyze').length).toBe(2);
    
    expect(screen.getByText('Assign Mentor')).toBeInTheDocument();
  });

  test('renders mentors indicator for the first program', () => {
    render(<ProgramsList />);
    
    expect(screen.getByText('Mentors')).toBeInTheDocument();
  });
});
