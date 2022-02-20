import React from 'react';
import {Button} from 'react-bootstrap';
import {useOrderDetails} from '../../contexts/OrderDetails';
import Options from './Options';

export default function OrderEntry({setOrderPhase}) {
  const [orderDetails] = useOrderDetails();

  // disable order button if there aren't any scoops in order
  const orderDisabled = orderDetails.totals.scoops === '$0.00';

  return (
    <div>
      <h1>Design your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <Button
        disabled={orderDisabled}
        onClick={() => setOrderPhase('review')}
        variant="light"
        className="mt-3"
      >
        Order sundae
      </Button>
    </div>
  );
}
