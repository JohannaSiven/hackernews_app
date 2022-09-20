import styled from "styled-components";

export const StyledPreview = styled.div`
  display: flex;
  width: 100vh;
  flex: 0 1 auto;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px gray solid;

  h3 {
    margin-bottom: 0;
  }

  h3 > a {
    color: rgb(0, 37, 46);
  }

  li {
    list-style: none;
    margin: 20px 0px;
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
`;
