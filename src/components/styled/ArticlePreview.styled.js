import styled from "styled-components";

export const StyledPreview = styled.div`
  //background-color: rgb(247, 244, 240);
  display: flex;
  width: 100vh;
  flex: 0 1 auto;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px gray solid;

  h3 {
    margin-bottom: 0;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  h3 > a {
    color: rgb(0, 37, 46);
  }

  li {
    list-style: none;
    margin: 20px;
  }

  a {
    text-decoration: none;
    font-size: 0.8em;
    color: rgb(0, 37, 46, 0.6);
  }

  a:hover {
    text-decoration: underline;
  }

  p {
    line-height: 1.2;
    padding-top: 20px;
  }

  #row {
    display: flex;
    justify-content: space-between;
  }

  #timestamp {
    color: rgb(0, 37, 46, 0.6);
    font-size: 0.8em;
    margin-bottom: 20px;
  }

  #by {
    color: rgb(244, 126, 32);
    font-weight: 600;
    padding-bottom: 20px;
  }

  #type {
    border-radius: 10%;
    padding: 2px 5px;
    background-color: rgba(245, 170, 66, 0.4);
    color: rgb(0, 37, 46, 0.6);
    font-size: 0.8em;
  }
`;
