import * as S from "./styles";
export function About() {
  return (
    <S.Body>
      <h1>Projeto da disciplina Banco de Dados 2022.1</h1>
      <div className="members">
        <button>
          <a href="https://github.com/oliveiralecca" target="_blank">
            <img src="https://avatars.githubusercontent.com/u/65191407?v=4" alt="" />
            <p>
              Letícia Oliveira
              <br />
              <img className="github" src="/src/assets/icons/github-icon.png" alt="" />
            </p>
          </a>
        </button>
        <button>
          <a href="https://github.com/mpaullos" target="_blank">
            <img src="https://avatars.githubusercontent.com/u/82289818?v=4" alt="" />
            <p>
              Marcos Paulo <br />
              <img className="github" src="/src/assets/icons/github-icon.png" alt="" />
            </p>
          </a>
        </button>
        <button>
          <a href="https://github.com/rodrigodesan" target="_blank">
            <img src="https://avatars.githubusercontent.com/u/76262266?v=4" alt="" />
            <p>
              Rodrigo Nunes <br />
              <img className="github" src="/src/assets/icons/github-icon.png" alt="" />
            </p>
          </a>
        </button>
      </div>

      <div>
        <p>Professor: André Britto</p>
      </div>
    </S.Body>
  );
}
