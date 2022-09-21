import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');

* {
    box-sizing: border-box;
    overflow-x: hidden;
}

body {
    color: rgb(0, 37, 46);
    font-family: 'PT Sans', sans-serif;
    font-size: 1.15em;
    margin: 0;
    position: relative;
}

#loading {
    padding-left: 20px;
}

a {
    text-decoration: none;
    font-size: 0.8em;
    color: rgb(0, 37, 46, 0.6);
  }

  a:hover {
    text-decoration: underline;
  }

button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    text-align: left;
}

p {
    opacity: 0.6;
    font-size: 0.8em;
    width: 100vw;
}
`;
