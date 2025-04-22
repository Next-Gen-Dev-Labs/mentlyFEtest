import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgramPreview from '../../components/ProgramPreview/ProgramPreview';
import { Preview } from '../../constants/index';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} />
}));

// Mock the Preview constants
jest.mock('../../constants/index', () => ({
  Preview: {
    icon1: '/mock/icon1.png',
    icon2: '/mock/icon2.png',
    icon3: '/mock/icon3.png',
    icon4: '/mock/icon4.png',
    icon5: '/mock/icon5.png',
    icon6: '/mock/icon6.png',
    main1: '/mock/main1.png',
    main2: '/mock/main2.png',
    main3: '/mock/main3.png',
  }
}));

describe('ProgramPreview', () => {
  beforeEach(() => {
    render(<ProgramPreview />);
  });

  

  describe('Banner Section', () => {
    it('renders the banner image', () => {
      const banner = screen.getByAltText('Preview Card');
      expect(banner).toBeInTheDocument();
    });
  });

  describe('Program Details Section', () => {
    it('renders the program description', () => {
      const description = screen.getByText(/UI\/UX Design check ins with faith is a way for beginners/);
      expect(description).toBeInTheDocument();
    });

    

    it('renders program date with icon', () => {
      expect(screen.getByText('21/4/2024-21/5/2024')).toBeInTheDocument();
      const dateIcon = screen.getAllByAltText('ContentIcons')[1];
      expect(dateIcon).toHaveAttribute('src', Preview.main2);
    });

    it('renders program location with icon', () => {
      expect(screen.getByText('In Person')).toBeInTheDocument();
      const locationIcon = screen.getAllByAltText('ContentIcons')[2];
      expect(locationIcon).toHaveAttribute('src', Preview.main3);
    });
  });

  describe('Program Information Section', () => {
    it('renders the first information section title', () => {
      expect(screen.getByText('Program Information Text')).toBeInTheDocument();
    });

    it('renders six content items with icons in the grid', () => {
      const contentItems = screen.getAllByText('Content');
      expect(contentItems).toHaveLength(12);

      const icons = screen.getAllByAltText('ContentIcons');
      expect(icons.length).toBeGreaterThanOrEqual(9);
    });

    it('verifies icons have correct src attributes', () => {
      const icons = screen.getAllByAltText('ContentIcons');
      expect(icons[3]).toHaveAttribute('src', Preview.icon1);
      expect(icons[4]).toHaveAttribute('src', Preview.icon2);
      expect(icons[5]).toHaveAttribute('src', Preview.icon3);
      expect(icons[6]).toHaveAttribute('src', Preview.icon4);
      expect(icons[7]).toHaveAttribute('src', Preview.icon5);
      expect(icons[8]).toHaveAttribute('src', Preview.icon6);
    });
  });

  describe('Program Information Text 2 Section', () => {
    it('renders the second information section title', () => {
      expect(screen.getByText('Program Information Text 2')).toBeInTheDocument();
    });

    it('renders six bullet points with content', () => {
      const bulletPoints = screen.getAllByText('Content').slice(6);
      expect(bulletPoints).toHaveLength(6);
    });

    
  });

  describe('Styling and Layout', () => {
    

    it('has proper spacing classes', () => {
      expect(document.querySelector('.p-6')).toBeInTheDocument();
      expect(document.querySelector('.mb-6')).toBeInTheDocument();
      expect(document.querySelector('.mt-8')).toBeInTheDocument();
    });

    
  });
});