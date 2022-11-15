import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

//import * as S from './styles';

type InputProps = {
  name: string;
  type?: string;
  accept?: string;
};

export function Input({ name, ...rest }: InputProps) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField]);

  return (
    <input ref={inputRef} defaultValue={defaultValue} {...rest} />
  );
}
