import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MentorsCard from '../component/MentorsCard';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} alt={props.alt} />,
}));

describe('MentorsCard Component', () => {
  test('renders card header correctly', () => {
    render(<MentorsCard />);
    
    // Check if the card title is rendered
    expect(screen.getByText('Mentors')).toBeInTheDocument();
  });

  test('displays mentor information correctly', () => {
    render(<MentorsCard />);
    
    // Check if mentor names are displayed
    expect(screen.getByText('Maxwell Smith')).toBeInTheDocument();
    expect(screen.getByText('Adeoti Samuel')).toBeInTheDocument();
    
    // Check if mentor roles are displayed
    const roles = screen.getAllByText('Product Designer');
    expect(roles).toHaveLength(2);
  });

  test('renders action buttons', () => {
    render(<MentorsCard />);
    
    // Check if message buttons are rendered for each mentor
    const messageButtons = screen.getAllByText('Message');
    expect(messageButtons).toHaveLength(2);
    
    // Check if "See all" button is rendered
    expect(screen.getByText('See all')).toBeInTheDocument();
  });

  test('renders add and menu buttons', () => {
    render(<MentorsCard />);
    
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(5); 
  });
});
