import React from 'react';
import {Row} from 'react-bootstrap';

export default function ToppingOption({name, imagePath}) {
  return (
    <Row>
      <img
        src={`https://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
      />
    </Row>
  );
}
