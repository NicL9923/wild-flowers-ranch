import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import App from '../App'

let reducedMotion: boolean
let motionListeners: Set<(event: MediaQueryListEvent) => void>

beforeEach(() => {
  reducedMotion = false
  motionListeners = new Set()
  vi.stubGlobal('matchMedia', (query: string) => ({
    matches: query.includes('reduced-motion') ? reducedMotion : true,
    addEventListener: (_type: string, listener: (event: MediaQueryListEvent) => void) =>
      motionListeners.add(listener),
    removeEventListener: (_type: string, listener: (event: MediaQueryListEvent) => void) =>
      motionListeners.delete(listener),
  }))
})

describe('Golden Hour landing page', () => {
  it('introduces the family and links to their section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /A little wild\..*A lot of home\./,
    )
    for (const name of ['Kim', 'Isa', 'Maya', 'Nicolas']) {
      expect(screen.getByRole('heading', { name, level: 3 })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: /Meet our family/ })).toHaveAttribute('href', '#family')
  })

  it('toggles blue hour independently of paused motion', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Pause motion' }))
    await user.click(screen.getByRole('button', { name: 'Golden hour' }))
    expect(screen.getByRole('button', { name: 'Blue hour' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Resume motion' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Blue hour' }))
    await user.click(screen.getByRole('button', { name: 'Resume motion' }))
    expect(screen.getByRole('button', { name: 'Golden hour' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
    expect(screen.getByRole('button', { name: 'Pause motion' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
  })

  it('honors reduced motion at startup and when the preference changes', async () => {
    reducedMotion = true
    const { unmount } = render(<App />)
    expect(screen.getByRole('button', { name: 'Reduced motion' })).toBeDisabled()
    act(() =>
      motionListeners.forEach((listener) => listener({ matches: false } as MediaQueryListEvent)),
    )
    const user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: 'Pause motion' }))
    act(() =>
      motionListeners.forEach((listener) => listener({ matches: true } as MediaQueryListEvent)),
    )
    expect(screen.getByRole('button', { name: 'Reduced motion' })).toBeDisabled()
    act(() =>
      motionListeners.forEach((listener) => listener({ matches: false } as MediaQueryListEvent)),
    )
    expect(screen.getByRole('button', { name: 'Resume motion' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    unmount()
    expect(motionListeners.size).toBe(0)
  })
})
