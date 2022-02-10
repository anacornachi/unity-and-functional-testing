import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Row} from 'react-bootstrap';
import ScoopOption from './ScoopOption';

export default function Options({optionType}) {
  const [items, setItems] = useState([]);
  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`https://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        // TODO: handle error response
      });
  }, [optionType]);

  //TODO: replace 'null'with ToppingOption when available
  const ItemComponent = optionType === 'scoops' ? ScoopOption : null;

  const optionItems = items.map((item) => {
    return (
      <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={items.imagePath}
      />
    );
  });
  return <Row>{optionItems}</Row>;
}
