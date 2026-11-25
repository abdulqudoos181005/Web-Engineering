import { useState } from 'react';

type UserInputProps = {
  firstNumber: string;
  secondNumber: string;
  onFirstNumberChange: (value: string) => void;
  onSecondNumberChange: (value: string) => void;
};

function UserInput({
  firstNumber,
  secondNumber,
  onFirstNumberChange,
  onSecondNumberChange,
}: UserInputProps) {
  return (
    <div>
      <label>
        First number
        <input
          type="number"
          step="any"
          value={firstNumber}
          onChange={(event) => onFirstNumberChange(event.currentTarget.value)}
        />
      </label>

      <label>
        Second number
        <input
          type="number"
          step="any"
          value={secondNumber}
          onChange={(event) => onSecondNumberChange(event.currentTarget.value)}
        />
      </label>
    </div>
  );
}

export default UserInput;