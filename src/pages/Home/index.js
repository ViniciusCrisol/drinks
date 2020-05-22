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

  function handleSubmit(idDrink) {
    history.push(`/drinks/${idDrink}`);
  }

  function handleSubmitType(type) {
    history.push(`/drinks/${type}/type/search`);
  }

  return (
    <>
      <Menu history={history} />
      <Container>
        <div>
          <DrinkImage>
            <h1>A suggestion for your day!!!</h1>
            {randomDrink.map((drink) => (
              <button type="button" onClick={() => handleSubmit(drink.idDrink)}>
                <img src={drink.strDrinkThumb} alt={drink.strDrink} />
              </button>
            ))}
          </DrinkImage>
          <section>
            <h2>Drink types</h2>
            <button type="button" onClick={() => handleSubmitType('Alcoholic')}>
              Alcoholic
            </button>
            <button
              type="button"
              onClick={() => handleSubmitType('Non_Alcoholic')}
            >
              Non alcoholic
            </button>
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
