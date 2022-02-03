import './App.css';
import {useState} from 'react';
import React from 'react';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const newButtonColor =
    buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button
        style={{backgroundColor: disabled ? 'gray' : buttonColor}}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(event) => setDisabled(event.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
