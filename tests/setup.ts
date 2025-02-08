import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'
vi.mock('next/router', () => ({
  useRouter: () => ({
    push: vi.fn(),
    pathname: '/',
    route: '/',
    asPath: '/',
    query: {},
  }),
}))

import { beforeAll } from 'vitest'

beforeAll(() => {
})

afterEach(() => {
  cleanup()
  vi.clearAllMocks()
}) 