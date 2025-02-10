import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

import { beforeAll } from "vitest";

beforeAll(() => {});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
