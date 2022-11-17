import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import * as S from './styles';

type Props = {
  name: string;
  label: string;
}

type InputProps = JSX.IntrinsicElements['textarea'] & Props;

export function Textarea({ name, label, ...rest }: InputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <S.Container>
      <label htmlFor={fieldName}>{label}</label>
      <S.Textarea ref={textareaRef as any} defaultValue={defaultValue} {...rest} />
      {error && <span>{error}</span>}
    </S.Container>
  );
}
