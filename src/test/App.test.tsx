import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import App from '../App'

describe('App', () => {
  it('renders the ranch title', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Wild Flowers')
  })

  it('switches tabs when clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /^02\s*visit$/i }))
    expect(screen.getByText(/come walk/i)).toBeInTheDocument()
  })
})
