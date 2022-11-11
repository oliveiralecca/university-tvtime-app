import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 30px;

  height: calc(100% - 60px);

  aside {
    flex: 100px 100%;
    background: green;
  }

  main {
    flex: 1;
    gap: 30px;

    display: flex;
    flex-direction: column;

    header {
      flex: 0 50px;
      background: grey;

      display: flex;
      justify-content: space-between;
    }

    div {
      flex: 1;
    }

    /* section:nth-child(2) {
      flex: 0 100px;
      background: red;
    }

    section:last-child {
      flex: 1;
      background: pink;
    } */
  }
`;
