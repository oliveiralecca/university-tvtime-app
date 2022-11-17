import React, {
  ChangeEvent,
  useRef,
  useEffect,
  useCallback,
  useState,
} from "react";
import { useField } from "@unform/core";
import * as S from "./styles";

interface Props {
  name: string;
  label: string;
}

type InputProps = JSX.IntrinsicElements["input"] & Props;

export default function ImageInput({ name, label, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, defaultValue } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  const handlePreview = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file?.name);

    if (!file) {
      setPreview(null);
    }

    // @ts-ignore
    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "files[0]",
      clearValue(ref: HTMLInputElement) {
        ref.value = "";
        setPreview(null);
      },
      setValue(_: HTMLInputElement, value: string) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <S.Container>
      <label htmlFor={fieldName}>{label}</label>
      <S.Preview>
        <S.Input
          type="file"
          ref={inputRef as any}
          onChange={handlePreview}
          accept="image/png, image/jpeg"
          {...rest}
        />
        {preview && (
          <img src={preview} alt="Preview" width="200" height="200" />
        )}
      </S.Preview>
    </S.Container>
  );
}
