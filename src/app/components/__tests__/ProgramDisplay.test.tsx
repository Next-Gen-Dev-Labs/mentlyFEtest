import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgramDisplay from '../ProgramDisplay/ProgramDisplay';

describe('ProgramDisplay Component', () => {
  it('renders the component without crashing', () => {
    render(<ProgramDisplay />);
    // We'll find the h3 heading, ignoring the paragraph with the same text
    const headingElement = screen.getByRole('heading', {
      name: /mentorship program/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it('has an image with alt text "program-banner"', () => {
    render(<ProgramDisplay />);
    const bannerImage = screen.getByAltText('program-banner');
    expect(bannerImage).toBeInTheDocument();
  });
});
