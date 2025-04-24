import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '@/components/dashboard/dashboard'; // Updated path

// Mock using the correct path
jest.mock('@/components/dashboard/sidebar', () => ({
  __esModule: true,
  default: () => <div data-testid="sidebar" />
}));

describe('Dashboard', () => {
  it('renders without crashing', () => {
    render(<Dashboard />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});