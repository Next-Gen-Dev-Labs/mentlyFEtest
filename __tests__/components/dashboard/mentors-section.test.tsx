import { render, screen } from '@testing-library/react';
import MentorsSection from '@/components/dashboard/mentors-section';

describe('MentorsSection', () => {
  it('renders section title', () => {
    render(<MentorsSection />);
    expect(screen.getByText('Mentors')).toBeInTheDocument();
  });

  it('renders all mentors', () => {
    render(<MentorsSection />);
    
    expect(screen.getByText('Maxwell Smith')).toBeInTheDocument();
    expect(screen.getByText('Adeoye Samuel')).toBeInTheDocument();
  });

  it('displays mentor roles', () => {
    render(<MentorsSection />);
    const roles = screen.getAllByText('Product Designer');
    expect(roles).toHaveLength(2);
  });

  it('renders message buttons for each mentor', () => {
    render(<MentorsSection />);
    const messageButtons = screen.getAllByText('Message');
    expect(messageButtons).toHaveLength(2);
  });

  it('renders see all button', () => {
    render(<MentorsSection />);
    expect(screen.getByText('See all')).toBeInTheDocument();
  });
});