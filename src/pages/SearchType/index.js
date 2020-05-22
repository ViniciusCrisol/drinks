import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import Menu from '../../components/Menu';
import api from '../../services/api';

function SearchType({ match, history }) {
  const [types, setTypes] = useState([]);
  const { type } = match.params;

  function handleSubmit(idDrink) {
    history.push(`/drinks/${idDrink}`);
  }

  async function loadTypes() {
    const response = await api.get(`filter.php?a=${type}`);

    setTypes(response.data.drinks);
  }

  useEffect(() => {
    loadTypes();
  }, []);

  return (
    <>
      <Menu history={history} />

      <Container>
        {type === 'Non_Alcoholic' ? (
          <h1>Non Alcoholic Drinks</h1>
        ) : (
          <h1>Alcoholic Drinks</h1>
        )}

        {types.map((t) => (
          <button type="button" onClick={() => handleSubmit(t.idDrink)}>
            <img src={t.strDrinkThumb} alt={t.strDrink} />
            <p>{t.strDrink}</p>
          </button>
        ))}
      </Container>
    </>
  );
}

SearchType.propTypes = {
  match: PropTypes.element.isRequired,
  history: PropTypes.element.isRequired,
};

export default SearchType;
