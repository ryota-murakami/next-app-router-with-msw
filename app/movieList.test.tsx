import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MovieList } from './movieList'

describe('<MovieList />', () => {
  test('Success render', () => {
    render(<MovieList />)
    const fetchButton = screen.getByText(/Fetch movies/i)
    expect(fetchButton).toBeInTheDocument()
  })

  test('Success fetch movie titles when press button', async () => {
    const user = userEvent.setup()
    render(<MovieList />)
    const fetchButton = screen.getByRole('button')
    await user.click(fetchButton)

    expect(screen.getByText(/The Lord of The Rings/)).toBeInTheDocument()
    expect(screen.getByText(/The Matrix/)).toBeInTheDocument()
    expect(
      screen.getByText(/Star Wars: The Empire Strikes Back/),
    ).toBeInTheDocument()
  })
})
