# Mently - Mentorship Platform

## Overview

This is a Mently dashboard page

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **UI Components:** Custom components with Tailwind CSS
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Charts:** MUI X Charts
- **State Management:** React Context API
- **Testing:** Jest & React Testing Library

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository:

```bash
git clone https://github.com/masterprecie/mently-test.git
cd mently-test
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
src/
├── app/               # Next.js app router pages and routes
├── assets/            # Images, icons, and other static assets
├── components/        # Reusable React components
├── context/           # State Management
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
├── ui/                # Core UI components (Button, Modal, etc.)
├── utils/             # Utility functions and mock data
```

## Key Components

- **Sidebar:** Navigation menu with collapsible functionality
- **AppHeader:** Top navigation bar with user profile and notifications
- **GroupCallCard:** Cards displaying group call information
- **ProgramCard:** Cards displaying program information
- **ScrollableContainer:** Horizontal scrollable container with navigation arrows
- **Modal:** Customizable modal component for various dialogs
- **Button:** Reusable button component with various states

## Running Tests

The project includes comprehensive tests for all major components. To run the tests:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests for specific components
npm run test:sidebar
npm run test:header
npm run test:program-card
npm run test:group-call-card
npm run test:modal
npm run test:button
npm run test:scroll-container
```

### Test Coverage

Tests are organized by component in the `__tests__` folders. Each component test suite covers:

- Rendering
- User interactions
- Responsive behavior
- Conditional rendering
- Accessibility features

## Development Notes

### Mobile Responsiveness

- The sidebar automatically collapses on screens smaller than 768px
- Use the `useIsMobile` hook to detect mobile screens
- The layout adjusts to grid or list view based on screen size
