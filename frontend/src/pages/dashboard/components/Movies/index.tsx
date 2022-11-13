import React from 'react';
import { useDataResults } from '../../../../contexts/dataContext';

import * as S from './styles';

type MoviesProps = {};

export function Movies() {
  const { moviesByGenre, isMoviesByGenreLoading } =
    useDataResults();

  const teste = JSON.stringify(moviesByGenre);
    
  return (
    <S.Container>
      <p>{teste ?? 'todos'}</p>
    </S.Container>
  );
}
