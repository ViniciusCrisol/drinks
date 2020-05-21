import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';

import logo from '../../assets/logo.svg';

function Menu({ history }) {
  function handleSubmit(data) {
    const { drinkName } = data;

    history.push(`/drinks/${drinkName}/search`);
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <Form onSubmit={handleSubmit}>
        <Input name="drinkName" placeholder="Search for a drink" />
        <button type="submit">
          <AiOutlineSearch color="white" size={22} />
        </button>
      </Form>
    </Container>
  );
}

Menu.propTypes = {
  history: PropTypes.element.isRequired,
};

export default Menu;
