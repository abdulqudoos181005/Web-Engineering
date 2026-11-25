import { useState } from 'react'

type OperationsProps = {
  firstNumber: string
  secondNumber: string
}

type Operation = '+' | '-' | '*' | '/'

function Operations({ firstNumber, secondNumber }: OperationsProps) {
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState('')

  function calculate(operation: Operation) {
    if (firstNumber.trim() === '' || secondNumber.trim() === '') {
      setResult(null)
      setError('Enter both numbers first.')
      return
    }

    const first = Number(firstNumber)
    const second = Number(secondNumber)

    if (!Number.isFinite(first) || !Number.isFinite(second)) {
      setResult(null)
      setError('Enter valid numbers.')
      return
    }

    if (operation === '/' && second === 0) {
      setResult(null)
      setError('Cannot divide by zero.')
      return
    }

    const nextResult =
      operation === '+'
        ? first + second
        : operation === '-'
          ? first - second
          : operation === '*'
            ? first * second
            : first / second

    setError('')
    setResult(nextResult)
  }

  return (
    <section>
      <h2>Operations</h2>
      <button type="button" onClick={() => calculate('+')}>+</button>
      <button type="button" onClick={() => calculate('-')}>-</button>
      <button type="button" onClick={() => calculate('*')}>*</button>
      <button type="button" onClick={() => calculate('/')}>/</button>
      {error && <p role="alert">{error}</p>}
      {result !== null && <p aria-live="polite">Result: {result}</p>}
    </section>
  )
}

export default Operations