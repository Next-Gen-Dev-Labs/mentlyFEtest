import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProgramInformation from '../../components/ProgramInformation/ProgramInformation';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} />
}));

describe('ProgramInformation', () => {
  beforeEach(() => {
    render(<ProgramInformation />);
  });

  describe('Navigation', () => {
    it('renders back button with correct text', () => {
      const backButton = screen.getByText('Back to Home');
      expect(backButton).toBeInTheDocument();
    });

    
  });

  describe('Section Title Input', () => {
    it('renders section title input with correct placeholder', () => {
      const input = screen.getByPlaceholderText("Describe Section Title e.g What you stand to learn");
      expect(input).toBeInTheDocument();
    });

    it('allows typing in section title input', async () => {
      const input = screen.getByPlaceholderText("Describe Section Title e.g What you stand to learn");
      await userEvent.type(input, 'Test Section Title');
      expect(input).toHaveValue('Test Section Title');
    });

    it('displays helper text for section title', () => {
      const helperText = screen.getByText("Provide your preferred title for this section i.e What's in this Program for you?");
      expect(helperText).toBeInTheDocument();
    });
  });

  describe('Rich Text Editor', () => {
    it('renders formatting buttons', () => {
      expect(screen.getByText('B')).toBeInTheDocument();
      expect(screen.getByText('I')).toBeInTheDocument();
      expect(screen.getByText('U')).toBeInTheDocument();
    });

    it('renders textarea with correct placeholder', () => {
      const textarea = screen.getByPlaceholderText('Input Text');
      expect(textarea).toBeInTheDocument();
    });

    it('allows typing in textarea', async () => {
      const textarea = screen.getByPlaceholderText('Input Text');
      await userEvent.type(textarea, 'Test content');
      expect(textarea).toHaveValue('Test content');
    });

    it('displays helper text for rich text editor', () => {
      const helperText = screen.getByText(/Provide a clear and concise description\/information of your program/);
      expect(helperText).toBeInTheDocument();
    });
  });

  describe('Add Section Button', () => {
    it('renders add section button with correct text', () => {
      const addButton = screen.getByText('+ Add new section');
      expect(addButton).toBeInTheDocument();
    });

    it('displays maximum sections limit text', () => {
      const limitText = screen.getByText('(maximum number of sections to add is 3)');
      expect(limitText).toBeInTheDocument();
    });
  });

  describe('Show When Published Option', () => {
    it('renders checkbox with label', () => {
      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByLabelText('Show this section when Published');
      expect(checkbox).toBeInTheDocument();
      expect(label).toBeInTheDocument();
    });

    it('allows toggling checkbox', () => {
      const checkbox = screen.getByRole('checkbox');
      fireEvent.click(checkbox);
      expect(checkbox).toBeChecked();
      fireEvent.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });
  });

  describe('Program Information Sections', () => {
    it('renders program information sections', () => {
      expect(screen.getByText('Program Information Text 1')).toBeInTheDocument();
      expect(screen.getByText('Program Information Text 2')).toBeInTheDocument();
    });

    it('renders action buttons for each section', () => {
      const sections = screen.getAllByAltText('ContentIcons');
      expect(sections).toHaveLength(4); // 2 sections × 2 buttons each
    });
  });

  describe('Footer Actions', () => {
    it('renders go back button', () => {
      const goBackButton = screen.getByText('Go Back');
      expect(goBackButton).toBeInTheDocument();
    });

    it('renders save and proceed button', () => {
      const saveButton = screen.getByText('Save & Proceed');
      expect(saveButton).toBeInTheDocument();
    });
  });
});