import React, {useState} from 'react';
import {Form, Button, Popover, OverlayTrigger} from 'react-bootstrap';

export default function SummaryForm({setOrderPhase}) {
  const [isChecked, setIsChecked] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setOrderPhase('completed');
  }

  const popover = (
    <Popover id="termsandconditions-popover">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{color: 'blue'}}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={isChecked}
          onChange={(event) => setIsChecked(event.target.checked)}
          label={checkboxLabel}
          className="mt-4"
        />
      </Form.Group>
      <Button
        variant="light"
        type="submit"
        disabled={!isChecked}
        className="mt-4"
      >
        Confirm order
      </Button>
    </Form>
  );
}
