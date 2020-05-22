import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    max-width: 360px;
    margin: 0 auto 64px;

    color: #f25764;
    text-align: center;
  }

  > button {
    margin: 12px 0;
    padding: 12px;
    width: 100%;

    background: none;
    border: 0;
    border-bottom: 1px solid #eee;

    display: flex;
    align-items: center;

    img {
      width: 80px;

      box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 10px 0px;
      border-radius: 50%;
    }

    p {
      margin-left: 16px;
      font-size: 18px;
    }
  }
`;
