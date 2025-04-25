import '@testing-library/jest-dom';
import { vi, beforeAll, afterAll, beforeEach, afterEach } from 'vitest';

// Mock next/navigation
vi.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
  }),
  useSearchParams: () => ({
    get: vi.fn(),
  }),
}));

// Set up global test environment
beforeAll(() => {
  // Add any global setup
});

afterEach(() => {
  vi.clearAllMocks();
});

afterAll(() => {
  vi.resetModules();
});