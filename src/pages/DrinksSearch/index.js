import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, Item } from './styles';

import api from '../../services/api';

function DrinksSearch({ match }) {
  const [drinks, setDrinks] = useState([]);
  const { drinkName } = match.params;

  async function loadDrinks() {
    const response = await api.get(`/search.php?s=${drinkName}`);

    setDrinks(response.data.drinks);
  }

  useEffect(() => {
    loadDrinks();
  }, [drinkName]);

  return (
    <Container>
      {drinks ? (
        <>
          {drinks.map((drink) => (
            <Item>
              <img src={drink.strDrinkThumb} alt={drink.strDrink} />

              <footer>
                <h1>{drink.strDrink}</h1>
              </footer>
            </Item>
          ))}
        </>
      ) : (
        <h1>erro</h1>
      )}
    </Container>
  );
}

DrinksSearch.propTypes = {
  match: PropTypes.element.isRequired,
};

export default DrinksSearch;
