import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, Item, DrinkNotFound } from './styles';

import api from '../../services/api';
import Menu from '../../components/Menu';

function DrinksSearch({ match, history }) {
  const [drinks, setDrinks] = useState([]);
  const { drinkName } = match.params;

  async function loadDrinks() {
    const response = await api.get(`/search.php?s=${drinkName}`);

    setDrinks(response.data.drinks);
  }

  function handleSubmit(idDrink) {
    history.push(`/drinks/${idDrink}`);
  }

  useEffect(() => {
    loadDrinks();
  }, [drinkName]);

  return (
    <>
      <Menu history={history} />

      <Container>
        {drinks ? (
          <>
            {drinks.map((drink) => (
              <Item onClick={() => handleSubmit(drink.idDrink)}>
                <img src={drink.strDrinkThumb} alt={drink.strDrink} />

                <footer>
                  <h1>{drink.strDrink}</h1>
                </footer>
              </Item>
            ))}
          </>
        ) : (
          <DrinkNotFound>{drinkName} not found =( </DrinkNotFound>
        )}
      </Container>
    </>
  );
}

DrinksSearch.propTypes = {
  match: PropTypes.element.isRequired,
  history: PropTypes.element.isRequired,
};

export default DrinksSearch;
