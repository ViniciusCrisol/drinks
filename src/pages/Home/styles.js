import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    width: 420px;

    margin-bottom: 16px;
    color: #f25764;
    font-size: 26px;
  }

  h2 {
    margin-bottom: 16px;
    color: #f25764;
    font-size: 26px;
  }

  > div {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    margin: 50px 0;

    section {
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        width: 100%;
        margin-top: 8px;

        background: none;
        border: 0;
        border-bottom: 1px solid #f27983;

        text-align: left;
        font-size: 18px;
      }
    }
  }
`;

export const DrinkImage = styled.div`
  button {
    background: none;
    border: 0;
    max-width: 420px;

    img {
      width: 100%;
      height: 420px;

      border-radius: 6px;
    }
  }
`;
