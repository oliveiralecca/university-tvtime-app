import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

//import * as S from './styles';

type Props = {
  name: string;
  label: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

export function Input({ name, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <span style={{ color: "#f00" }}>{error}</span>}
    </div>
  );
}
