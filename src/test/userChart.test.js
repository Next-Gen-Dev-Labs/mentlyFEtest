import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Add this import
import UsersChart from '@/components/userChart';
import { useMediaQuery } from 'react-responsive';

// Mock the react-responsive hook
jest.mock('react-responsive', () => ({
  useMediaQuery: jest.fn(),
}));

// Mock the recharts components
jest.mock('recharts', () => ({
  PieChart: jest.fn(({ children }) => <div data-testid="pie-chart">{children}</div>),
  Pie: jest.fn(({ children }) => <div data-testid="pie">{children}</div>),
  Cell: jest.fn(() => <div data-testid="cell" />),
}));

// Mock react-icons
jest.mock('react-icons/io', () => ({
  IoIosArrowDown: jest.fn(() => <div data-testid="arrow-down" />),
}));

describe('UsersChart Component', () => {
  const mockData = [
    { name: "Students", value: 200, color: "#62B2FD" },
    { name: "Mentors", value: 8, color: "#9BDFC4" },
    { name: "Programs", value: 22, color: "#F99BAB" },
    { name: "Others", value: 10, color: "#FFB44F" },
  ];
  const total = mockData.reduce((acc, item) => acc + item.value, 0);

  beforeEach(() => {
    useMediaQuery.mockImplementation(({ query }) => {
      if (query === "(min-width: 1280px)") return true;
      if (query === "(min-width: 1024px)") return true;
      return false;
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    render(<UsersChart />);
    
    // Check header section - be more specific with queries
    expect(screen.getByRole('heading', { name: 'Users' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument();
    expect(screen.getByTestId('arrow-down')).toBeInTheDocument();
    
    // Check total users display - be specific about which "Users" text
    expect(screen.getByText(total.toString())).toBeInTheDocument();
    expect(screen.getByText('Users', { selector: 'p.text-sm' })).toBeInTheDocument();
    
    // Check legend items
    mockData.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.value.toString())).toBeInTheDocument();
    });
  });

  it('displays the correct total count', () => {
    render(<UsersChart />);
    expect(screen.getByText(total.toString())).toBeInTheDocument();
  });

  it('renders all data items in the legend', () => {
    render(<UsersChart />);
    mockData.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.value.toString())).toBeInTheDocument();
    });
  });

  it('renders PieChart with correct props for large screens', () => {
    useMediaQuery.mockImplementation(({ query }) => query === "(min-width: 1280px)");
    render(<UsersChart />);
    expect(screen.getByTestId('pie-chart')).toBeInTheDocument();
  });

  it('renders PieChart with correct props for medium screens', () => {
    useMediaQuery.mockImplementation(({ query }) => query === "(min-width: 1024px)");
    render(<UsersChart />);
    expect(screen.getByTestId('pie-chart')).toBeInTheDocument();
  });

  it('renders PieChart with correct props for small screens', () => {
    useMediaQuery.mockImplementation(() => false);
    render(<UsersChart />);
    expect(screen.getByTestId('pie-chart')).toBeInTheDocument();
  });

  it('renders the correct number of Cell components', () => {
    render(<UsersChart />);
    expect(screen.getAllByTestId('cell')).toHaveLength(mockData.length);
  });

  it('applies the correct container styling', () => {
    const { container } = render(<UsersChart />);
    const chartContainer = container.firstChild;
    expect(chartContainer).toHaveClass('bg-[#E7DDFF4D]');
    expect(chartContainer).toHaveClass('rounded-xl');
    expect(chartContainer).toHaveClass('border');
    expect(chartContainer).toHaveClass('border-[#E1E7EC]');
  });
});