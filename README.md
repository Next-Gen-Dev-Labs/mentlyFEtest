

# Techrity Dashboard

Techrity Dashboard is a responsive web application designed for the Techrity Foundation. It provides an intuitive interface for managing programs, users, and activities, with features like user role management, notifications, and search functionality.

View [https://mently-test-61hm.vercel.app
] the deployed version.
---

## Features

- **Interactive Sidebar Navigation**: Easily navigate between different sections of the dashboard.
- **Dashboard Welcome Banner**: Displays a personalized greeting for users.
- **Program and Group Call Cards**: View, join, or manage programs and group calls.
- **User Role Management**: Assign roles (Admin, Moderator, User) to users.
- **Notifications System**: View recent updates and alerts.
- **Search Functionality**: Quickly search for programs, users, or activities.
- **User Statistics Visualization**: Interactive charts for visualizing user data.
- **Recent Activities Feed**: Displays notifications with timestamps.
- **Responsive Design**: Fully optimized for all device sizes.

---

## Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React

---

## Folder Structure

```
.
├── app/                     # Application pages and layouts
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main dashboard page
│   └── coming-soon/         # Coming soon page
├── components/              # Reusable components
│   ├── dashboard/           # Dashboard-specific components
│   │   ├── UserRoleManager.tsx  # User role management feature
│   │   ├── Notifications.tsx    # Notifications system
│   │   └── SearchBar.tsx        # Search functionality
│   ├── ui/                  # UI components (e.g., buttons, cards)
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions and libraries
├── public/                  # Static assets (e.g., images)
├── .next/                   # Build output (generated)
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies and scripts
```

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the dashboard.

---

## Building for Production

To build the project for production, run:

```bash
npm run build
```

The optimized output will be available in the .next directory.

---


## Removed Features

- **Light/Dark Mode**: The light/dark mode toggle has been removed for simplicity.

---

