import styled from "styled-components";

export const StyledArticle = styled.div`
  background-color: rgb(247, 244, 240);
  width: 100vw;
  padding: 20px;
  margin: 0;

  button {
    text-decoration: underline;
    margin-bottom: 40px;
  }

  #details {
    height: 100%;
  }

  #text {
    font-style: italic;
    margin: 30px 0px;
    width: 100vw;
    color: rgb(0, 37, 46, 0.6);
  }

  #type {
    border-radius: 10%;
    padding: 2px 5px;
    margin-bottom: 10px;
    background-color: rgba(245, 170, 66, 0.4);
    color: rgb(0, 37, 46, 0.6);
    font-size: 0.8em;
    width: fit-content;
  }
`;
