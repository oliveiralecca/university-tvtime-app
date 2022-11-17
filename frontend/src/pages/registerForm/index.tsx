import React from 'react';
import { Content } from '../../components/Content';
import { FormModel } from '../../components/Form';

export function RegisterForm() {
  return (
    <Content className="form">
      <FormModel action="create" />
    </Content>
  );
}
