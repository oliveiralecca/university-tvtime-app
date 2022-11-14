import styled from "styled-components";

export const Container = styled.div`
  background-color: #3f3e6d;
  display: grid;
  width: 1100px;
  height: 450px;

  grid-template-columns: 1fr, 3fr, 1fr;
  grid-template-rows: 1px 3px 3px;

  grid-gap: 10px;

  .capa {
    background-color: #FE6737;
    width: 298px;
    height: 451px;
    margin-bottom: 20px;
    text-align: center;
  }

  .title-geners {
    background-color: #211F41;
    width: 767px;
    height: 200px;
    margin-bottom: -300px;
    grid-area: logo;
    border-radius: 26px;
    
  }

  .title-geners > h4,
  p {
    text-align: justify;
    margin: 0 20px 10px 20px;
  }

  .description {
    background-color: #211F41;
    width: 767px;
    height: 226px;
    margin-bottom: 30px;
    border-radius: 38px;
    
    
  }

  .genero > button {
    background-color: #3f3e6d;
    border-style: none;
    border-radius: 40px;
    border-width: 2px;
    width: 40px;
    height: 50px;
    margin: 0 6px 1px;
    width: 68px;
    height: 28px;
    color: white;
  }


  

  h1 {
    text-align: center;
    margin-bottom: 10px;
    background-color: #FE6737;
    border-top-left-radius: 38px;
    border-top-right-radius: 38px;
  }
  
  h4 {
    padding-top: 10px;
    
  }
 

  .genero > .edit {
    text-align: center;
    width: 42px;
    height: 42px;
    background-color: #211f41;
  }

 

/*   .description button :hover {
    background-color: orange;
  } */

  .cover {
    width: 298px;
    height: 360px;


   


  }
`;
