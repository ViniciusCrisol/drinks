import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, DrinkImage } from './styles';

import Menu from '../../components/Menu';
import api from '../../services/api';

function Home({ history }) {
  const [randomDrink, setRandomDrink] = useState([]);

  async function loadDrinks() {
    const response = await api.get(`/random.php`);

    setRandomDrink(response.data.drinks);
  }

  useEffect(() => {
    loadDrinks();
  }, []);

  return (
    <>
      <Menu history={history} />
      <Container>
        <div>
          <DrinkImage>
            <h1>A suggestion for your day!!!</h1>
            {randomDrink.map((drink) => (
              <img src={drink.strDrinkThumb} alt="" />
            ))}
          </DrinkImage>
          <section>
            <h1>Drink types</h1>
            <span>Alcoholic</span>
            <span>Non alcoholic</span>
            <span>Alcoholic</span>
          </section>
        </div>
      </Container>
    </>
  );
}

Home.propTypes = {
  history: PropTypes.element.isRequired,
};

export default Home;
