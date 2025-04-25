import { render, screen, fireEvent } from '@testing-library/react';
import DashboardLayout from '@/components/layouts/dashboard-layout';

describe('DashboardLayout', () => {
  it('renders children content', () => {
    render(
      <DashboardLayout>
        <div>Test Content</div>
      </DashboardLayout>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders sidebar with toggle functionality', () => {
    render(
      <DashboardLayout>
        <div>Test Content</div>
      </DashboardLayout>
    );
    
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
  });

  it('renders header component', () => {
    render(
      <DashboardLayout>
        <div>Test Content</div>
      </DashboardLayout>
    );
    
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });
});