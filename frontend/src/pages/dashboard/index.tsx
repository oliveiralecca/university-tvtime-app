import { Oval } from "react-loader-spinner";
import { Container } from "../../components/Container";
import { FilmesSection } from "../../components/Container/styles";
import { Title } from "../../components/Title";
import { User } from "../../components/User";
import { useDataResults } from "../../contexts/dataContext";

export function Dashboard() {
  const { users, isLoading } = useDataResults();

  return (
    <Container>
      <aside>
        <nav>
          <img src="/src/icons/todos-nav.svg" alt="icon-all" />
          
        </nav>
        <nav>
          <img src="/src/icons/filme-nav.svg" alt="icon-filme" />
          
        </nav>
        <nav>
          <img src="/src/icons/generos-nav.svg" alt="icon-ficcaoCientifica" />
         
        </nav>
        <nav>
          <img src="/src/icons/editor-nav.svg" alt="icon-romance" />
         
        </nav>
      </aside>

      <main>
        <header>
          <span>
            <h1>Dashboard</h1>
          </span>
          <span>
            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/film-frames_1f39e-fe0f.png" alt="" />
          </span>
        </header>
        <section>
        <button>
          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/fire_1f525.png" alt="icon-fantasma" />
          <p>Todes</p>
        </button>
        <button>
          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/beaming-face-with-smiling-eyes_1f601.png" alt="icon-comedia" />
          <p>Comédia</p>
        </button>
        <button>
          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/unicorn_1f984.png" alt="icon-ficcaoCientifica" />
          <p>Fantasia</p>
        </button>
        <button>
          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/smiling-face-with-hearts_1f970.png" alt="icon-romance" />
          <p>Romance</p>
        </button>
        <button>
          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/detective_1f575-fe0f.png" alt="icon-acao" />
          <p>Ação</p>
        </button>
        <button>
          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/ghost_1f47b.png" alt="icon-acao" />
          <p>Terror</p>
        </button>
        </section>
        <section className="teste">
          <FilmesSection><img className="harry" src="https://posters.movieposterdb.com/13_02/2001/241527/l_241527_da927a3d.jpg" alt="" /></FilmesSection>
          <FilmesSection><img className="harry" src="https://posters.movieposterdb.com/21_12/2021/10872600/l_10872600_c809b67f.jpg" alt="" /></FilmesSection>
          <FilmesSection><img className="harry" src="https://posters.movieposterdb.com/14_07/1999/197139/l_197139_140332f3.jpg" alt="" /></FilmesSection>
          <FilmesSection><img className="harry" src="https://posters.movieposterdb.com/08_03/2003/320691/l_320691_9a4ca535.jpg" alt="" /></FilmesSection>
          
          <br />  
          <br />        
          <FilmesSection><img className="harry" src="https://posters.movieposterdb.com/13_02/2001/241527/l_241527_da927a3d.jpg" alt="" /></FilmesSection>
          <FilmesSection><img className="harry" src="https://posters.movieposterdb.com/13_02/2001/241527/l_241527_da927a3d.jpg" alt="" /></FilmesSection>
          <FilmesSection><img className="harry" src="https://posters.movieposterdb.com/13_02/2001/241527/l_241527_da927a3d.jpg" alt="" /></FilmesSection>                
          <FilmesSection><img className="harry" src="https://posters.movieposterdb.com/13_02/2001/241527/l_241527_da927a3d.jpg" alt="" /></FilmesSection>                

        </section>
      </main>

      {/* <Title>TV Time App</Title>
      {isLoading ? (
        <Oval
          height={35}
          width={35}
          color="#808080"
          wrapperStyle={{ marginTop: '90px' }}
          ariaLabel='oval-loading'
          secondaryColor="#4f4f4f"
        />
      ) : (
        users?.map((user) => <User key={user?.id} id={user.id} />)
      )} */}
    </Container>
  );
}
