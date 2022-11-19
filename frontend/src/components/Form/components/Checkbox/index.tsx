import React, { useEffect, useRef, InputHTMLAttributes } from "react";
import { useField } from "@unform/core";

import * as S from "./styles";

type Props = {
  name: string;
  options: {
    value: number;
    label: string;
  }[];
  checkedOptions?: number[];
};

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

export function Checkbox({ name, options, checkedOptions, ...rest }: InputProps) {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField, defaultValue = checkedOptions ?? [] } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter((ref) => ref.checked).map((ref) => ref.value);
      },
      clearValue: (refs: HTMLInputElement[]) => {
        refs.forEach((ref) => {
          ref.checked = false;
        });
      },
      setValue: (refs: HTMLInputElement[], values: string[]) => {
        refs.forEach((ref) => {
          if (values.includes(ref.id)) {
            ref.checked = true;
          }
        });
      },
    });
  }, [fieldName, registerField]);

  return (
    <S.Container>
      <label>Gêneros</label>
      <S.ChecksContainer>
        {options.map((option, index) => (
          <S.Label htmlFor={option.label} key={option.label}>
            <input
              defaultChecked={defaultValue.includes(option.value)}
              ref={(ref) => ref && (inputRefs.current[index] = ref)}
              value={option.value}
              type="checkbox"
              id={option.label}
              {...rest}
            />
            {option.label}
          </S.Label>
        ))}
      </S.ChecksContainer>
    </S.Container>
  );
}
