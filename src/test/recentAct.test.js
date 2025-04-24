import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecentActivities from '@/components/recentAct';


// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}));

// Mock the Header component
jest.mock('../components/reusables/menu.js', () => ({
  __esModule: true,
  default: ({ head }) => <h2 data-testid="header">{head}</h2>,
}));

// Mock the recent activities data
jest.mock('@/data', () => ({
  recent: [
    {
      id: 1,
      title: 'Project Update',
      activity: 'Team completed the sprint review',
      time: '2 hours ago',
      image: '/path/to/image1.jpg',
    },
    {
      id: 2,
      title: 'New Member',
      activity: 'John joined the design team',
      time: '5 hours ago',
      image: '/path/to/image2.jpg',
    },
  ],
}));

describe('RecentActivities Component', () => {
  beforeEach(() => {
    render(<RecentActivities />);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('renders with correct container styling', () => {
    const container = screen.getByTestId('header').parentElement;
    expect(container).toHaveClass('bg-white');
    expect(container).toHaveClass('rounded-xl');
    expect(container).toHaveClass('w-full');
    expect(container).toHaveClass('md:w-[49%]');
    expect(container).toHaveClass('lg:w-[280px]');
    expect(container).toHaveClass('xl:w-[320px]');
    expect(container).toHaveClass('p-6');
    expect(container).toHaveClass('space-y-[30px]');
  });

  it('displays the correct header', () => {
    expect(screen.getByTestId('header')).toHaveTextContent('Recent Activities');
  });

  it('renders all recent activity items', () => {
    const activities = screen.getAllByTestId('activity-item');
    expect(activities.length).toBe(2);
  });

  it('displays correct activity information', () => {
    expect(screen.getByText('Project Update')).toBeInTheDocument();
    expect(screen.getByText('Team completed the sprint review')).toBeInTheDocument();
    expect(screen.getByText('2 hours ago')).toBeInTheDocument();
    
    expect(screen.getByText('New Member')).toBeInTheDocument();
    expect(screen.getByText('John joined the design team')).toBeInTheDocument();
    expect(screen.getByText('5 hours ago')).toBeInTheDocument();
  });

  it('renders activity images correctly', () => {
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(2);
    expect(images[0]).toHaveAttribute('src', '/path/to/image1.jpg');
    expect(images[0]).toHaveAttribute('alt', 'Project Update');
    expect(images[1]).toHaveAttribute('src', '/path/to/image2.jpg');
    expect(images[1]).toHaveAttribute('alt', 'New Member');
  });

  it('has proper spacing between elements', () => {
    const activityList = screen.getByTestId('header').nextElementSibling;
    expect(activityList).toHaveClass('flex');
    expect(activityList).toHaveClass('flex-col');
    expect(activityList).toHaveClass('gap-4');
  });

  it('applies correct text styling', () => {
    const titles = screen.getAllByTestId('activity-title');
    const activities = screen.getAllByTestId('activity-description');
    const times = screen.getAllByTestId('activity-time');
    
    titles.forEach(title => {
      expect(title).toHaveClass('text-sm');
      expect(title).toHaveClass('font-bold');
      expect(title).toHaveClass('mb-1.5');
    });
    
    activities.forEach(activity => {
      expect(activity).toHaveClass('text-xs');
      expect(activity).toHaveClass('text-[#707991]');
      expect(activity).toHaveClass('mb-2');
    });
    
    times.forEach(time => {
      expect(time).toHaveClass('text-xs');
      expect(time).toHaveClass('text-[#707991]');
    });
  });
});