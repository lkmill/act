import { createElement, useEffect, useState } from 'react'

export default ({ fetch, Child }) => {
  const Component = () => {
    const [result, setResult] = useState()

    useEffect(() => {
      fetch('/api')
        .then((res) => res.json())
        .then((result) => {
          console.log('resolve result')
          setResult(result)
        })
        .catch(() => {
          setResult(null)
        })
    }, [])

    return result ? <Child result={result} /> : <div>Loading</div>
  }

  return Component
}
