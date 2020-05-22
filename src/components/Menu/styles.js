import styled from 'styled-components';

export const Container = styled.div`
  padding: 12px;
  margin-bottom: 124px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 60px;
  }

  form {
    display: flex;
    align-items: center;

    input {
      height: 48px;
      width: 220px;
      padding: 4px 12px;

      background-color: #eee;
      border: 0;
    }

    button {
      width: 48px;
      height: 48px;

      background-color: #f25764;
      margin-left: 4px;
      border: 0;
      border-radius: 4px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
