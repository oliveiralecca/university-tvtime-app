import { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import { Form } from "@unform/web";
import { Input } from "./components/Input";
import { initialData } from "./mockInitialData";
import { Button } from "./components/Button";
import { ArrowRightIcon } from "../Icons";
import { FormHandles, SubmitHandler } from "@unform/core";

type FormData = {
  titulo: string;
  tempo: string; 
  data_de_estreia: string;
  resumo: string;
  titulos_equivalentes: string;
  capa: string;
  generos: number[];
}

export function FormModel() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = async (data, { reset }) => {
    try {
      const schema = Yup.object().shape({
        titulo: Yup.string()
          .max(45, "Máximo de 45 caracteres")
          .required("O título é obrigatório"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data); // chamada pra api => enviar dados

      formRef?.current?.setErrors({});
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          // @ts-ignore
          errorMessages[error.path] = error.message;
        });

        formRef?.current?.setErrors(errorMessages);
      }
    }
  }

  // simulando retorno de dados da api para form de edição
  useEffect(() => {
    setTimeout(() => {
      formRef?.current?.setData({
        titulo: 'A Era do Gelo'
      })
    }, 2000)
  }, [])

  return (
    <Form
      ref={formRef}
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <Input name="titulo" label="Título" />
      <Input name="capa" label="Capa" type="file" accept="image/png, image/jpeg" />

      <Button
        type="submit"
        label="Salvar"
        rightIcon
        icon={<ArrowRightIcon />}
      />
    </Form>
  );
}
