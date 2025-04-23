// ManageWidget.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ManageWidget from '../components/ManageWidget';

describe('ManageWidget', () => {
  const mockInitialSettings = {
    programs: true,
    groupCalls: true,
    mentors: false,
    recentActivities: true,
    application: true,
    userStats: false,
    forum: false,
    programAnalysis: false,
  };
  
  const mockOnClose = jest.fn();
  const mockOnSave = jest.fn();

  test('renders nothing when isOpen is false', () => {
    render(
      <ManageWidget
        isOpen={false}
        onClose={mockOnClose}
        onSave={mockOnSave}
        initialSettings={mockInitialSettings}
      />
    );
    
    expect(screen.queryByText('Manage Widgets')).not.toBeInTheDocument();
  });

  test('renders modal with settings when isOpen is true', () => {
    render(
      <ManageWidget
        isOpen={true}
        onClose={mockOnClose}
        onSave={mockOnSave}
        initialSettings={mockInitialSettings}
      />
    );
    
    expect(screen.getByText('Manage Widgets')).toBeInTheDocument();
    
    // Check if checkboxes reflect the initial settings
    const programsCheckbox = screen.getByLabelText('Programs');
    const mentorsCheckbox = screen.getByLabelText('Mentors');
    
    expect(programsCheckbox).toBeChecked();
    expect(mentorsCheckbox).not.toBeChecked();
  });

  test('calls onSave with updated settings when Save button is clicked', () => {
    render(
      <ManageWidget
        isOpen={true}
        onClose={mockOnClose}
        onSave={mockOnSave}
        initialSettings={mockInitialSettings}
      />
    );
    
    // Toggle some checkboxes
    fireEvent.click(screen.getByLabelText('Mentors'));
    fireEvent.click(screen.getByLabelText('Programs'));
    
    // Click save
    fireEvent.click(screen.getByText('Save Changes'));
    
    // Check if onSave was called with updated settings
    expect(mockOnSave).toHaveBeenCalledWith({
      ...mockInitialSettings,
      programs: false, // toggled from true to false
      mentors: true,   // toggled from false to true
    });
  });

  test('calls onClose when Cancel button is clicked', () => {
    render(
      <ManageWidget
        isOpen={true}
        onClose={mockOnClose}
        onSave={mockOnSave}
        initialSettings={mockInitialSettings}
      />
    );
    
    fireEvent.click(screen.getByText('Cancel'));
    expect(mockOnClose).toHaveBeenCalled();
  });
});