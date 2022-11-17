import React from 'react';
import { Content } from '../../components/Content';
import { FormModel } from '../../components/Form';

export function RegisterForm() {
  return (
    <Content>
      <FormModel action="create" />
    </Content>
  );
}
