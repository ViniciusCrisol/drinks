import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  width: 90%;

  margin: 0 auto;
  padding: 32px;

  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 6px 0px;
`;

export const DrinkContainer = styled.div`
  text-align: center;

  img {
    width: 150px;
    height: 150px;

    margin: 0 auto;

    object-fit: cover;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.3) 0 0 6px 0px;
  }

  h1 {
    margin: 24px 0;
  }

  p {
    max-width: 400px;
    margin: 0 auto;
  }
`;
