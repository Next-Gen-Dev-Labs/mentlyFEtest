import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { SIDENAV } from '../../constants/index';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} />
}));

describe('Sidebar', () => {
  const defaultProps = {
    isExpanded: false,
    isMobile: false,
    onToggleExpand: jest.fn()
  };

  it('renders with correct width classes when collapsed on desktop', () => {
    const { container } = render(<Sidebar {...defaultProps} />);
    const aside = container.querySelector('aside');
    expect(aside).toHaveClass('w-20');
  });

  it('renders with correct width classes when expanded on desktop', () => {
    const { container } = render(<Sidebar {...defaultProps} isExpanded={true} />);
    const aside = container.querySelector('aside');
    expect(aside).toHaveClass('w-64');
  });

  it('renders with correct width classes on mobile', () => {
    const { container } = render(<Sidebar {...defaultProps} isMobile={true} />);
    const aside = container.querySelector('aside');
    expect(aside).toHaveClass('w-64');
  });

  it('shows logo when expanded', () => {
    render(<Sidebar {...defaultProps} isExpanded={true} />);
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
  });

  it('hides logo when collapsed', () => {
    render(<Sidebar {...defaultProps} />);
    const logo = screen.queryByAltText('Logo');
    expect(logo).not.toBeInTheDocument();
  });

  it('renders navigation items', () => {
    render(<Sidebar {...defaultProps} />);
    SIDENAV.navitems.forEach(item => {
      expect(screen.getByAltText(item.name)).toBeInTheDocument();
    });
  });

  it('calls onToggleExpand when toggle button is clicked', () => {
    render(<Sidebar {...defaultProps} />);
    const toggleButton = screen.getByAltText('sidebar');
    fireEvent.click(toggleButton);
    expect(defaultProps.onToggleExpand).toHaveBeenCalled();
  });

  it('renders help section', () => {
    render(<Sidebar {...defaultProps} />);
    expect(screen.getByAltText('Help')).toBeInTheDocument();
    expect(screen.getByText(SIDENAV.help.link)).toBeInTheDocument();
  });

  it('renders mode toggle switch', () => {
    render(<Sidebar {...defaultProps} isExpanded={true} />);
    expect(screen.getByText(SIDENAV.mode)).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});