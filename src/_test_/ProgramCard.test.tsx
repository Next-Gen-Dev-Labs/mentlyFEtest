// ProgramCard.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgramCard from '../components/ProgramCard';

describe('ProgramCard', () => {
  const mockProgram = {
    id: 1,
    title: 'Test Program',
    type: 'Program',
    status: 'Ongoing',
    image: '/test-image.jpg',
    description: 'Test description',
    mentors: ['/avatar1.jpg', '/avatar2.jpg'],
    students: 15,
    duration: '3 Months'
  };

  test('renders program details correctly', () => {
    render(<ProgramCard program={mockProgram} />);
    
    expect(screen.getByText('Test Program')).toBeInTheDocument();
    expect(screen.getByText('Program')).toBeInTheDocument();
    expect(screen.getByText('Ongoing')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('15')).toBeInTheDocument();
    expect(screen.getByText('3 Months')).toBeInTheDocument();
  });

  test('displays correct number of mentor avatars', () => {
    render(<ProgramCard program={mockProgram} />);
    
    // This would need to be adjusted based on how you're rendering the avatars
    const avatars = screen.getAllByRole('img');
    expect(avatars.length).toBe(2);
  });
});