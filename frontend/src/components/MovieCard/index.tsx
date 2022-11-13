import * as S from "./styles";

type MovieCardProps = {
  name: string;
  poster: string;
  path: string;
};

export function MovieCard({ name, poster, path }: MovieCardProps) {
  //fazer requisição com o id para pegar os generos de cada filme

  return (
    <S.Container to={path}>
      <S.Poster src={poster} />
      <S.Name>
        <p>{name}</p>
      </S.Name>
    </S.Container>
  );
}

{
  /* <GenreCard
  key={genre.id_genero}
  isActive={active === genre.id_genero}
  onClick={() => handleFetchMoviesByGenre(genre.id_genero)}
  // path={`/genero/${genreNameTranslate(genre.nome)}/detalhes`}
  name={genreNameTranslate(genre.nome)}
  icon={`${api.defaults.baseURL}/${genre.icone}`}
/>; */
}
