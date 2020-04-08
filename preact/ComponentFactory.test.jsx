import { render, createElement } from 'preact'
import { act } from 'preact/test-utils'

import ComponentFactory from './ComponentFactory'

describe('ComponentFactory', () => {
  let container

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    render(null, container)
    container.remove()
    container = null
  })

  it('passes fetch result to child', async () => {
    const result = { stuffs: 'true' }
    const Child = jest.fn(() => null)
    const fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(result),
    })

    const Component = ComponentFactory({ fetch, Child })

    await act(async () => {
      render(<Component />, container)
    })

    expect(Child).toHaveBeenCalledTimes(1)
    expect(Child.mock.calls[0][0]).toMatchObject({ result })
  })
})
