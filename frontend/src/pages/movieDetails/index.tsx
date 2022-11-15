import { Container } from "../../components/Container";
import { Loader } from "../../components/Loader";
import { useDataResults } from "../../contexts/dataContext";
import * as S from "./styles";



export function MovieDetails() {
  const { moviesDetails, isMoviesDetailsLoading } = useDataResults();

  return (
    <><Container>
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
            <h1>{isMoviesDetailsLoading ? (
              <Loader/>
            ): (<p>{JSON.parse(JSON.stringify(moviesDetails?.titulo))}</p>)}
            </h1>
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
    </Container><S.Container style={{ background: "none" }}>
        {/* <div className="capa">
      <div>Capa</div>
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
    <div className="title-geners">c</div> */}
        {isMoviesDetailsLoading ? (
          <Loader />
        ) : (
          <p>{JSON.stringify(moviesDetails)}</p>
        )}
      </S.Container></>
  );
}
