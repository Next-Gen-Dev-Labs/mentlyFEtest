// jest.setup.ts

import '@testing-library/jest-dom'; // for additional jest-dom matchers

// 1) Mock IntersectionObserver so that components using it don’t throw errors in Jest
if (typeof window !== 'undefined') {
  if (!('IntersectionObserver' in window)) {
    class MockIntersectionObserver {
      readonly root: Element | null = null;
      readonly rootMargin: string = '';
      readonly thresholds: ReadonlyArray<number> = [];

      constructor(
        callback: IntersectionObserverCallback,
        options?: IntersectionObserverInit
      ) {
        // no-op
      }

      observe() {
        // no-op
      }
      unobserve() {
        // no-op
      }
      disconnect() {
        // no-op
      }
      takeRecords(): IntersectionObserverEntry[] {
        return [];
      }
    }

    (window as any).IntersectionObserver = MockIntersectionObserver;
  }
}
