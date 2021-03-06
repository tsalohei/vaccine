import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import DateFilter from './DateFilter'

//TODO add mock event handler
//https://jestjs.io/docs/mock-functions

describe('DateFilter', () => {

  test('renders content', () => {

    const component = render(
      <DateFilter setEndDate={null} endDate={null} />
    )
  
    expect(component.container).toHaveTextContent(
      'Select end date to filter data'
    )
  })
})