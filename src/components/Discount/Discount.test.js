import React from 'react'
import { render } from 'react-testing-library'
import Discount from './Discount'

describe('Discount', () => {
  it('renders without props', () => {
    render(<Discount />)
  })

  const props = {
    name: 'Item',
    oldPrice: 10.5,
    newPrice: 5.5,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg'
  }

  it('renders', () => {
    const { queryByText } = render(<Discount {...props} />)

    expect(queryByText(props.name).innerHTML).toBe(props.name)
    expect(queryByText('10.50').innerHTML).toBe('10.50')
    expect(queryByText('5.50').innerHTML).toBe('5.50')
  })
})
