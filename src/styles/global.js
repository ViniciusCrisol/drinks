import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html, body , #root{
  height: 100%;
}

body{
  max-width: 1200px;
  margin: 0 auto;


  background-color: white;
  -webkit-font-smoothing: antialiased !important;
}

body, input , button {
  color:#222222;
  font-size: 14px;
}

a{
  text-decoration: none;
}

ul {
  list-style: none;
}

button{
  cursor: pointer;
}

`;
