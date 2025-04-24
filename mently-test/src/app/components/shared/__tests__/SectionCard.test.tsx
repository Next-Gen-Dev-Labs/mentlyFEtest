import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import SectionCard from '../section-card';

describe('SectionCard', () => {
  const mockMenuClick = jest.fn();

  const defaultProps = {
    title: 'Test Section',
    seeAllRoute: '/see-all',
    onMenuClick: mockMenuClick,
    children: <div>Child Content</div>,
  };

  it('renders the title and children', () => {
    render(<SectionCard {...defaultProps} />);
    expect(screen.getByText('Test Section')).toBeInTheDocument();
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it("shows the 'See all' link when addButton is false", () => {
    render(<SectionCard {...defaultProps} />);
    const seeAllLink = screen.getByRole('link', { name: /see all/i });
    expect(seeAllLink).toHaveAttribute('href', '/see-all');
  });

  it("does not show 'See all' link and shows add button when addButton is true", () => {
    render(<SectionCard {...defaultProps} addButton />);
    expect(screen.queryByText('See all')).not.toBeInTheDocument();
    expect(
      screen.getByLabelText('Add item to Test Section')
    ).toBeInTheDocument();
  });

  it('calls onMenuClick when menu button is clicked', () => {
    render(<SectionCard {...defaultProps} />);
    const menuButton = screen.getByLabelText('Menu for Test Section');
    fireEvent.click(menuButton);
    expect(mockMenuClick).toHaveBeenCalled();
  });

  it('calls onMenuClick when add button is clicked', () => {
    render(<SectionCard {...defaultProps} addButton />);
    const addButton = screen.getByLabelText('Add item to Test Section');
    fireEvent.click(addButton);
    expect(mockMenuClick).toHaveBeenCalled();
  });
});
