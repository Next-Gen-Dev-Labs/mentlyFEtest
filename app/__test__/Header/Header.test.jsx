import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../../components/Header/Header';
import { TOPNAV } from '../../constants/index';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} />
}));

describe('Header', () => {
  const defaultProps = {
    onPreviewToggle: jest.fn(),
    showPreviewButton: true
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Preview Button', () => {
    it('renders preview button when showPreviewButton is true', () => {
      render(<Header {...defaultProps} />);
      const previewButton = screen.getByRole('button', { name: /preview/i });
      expect(previewButton).toBeInTheDocument();
    });

    it('does not render preview button when showPreviewButton is false', () => {
      render(<Header {...defaultProps} showPreviewButton={false} />);
      const previewButton = screen.queryByRole('button', { name: /eye/i });
      expect(previewButton).not.toBeInTheDocument();
    });

    it('calls onPreviewToggle when preview button is clicked', () => {
      render(<Header {...defaultProps} />);
      const previewButton = screen.getByRole('button', { name: /preview/i });
      fireEvent.click(previewButton);
      expect(defaultProps.onPreviewToggle).toHaveBeenCalledTimes(1);
    });
  });

  describe('Notifications', () => {
    

    it('shows notification indicator', () => {
      render(<Header {...defaultProps} />);
      const indicator = document.querySelector('.bg-red-500');
      expect(indicator).toBeInTheDocument();
    });
  });

  describe('User Profile', () => {
    it('renders user profile section with correct information', () => {
      render(<Header {...defaultProps} />);
      const userImage = screen.getByAltText('User Image');
      const userName = screen.getByText(TOPNAV.name);
      const userPlan = screen.getByText(TOPNAV.plan);
      const upgradeText = screen.getByText(TOPNAV.upgrade);

      expect(userImage).toBeInTheDocument();
      expect(userName).toBeInTheDocument();
      expect(userPlan).toBeInTheDocument();
      expect(upgradeText).toBeInTheDocument();
    });

    it('renders dropdown icon', () => {
      render(<Header {...defaultProps} />);
      const dropdownIcon = screen.getByAltText('Dropdown Icon');
      expect(dropdownIcon).toBeInTheDocument();
    });
  });

  describe('Dropdown Functionality', () => {
    it('shows dropdown menu when dropdown icon is clicked', () => {
      render(<Header {...defaultProps} />);
      const dropdownIcon = screen.getByAltText('Dropdown Icon');
      
      // Initially dropdown should be hidden
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      
      // Click to show dropdown
      fireEvent.click(dropdownIcon);
      
      // Check if mobile dropdown content is visible
      const dropdownContent = screen.getAllByText(TOPNAV.name)[1]; // Second instance in dropdown
      expect(dropdownContent).toBeInTheDocument();
    });

    it('closes dropdown when clicking outside', () => {
      render(<Header {...defaultProps} />);
      const dropdownIcon = screen.getByAltText('Dropdown Icon');
      
      // Open dropdown
      fireEvent.click(dropdownIcon);
      
      // Click outside
      fireEvent.mouseDown(document.body);
      
      // Check if dropdown is closed
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    it('hides user info on mobile and shows in dropdown', () => {
      render(<Header {...defaultProps} />);
      const dropdownIcon = screen.getByAltText('Dropdown Icon');
      
      // Click to show dropdown
      fireEvent.click(dropdownIcon);
      
      // Check if user info is in dropdown for mobile
      const mobileUserInfo = screen.getAllByText(TOPNAV.name)[1];
      expect(mobileUserInfo).toBeInTheDocument();
      expect(mobileUserInfo.closest('div')).toHaveClass('flex flex-col');
    });

    
  });

  describe('Layout', () => {
    it('renders with correct layout classes', () => {
      const { container } = render(<Header {...defaultProps} />);
      const header = container.firstChild;
      expect(header).toHaveClass('flex', 'justify-between', 'items-center', 'p-4', 'border-b');
    });

    
  });
});