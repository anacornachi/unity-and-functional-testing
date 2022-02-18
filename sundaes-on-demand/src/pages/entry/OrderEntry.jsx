import React from 'react';
import Options from './Options';

export default function OrderEntry() {
  return (
    <div>
      <h1>Design your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
    </div>
  );
}
