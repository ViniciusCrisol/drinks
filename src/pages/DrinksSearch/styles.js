import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Item = styled.div`
  height: auto;
  margin: 6px;

  border-radius: 6px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 10px 0px;

  display: flex;
  flex-direction: column;

  img {
    width: 360px;
    height: 255px;

    object-fit: cover;
    object-position: top;
  }

  footer {
    flex: 1;
    padding: 12px;

    h1 {
      text-align: left;
      font-size: 18px;
    }
  }
`;
