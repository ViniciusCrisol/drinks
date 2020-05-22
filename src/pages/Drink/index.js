import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, DrinkContainer } from './styles';
import api from '../../services/api';
import Menu from '../../components/Menu';

function Drink({ match, history }) {
  const [drink, setDrink] = useState([]);
  const { idDrink } = match.params;

  async function loadDrink() {
    const response = api.get(`/lookup.php?i=${idDrink}`);

    response.then((drinkData) => {
      setDrink(drinkData.data.drinks);
    });
  }

  useEffect(() => {
    loadDrink();
  }, []);

  return (
    <>
      <Menu history={history} />
      <Container>
        {drink.map((d) => (
          <DrinkContainer>
            <img src={d.strDrinkThumb} alt={d.strDrink} />
            <h1>{d.strDrink}</h1>

            <p>{d.strInstructions}</p>
          </DrinkContainer>
        ))}
      </Container>
    </>
  );
}

Drink.propTypes = {
  match: PropTypes.element.isRequired,
  history: PropTypes.element.isRequired,
};

export default Drink;
