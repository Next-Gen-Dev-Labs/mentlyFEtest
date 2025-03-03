# Frontend Developer Assessment - Mently

A technical assessment I implemented for the Frontend Developer position at Mently, focusing on building the program's dashboard page using Next.js.

## Tech Stack

- [Next.js 14](https://nextjs.org/):
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tiptap](https://tiptap.dev)
- [Reusables](https://reusables.vercel.app/) - [Toast](https://reusables.vercel.app/docs/components/notify) built by me 😎
- [Framer Motion](https://www.framer.com/motion/)
- [Vitest](https://vitest.dev/)

## Features

- Mock Authentication with protected routes
- Programs dashboard page
- Rich text editor integration
- Responsive design
- Unit testing
- Mobile Responsiveness

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

### Testing

```bash
npm test
# or
yarn test
# or
pnpm test
# or
bun run test
```

### Deploymennt

Deployed to Netlify: [https://fas-mently-fe-assessment.netlify.app](https://fas-mently-fe-assessment.netlify.app/dashboard/programs)
