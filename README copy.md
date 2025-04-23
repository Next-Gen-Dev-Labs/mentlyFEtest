# Techrity Dashboard

A responsive dashboard interface for Techrity mentors built with Next.js and Tailwind CSS.

![Techrity Dashboard](https://sjc.microlink.io/rdA5X6yrOpVCZjYDEpI2wp9hhJHmUDe7ErkE8-SGrP56e5V4uta01Ljcx5ZGL6S1VytS7VR6f7idp3qTtWeA2A.jpeg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Component Architecture](#component-architecture)
- [Responsive Design](#responsive-design)
- [Animation Strategy](#animation-strategy)
- [State Management](#state-management)
- [Testing](#testing)
- [Deployment](#deployment)
- [Performance Considerations](#performance-considerations)
- [Future Improvements](#future-improvements)
- [Design Reference](#design-reference)

## Overview

The Techrity Dashboard is a responsive web application built with Next.js and React, designed to provide mentors with a comprehensive interface for managing programs, group calls, applications, and user interactions. The dashboard features a collapsible sidebar, responsive layouts for various screen sizes, and interactive components with smooth animations powered by Framer Motion.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Collapsible Sidebar**: Toggle between expanded and collapsed states
- **Mobile-Specific Sidebar**: Slide-in sidebar for mobile devices
- **Widget Management**: Customize which widgets appear on the dashboard
- **Interactive Components**: Smooth animations and transitions
- **Data Visualization**: User statistics with visual charts
- **Program Management**: View and manage educational programs
- **Group Calls**: Monitor upcoming and ongoing group calls
- **Application Processing**: Review and process mentor/student applications
- **User Management**: View user statistics and mentor profiles

## Project Structure

\`\`\`
techrity-dashboard/
├── app/                      # Next.js App Router
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page (Dashboard entry)
├── components/               # React components
│   ├── applications-section.tsx
│   ├── dashboard.tsx         # Main dashboard component
│   ├── group-calls-section.tsx
│   ├── header.tsx
│   ├── manage-widget-panel.tsx
│   ├── mentors-section.tsx
│   ├── programs-section.tsx
│   ├── recent-activities-section.tsx
│   ├── sidebar.tsx
│   ├── users-section.tsx
│   └── welcome-bar.tsx
├── __tests__/                # Test files
│   ├── dashboard.test.tsx
│   └── sidebar.test.tsx
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
├── tailwind.config.ts        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
\`\`\`

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn
- Git

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/techrity-dashboard.git
cd techrity-dashboard
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

### Running Locally

1. Start the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

2. Open [http://localhost:3000](http://localhost:3000) in your browser to see the dashboard.

## Component Architecture

### Dashboard Component (`components/dashboard.tsx`)

The Dashboard component serves as the main container for the application, orchestrating the layout and state management for the entire dashboard.

**Key Features:**
- Manages sidebar collapse state
- Handles mobile responsiveness
- Controls widget management panel visibility
- Orchestrates layout of all dashboard sections

**State Management:**
\`\`\`typescript
// Main state variables
const [isManageWidgetOpen, setIsManageWidgetOpen] = useState(false)
const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
const [isMounted, setIsMounted] = useState(false)
const [isMobile, setIsMobile] = useState(false)
\`\`\`

### Sidebar Component (`components/sidebar.tsx`)

The Sidebar provides navigation for the dashboard with collapsible functionality and mobile-specific behavior.

**Key Features:**
- Collapsible interface with smooth animations
- Mobile-specific slide-in behavior
- Active state highlighting for current section
- Classic mode toggle switch
- Help section with quick access to support

### Manage Widget Panel (`components/manage-widget-panel.tsx`)

A slide-in panel that allows users to customize which widgets appear on their dashboard.

**Key Features:**
- Slide-in animation from right side
- Widget toggle controls
- Save and reset functionality
- Backdrop overlay with click-to-close

### Section Components

The dashboard is composed of several section components, each responsible for displaying specific data:

- **WelcomeBar**: Personalized greeting and profile update button
- **ProgramsSection**: Displays program cards with filtering options
- **GroupCallsSection**: Shows upcoming and ongoing group calls
- **ApplicationsSection**: Lists pending applications from mentors and students
- **MentorsSection**: Displays active mentors with quick message access
- **UsersSection**: Shows user statistics with a visual chart
- **RecentActivitiesSection**: Lists recent platform activities

## Responsive Design

The dashboard implements a comprehensive responsive design strategy:

### Mobile-First Approach

- Base styles are designed for mobile devices
- Media queries enhance the layout for larger screens
- Grid system adapts from single column to multi-column layouts

### Responsive Breakpoints

\`\`\`css
/* Mobile (default) */
/* Small screens (640px and up) */
@media (min-width: 640px) { ... }
/* Medium screens (768px and up) */
@media (min-width: 768px) { ... }
/* Large screens (1024px and up) */
@media (min-width: 1024px) { ... }
\`\`\`

### Mobile-Specific Features

- Collapsible sidebar that slides in from left
- Hamburger menu in header for sidebar toggle
- Simplified layouts with stacked sections
- Touch-friendly button sizes and spacing

## Animation Strategy

Animations are implemented using Framer Motion with a focus on performance and user experience:

### Animation Principles

- **Purpose**: Animations serve functional purposes (transitions, feedback)
- **Performance**: Optimized for 60fps, using hardware acceleration
- **Consistency**: Similar elements use consistent animation patterns
- **Subtlety**: Animations enhance rather than distract from content

### Key Animation Patterns

\`\`\`typescript
// Fade and slide in
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 0.1 }}

// Slide in from side
initial={{ x: "100%" }}
animate={{ x: 0 }}
exit={{ x: "100%" }}
transition={{ type: "spring", damping: 25, stiffness: 200 }}

// Scale on hover
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
\`\`\`

## State Management

The application uses React's built-in useState and useEffect hooks for state management:

### Global State

- Sidebar collapse state
- Mobile detection
- Widget panel visibility

### Component-Level State

- Widget visibility preferences
- Toggle states
- Animation states

### State Propagation

Props are passed down from parent to child components with clear naming conventions:

\`\`\`typescript
<Sidebar
  isCollapsed={isSidebarCollapsed}
  onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
  isMobile={isMobile}
  isMobileSidebarOpen={isMobileSidebarOpen}
  onMobileToggle={toggleMobileSidebar}
/>
\`\`\`

## Testing

The project includes unit tests for key components using Jest and React Testing Library:

### Running Tests

\`\`\`bash
npm run test
# or
yarn test
\`\`\`

### Test Files

- `__tests__/dashboard.test.tsx`: Tests for the main Dashboard component
- `__tests__/sidebar.test.tsx`: Tests for the Sidebar component

## Deployment

### Production Build

1. Create a production build:
\`\`\`bash
npm run build
# or
yarn build
\`\`\`

2. Start the production server:
\`\`\`bash
npm run start
# or
yarn start
\`\`\`

### Deployment to Vercel

1. Install Vercel CLI:
\`\`\`bash
npm install -g vercel
\`\`\`

2. Deploy to Vercel:
\`\`\`bash
vercel
\`\`\`

3. For production deployment:
\`\`\`bash
vercel --prod
\`\`\`

### Environment Variables

No environment variables are required for basic functionality. For image optimization, you may need to configure the following in your deployment platform:

- `NEXT_PUBLIC_IMAGE_DOMAINS`: Comma-separated list of image domains

## Performance Considerations

### Code Splitting

The application uses Next.js's automatic code splitting to reduce initial load times:

- Each page and component is loaded only when needed
- Dynamic imports can be used for larger components

### Animation Performance

Animations are optimized for performance:

- Hardware-accelerated properties (transform, opacity) are used when possible
- Animations are disabled for users who prefer reduced motion
- Staggered animations prevent layout thrashing

### Image Optimization

Next.js Image component is used for automatic image optimization:

- Images are served in modern formats (WebP, AVIF)
- Images are automatically sized for different devices
- Lazy loading is applied for off-screen images

## Future Improvements

### State Management

For larger scale applications, consider implementing:

- Context API for global state
- Redux or Zustand for complex state management
- Server state management with React Query or SWR

### Authentication

Implement authentication with:

- NextAuth.js for social and email authentication
- JWT or session-based authentication
- Role-based access control

### Data Fetching

Implement real data fetching:

- Server Components for data fetching
- API routes for backend communication
- SWR or React Query for client-side data fetching

### Accessibility Enhancements

- Implement keyboard navigation
- Add screen reader announcements for dynamic content
- Ensure proper focus management

## Design Reference

This dashboard implementation is based on the Mently Frontend design:
[Figma Design](https://www.figma.com/design/TJoaUZPIgzakOHleCtJeNb/Mently-Frontend-Test?node-id=1391-468&p=f&t=HJRdqMvwkdr32vG7-0)

---

## License

[MIT](LICENSE)

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
