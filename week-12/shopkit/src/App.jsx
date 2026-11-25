import { useState } from 'react'
import Operations from './components/Operations.tsx'
import UserInput from './components/UserInput.tsx'

function App() {
  const [firstNumber, setFirstNumber] = useState('')
  const [secondNumber, setSecondNumber] = useState('')

  return (
    <main>
      <h1>Calculator</h1>
      <UserInput
        firstNumber={firstNumber}
        secondNumber={secondNumber}
        onFirstNumberChange={setFirstNumber}
        onSecondNumberChange={setSecondNumber}
      />
      <Operations firstNumber={firstNumber} secondNumber={secondNumber} />
    </main>
  )
}

export default App
