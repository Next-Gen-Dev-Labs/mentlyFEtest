/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ManageWidgetsDrawer from '../widgets';

// Mock next/image
jest.mock('next/image', () => ({
  default: ({ src, alt, className, ...props }: any) => (
    <img src={src} alt={alt} className={className} {...props} />
  ),
}));

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <div>{children}</div>,
}));

describe('ManageWidgetsDrawer', () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    onSave: jest.fn(),
    onReset: jest.fn(),
  };

  it('renders correctly when open', () => {
    render(<ManageWidgetsDrawer {...defaultProps} />);
    expect(screen.getByText('Manage Widget')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Programs')).toBeInTheDocument();
    expect(screen.getByText('Group Calls')).toBeInTheDocument();
    expect(screen.getByText('Mentors')).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    render(<ManageWidgetsDrawer {...defaultProps} isOpen={false} />);
    expect(screen.queryByText('Manage Widget')).not.toBeInTheDocument();
  });

  it('toggles widget visibility when checkbox is clicked', async () => {
    render(<ManageWidgetsDrawer {...defaultProps} />);
    const programsCheckbox = screen.getByLabelText(
      'Toggle visibility for Programs'
    );
    expect(programsCheckbox).toBeChecked();
    await userEvent.click(programsCheckbox);
    expect(programsCheckbox).not.toBeChecked();
  });

  it('calls onSave and onClose when Save Changes is clicked', async () => {
    render(<ManageWidgetsDrawer {...defaultProps} />);
    const saveButton = screen.getByText('Save Changes');
    await userEvent.click(saveButton);
    expect(defaultProps.onSave).toHaveBeenCalledWith(
      expect.arrayContaining([
        { name: 'Programs', visible: true },
        { name: 'Group Calls', visible: true },
        { name: 'Mentors', visible: true },
      ])
    );
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('calls onReset when Reset to Default is clicked', async () => {
    render(<ManageWidgetsDrawer {...defaultProps} />);
    const resetButton = screen.getByText('Reset to Default');
    await userEvent.click(resetButton);
    expect(defaultProps.onReset).toHaveBeenCalled();
  });

  it('closes the drawer when the close button is clicked', async () => {
    render(<ManageWidgetsDrawer {...defaultProps} />);
    const closeButton = screen.getByLabelText('Close drawer');
    await userEvent.click(closeButton);
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('closes the drawer when the overlay is clicked', async () => {
    render(<ManageWidgetsDrawer {...defaultProps} />);
    const overlay = screen.getByTestId('overlay');
    await userEvent.click(overlay);
    expect(defaultProps.onClose).toHaveBeenCalled();
  });
});
