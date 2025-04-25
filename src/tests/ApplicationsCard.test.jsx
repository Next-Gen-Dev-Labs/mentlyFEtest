import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ApplicationsCard from '../component/ApplicationsCard';

describe('ApplicationsCard Component', () => {
  test('renders card header correctly', () => {
    render(<ApplicationsCard />);
    
    // Check if the card title is rendered
    expect(screen.getByText('Applications')).toBeInTheDocument();
    expect(screen.getByText('See all')).toBeInTheDocument();
  });

  test('displays all applications with correct names and emails', () => {
    render(<ApplicationsCard />);
    
    // Check if applicant names are displayed
    const adesatiNames = screen.getAllByText('Adesati Samuel');
    expect(adesatiNames).toHaveLength(2);
    
    const maxwellNames = screen.getAllByText('Maxwell Smith');
    expect(maxwellNames).toHaveLength(2);
    
    // Check if emails are displayed
    const adesatiEmails = screen.getAllByText('adesati@email.com');
    expect(adesatiEmails).toHaveLength(2);
    
    const maxwellEmails = screen.getAllByText('maxwellsmith@email.com');
    expect(maxwellEmails).toHaveLength(2);
  });

  test('renders action buttons for each application', () => {
    render(<ApplicationsCard />);
    
    // Check if action buttons are rendered for each application
    const rejectButtons = screen.getAllByText('Reject');
    expect(rejectButtons).toHaveLength(4);
    
    const acceptButtons = screen.getAllByText('Accept');
    expect(acceptButtons).toHaveLength(4);
  });

  test('displays tags for each application', () => {
    render(<ApplicationsCard />);
    
    const cvTags = screen.getAllByText('CV');
    expect(cvTags).toHaveLength(4); 
    
    const portfolioTags = screen.getAllByText('Portfolio');
    expect(portfolioTags).toHaveLength(2);
    
    const githubTag = screen.getByText('GitHub');
    expect(githubTag).toBeInTheDocument(); 
  });

  test('renders applications in a container with proper styling', () => {
    render(<ApplicationsCard />);
    
    const borderedContainers = document.querySelectorAll('.border.rounded-lg');
    expect(borderedContainers.length).toBe(4); 
  });
});