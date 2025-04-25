import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserStatsCard from '../component/UserStatsCard';

describe('UserStatsCard Component', () => {
  test('renders card header correctly', () => {
    render(<UserStatsCard />);
    
    expect(screen.getByRole('heading', { name: 'Users' })).toBeInTheDocument();
    expect(screen.getByText('All')).toBeInTheDocument();
  });

  test('renders total user count', () => {
    render(<UserStatsCard />);
    
    expect(screen.getByText('240')).toBeInTheDocument();
  });

  test('renders user categories with correct counts', () => {
    render(<UserStatsCard />);
    
    // Check if all user categories are displayed with correct counts
    expect(screen.getByText('Students')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
    
    expect(screen.getByText('Mentors')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
    
    expect(screen.getByText('Programs')).toBeInTheDocument();
    expect(screen.getByText('22')).toBeInTheDocument();
    
    expect(screen.getByText('Others')).toBeInTheDocument();
    expect(screen.getByText('18')).toBeInTheDocument();
  });

  test('renders donut chart SVG', () => {
    render(<UserStatsCard />);
    
    // Check if SVG element is rendered
    const svgElement = screen.getByRole('graphics-document');
    expect(svgElement).toBeInTheDocument();
    
    const paths = svgElement.querySelectorAll('path');
    expect(paths.length).toBeGreaterThanOrEqual(4); 

    const circle = svgElement.querySelector('circle');
    expect(circle).toBeInTheDocument();
  });
});
