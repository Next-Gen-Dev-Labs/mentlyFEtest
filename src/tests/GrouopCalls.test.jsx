import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GroupCalls from '../component/GroupCalls';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} alt={props.alt} />,
}));

describe('GroupCalls Component', () => {
  test('renders section header correctly', () => {
    render(<GroupCalls />);
    
    // Check if the section title is rendered
    expect(screen.getByText('Group Calls')).toBeInTheDocument();
    expect(screen.getByText('See all')).toBeInTheDocument();
  });

  test('renders correct number of call cards', () => {
    render(<GroupCalls />);
    
    // Check if all three call cards are rendered
    const callTitles = screen.getAllByText('Weekly Meeting - Product Demo Review with Testers');
    expect(callTitles).toHaveLength(3);
  });

  test('displays call status correctly', () => {
    render(<GroupCalls />);
    
    // Check if status badges are rendered correctly
    const ongoingStatuses = screen.getAllByText('Ongoing');
    expect(ongoingStatuses).toHaveLength(2);
    
    const upcomingStatus = screen.getByText('Upcoming');
    expect(upcomingStatus).toBeInTheDocument();
  });

  test('renders date and time information', () => {
    render(<GroupCalls />);
    
    // Check if date and time information is displayed
    const dates = screen.getAllByText('Mon, Jul 08, 2024');
    expect(dates).toHaveLength(3);
    
    const times = screen.getAllByText('10:00 - 11:30AM');
    expect(times).toHaveLength(3);
  });

  test('renders action buttons for each call', () => {
    render(<GroupCalls />);
    
    // Check if action buttons are rendered for each call
    const viewButtons = screen.getAllByText('View Participants');
    expect(viewButtons).toHaveLength(3);
    
    const joinButtons = screen.getAllByText('Join Now');
    expect(joinButtons).toHaveLength(3);
  });
});
