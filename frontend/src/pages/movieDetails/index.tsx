import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";
// import { Card } from "../../components/GenreCard";
import { Container } from "../../components/Container";
import { useDataResults } from "../../contexts/dataContext";
import * as S from "./styles"

export function MovieDetails() {
  /* const { users } = useDataResults();
  const { user } = useParams();

  const userDetails = user ? users?.[+user] : undefined;
  const genderIdentify =
    userDetails?.gender.toUpperCase() === "M" ? "do" : "da";
  const firstName = userDetails?.name.split(" ")[0]; */

  return (
    <Container>
      {/* {userDetails && <Card name={userDetails.name} age={userDetails.age} gender={userDetails.gender} />} */}
      <S.Container>
       <div className="capa">
        <div>
          Capa
        </div>
       </div>
       <div className="description">
        <div className="genero">
         <h1>Titulo do FILME</h1>
        <button>Action</button>
        <button>Ficcao</button>
        <button>Adventure</button>
        <button>Thriller</button>
        </div>
       </div>
       <div className="title-geners">c</div>
      </S.Container>
      
    </Container>
  );
}
