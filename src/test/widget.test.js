import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Widget from '@/components/layouts/widget';


// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}));

// Mock the icon asset
jest.mock('@/assets/icons/Vector (1).svg', () => '/path/to/icon.svg');

// Mock react-icons
jest.mock('react-icons/io', () => ({
  IoMdClose: jest.fn((props) => <div data-testid="close-icon" {...props} />),
}));

describe('Widget Component', () => {
  const mockOnClose = jest.fn();
  const widgetData = [
    { id: 1, name: "Programs" },
    { id: 2, name: "Group Calls" },
    { id: 3, name: "Mentors" },
    { id: 4, name: "Recent Activities" },
    { id: 5, name: "Application" },
    { id: 6, name: "Earnings" },
    { id: 7, name: "Forum" },
    { id: 8, name: "Program Analysis" },
  ];

  beforeEach(() => {
    render(<Widget onClose={mockOnClose} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders with correct container styling', () => {
    const container = screen.getByRole('dialog');
    expect(container).toHaveClass('bg-white');
    expect(container).toHaveClass('w-full');
    expect(container).toHaveClass('px-3');
    expect(container).toHaveClass('xl:px-11');
    expect(container).toHaveClass('overflow-y-scroll');
    expect(container).toHaveClass('h-screen');
  });

  it('renders close button and calls onClose when clicked', () => {
    const closeButton = screen.getByTestId('close-icon').parentElement;
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('displays correct header content', () => {
    expect(screen.getByText('Manage Widget')).toBeInTheDocument();
    expect(screen.getByText('Manage Widget')).toHaveClass('text-[#6F01D0]');
    expect(screen.getByText('Manage Widget')).toHaveClass('text-3xl');
    
    expect(screen.getByText(/Personalize your dashboard/)).toBeInTheDocument();
    expect(screen.getByText(/Personalize your dashboard/)).toHaveClass('text-[#374557]');
  });

  it('renders all widget items from data', () => {
    widgetData.forEach(widget => {
      const widgetItem = screen.getByTestId(`widget-item-${widget.id}`);
      expect(widgetItem).toBeInTheDocument();
      expect(screen.getByText(widget.name)).toBeInTheDocument();
    });
  });

  it('renders icons and checkboxes for each widget', () => {
    const icons = screen.getAllByAltText('icon');
    const checkboxes = screen.getAllByRole('checkbox');
    
    expect(icons.length).toBe(widgetData.length);
    expect(checkboxes.length).toBe(widgetData.length);
    
    icons.forEach(icon => {
      expect(icon).toHaveAttribute('src', '/path/to/icon.svg');
    });
    
    checkboxes.forEach(checkbox => {
        expect(checkbox).toHaveClass('form-checkbox');
        expect(checkbox).toHaveAttribute('readOnly');
      });
  });

  it('renders action buttons with correct styling', () => {
    const saveButton = screen.getByRole('button', { name: 'Save Changes' });
    const resetButton = screen.getByRole('button', { name: 'Reset to Default' });
    
    expect(saveButton).toHaveClass('bg-[#6F01D0]');
    expect(saveButton).toHaveClass('text-white');
    
    expect(resetButton).toHaveClass('border-[#6F01D0]');
    expect(resetButton).toHaveClass('text-[#6F01D0]');
  });

  it('has proper spacing between elements', () => {
    const mainContent = screen.getByTestId('widget-content');
    expect(mainContent).toHaveClass('space-y-7');
    
    const widgetList = screen.getByRole('list');
    expect(widgetList).toHaveClass('space-y-2');
  });

  it('applies correct text styling to widget items', () => {
    const widgetTitles = screen.getAllByTestId('widget-title');
    widgetTitles.forEach(title => {
      expect(title).toHaveClass('text-sm');
      expect(title).toHaveClass('font-bold');
      expect(title).toHaveClass('text-[#4F4F4F]');
    });
  });
});