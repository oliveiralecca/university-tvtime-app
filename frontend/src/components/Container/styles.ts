import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: -30px 30px 0px 0px;
  margin-top: 0px;
  
  /* height: calc(100% - 10%); */

  aside {
    flex:  100px 100%;
    padding: 10px;
    margin-top: 0px;
    width: 100px;
    height: -5px;
   
    
    background: #211f41;
    
  }
  nav {
    margin-top: 30px;
    text-align: center;
    
  }

 

  

  p {
    text-align: center;
  }

  img {
    height: 40px;
    width: 40px;
    padding: 12px;
    text-align: center;
    background-color: none;
    

    border-width: 5px;
    border-style: solid;
    border-color: #3f3e6d;
    border-radius: 20px;
  }
  
  img:hover {
    background-color: #FE7141;
  
  }

  

  main {
    flex: 1;
    gap: 30px;
    display: flex;
    flex-direction: column;

    header {
      flex: 0 50px;
      margin-top: 20px;
      margin-right: 10px;
      background:#2F2D52;

      display: flex;
      justify-content: space-between;
    }

    section:nth-child(2) {
      flex: 0 100px;
      background:#2F2D52 ;
      margin-top: -45px;
    }

    section:last-child {
      flex: 1;
      background: #2F2D52;
    }

    button {
      background: #5a5596;
      margin: auto;
      border-radius: 58px;
      margin: 15px 5px;
      padding: 10px;
      height: 133px;
      width: 97px;
      //border-color: white;
      border-style: none;
     
    }

    button:hover {
      background-color: #FE7141;
    }

    button > img {
      background-color: none;
      border: 10px;
      
      text-align: center;
      width: 50px;
      height: 50px;
      
    }

    .testes > img {
      border: #FE7141;
      height: 0px;
    }
  }
`;


export const FilmesSection = styled.div `
    display: inline-flex;
    margin-left: 10px;
    justify-content: space-between;
   
    
    
    .harry {
      width: 200px;
      height: 300px;
    }


`;
