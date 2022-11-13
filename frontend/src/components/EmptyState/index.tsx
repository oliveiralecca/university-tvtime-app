import React from 'react';
import { NoResultIcon } from '../Icons';

import * as S from './styles';

export function EmptyState() {
  return (
    <S.Container>
      <NoResultIcon />
      <p>Nenhum resultado encontrado</p>
    </S.Container>
  );
}
