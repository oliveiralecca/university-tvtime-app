import styled from "styled-components";


export const Body = styled.body`
  margin: auto;
  padding: 0;
  background-color: none;
  text-align: center;
  color: white;

  .members {
    margin: 50px 0 40px 0px;
  }

  img {
    width: 250px;
    height: 250px;
    margin-top: 5px;
    margin-bottom: -3px;
    border-top-left-radius: 28px;
    border-top-right-radius: 28px;
  }

  button {
    background-color: #3F3E6D;
    border: none;
    margin: 20px;
  }

  .github {
    width: 32px;
    height: 32px;
    margin-top: 0px;
    padding:2px;
    fill: #3F3E6D;
  }

  p {
    font-size: 24px;
    color: white;
    text-align: center;
    
  }

  button  p {
    background-color: #FE6737;
    border-bottom-left-radius: 28px;
    border-bottom-right-radius: 28px;
}

  a {
    text-decoration: none;
  }
`;
