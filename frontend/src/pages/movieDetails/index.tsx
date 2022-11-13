import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";
// import { Card } from "../../components/GenreCard";
import { Container } from "../../components/Container";
import { useDataResults } from "../../contexts/dataContext";
import * as S from "./styles";

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
            <img className="cover" src="https://posters.movieposterdb.com/21_07/2019/6472976/l_6472976_69f61b7f.jpg" alt="" />
            <p>Data de Estreia: 15/03/2019</p>
            <p>Duração: 1h56 min</p>
          </div>
        </div>
        <div className="description">
          <div className="genero">
            <h1>A cinco passos de me suicídar</h1>
            <button>Action</button>
            <button>Ficcao</button>
            <button>Adventure</button>
            <button>Thriller</button>
          </div>
        </div>
        <div className="title-geners">
          <h4>Sinopse</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum quo non laudantium voluptatum, tenetur placeat, tempora eum itaque ratione porro dolorem, commodi officiis animi et mollitia ea quia! Asperiores? At facilis minus explicabo ut excepturi, aperiam porro earum tempora, quas
            numquam odit perspiciatis sit velit dicta ullam eos sunt? Animi, culpa alias distinctio ducimus porro incidunt reprehenderit obcaecati nihil!
          </p>
        </div>
      </S.Container>
    </Container>
  );
}
