import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    margin-bottom: 16px;
    color: #f25764;
    font-size: 26px;
  }

  > div {
    margin-top: 124px;

    display: flex;
    justify-content: space-between;

    section {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        width: 100%;
        margin-top: 8px;

        border-bottom: 1px solid #f27983;

        font-size: 18px;
      }
    }
  }
`;

export const DrinkImage = styled.div`
  img {
    max-width: 420px;
    width: 90%;
    height: 420px;

    border-radius: 6px;
  }
`;
