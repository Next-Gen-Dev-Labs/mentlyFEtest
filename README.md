# Frontend Developer Assessment - Mently

A technical assessment implementation by me for the Frontend Developer position at Mently, focusing on building a programs page dashboard using Next.js.

## Tech Stack

- [Next.js 14](https://nextjs.org/):
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Reusables](https://reusables.vercel.app/) - [Toast](https://reusables.vercel.app/docs/components/notify) built by me 😎
- [Framer Motion](https://www.framer.com/motion/)
- [Vitest](https://vitest.dev/)

## Features

- Mock Authentication with protected routes
- Program management dashboard
- Rich text editor integration
- Responsive design
- Unit testing coverage
- Mobile optimization

## Project Structure

```
├── app/                # Next.js app directory
├── assets/             # Static assets
├── components/         # React components
│   ├── ui/             # Reusable UI components
│   └── editor/         # Rich text editor components
|   └── programs/       # Program components
├── data/               # Mock data
├── constants/          # Configuration and constants
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── _tests_/            # Unit tests
└── middleware/         # Middleware

```

## Setup

### Prerequisites

- Node.js 18+
- Package manager (npm/yarn/pnpm/bun)

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Access the application at [http://localhost:3000](http://localhost:3000)

Deployed on Netlify: [Link](https://fas-mently-fe-assessment.netlify.app/dashboard/programs)

### Testing

```bash
npm test
# or
yarn test
# or
pnpm test
# or
bun test
```

## Note

This is a technical assessment project for Mently. All implementation details are confidential.
