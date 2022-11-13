import styled from "styled-components";

export const Container = styled.div`
  background-color: red;
  display: grid;
  width: 1100px;
  height: 450px;

  grid-template-columns: 1fr, 3fr, 1fr;
  grid-template-rows: 1px 3px 3px;

  grid-gap: 10px;

  .capa {
    background-color: green;
    width: 298px;
    height: 451px;
    margin-bottom: 20px;
    text-align: center;
  }

  .title-geners {
    background-color: blue;
    width: 767px;
    height: 200px;
    margin-bottom: -300px;
    grid-area: logo;
  }

  .description {
    background-color: #211f41;
    width: 767px;
    height: 226px;
    margin-bottom: 30px;
  }

  .genero > button {
    
    background-color: #3f3e6d;
    border-color: white;
    border-style: solid;
    border-radius: 40px;
    border-width: 2px;
    width: 40px;
    height: 50px;
    margin: 0 20px;
    width: 128px;
    height: 32px;
    color: white;
  }

  h1 {
    text-align: center;
    margin-bottom: 10px;
  }
`;
