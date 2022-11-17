import { useEffect, useRef } from "react";
import * as Yup from "yup";
import { Form } from "@unform/web";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { ArrowRightIcon, CancelIcon } from "../Icons";
import { FormHandles, SubmitHandler } from "@unform/core";
import * as S from "./styles";
import { Textarea } from "./components/Textarea";
import api from "../../services/api";
import ImageInput from "./components/ImageInput";

type FormData = {
  titulo: string;
  tempo: string;
  data_de_estreia: string;
  resumo: string;
  titulos_equivalentes: string;
  capa: string;
  generos: number[];
};

export function FormModel() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = async (data, { reset }) => {
    try {
      const schema = Yup.object().shape({
        titulo: Yup.string()
          .max(45, "Máximo de 45 caracteres")
          .required("O título é obrigatório"),
        tempo: Yup.string().required("O tempo de duração é obrigatório"),
        data_de_estreia: Yup.string().required(
          "A data de estreia é obrigatória"
        ),
        resumo: Yup.string().max(300, "Máximo de 300 caracteres"),
        titulos_equivalentes: Yup.string(),
        capa: Yup.mixed(),
        generos: Yup.array(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
      api.post("/filme/register", data); // chamada pra api => enviar dados

      formRef?.current?.setErrors({});
      reset();
      // window.location.replace('/home');
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
  };

  // simulando retorno de dados da api para form de edição
  // useEffect(() => {
  //   setTimeout(() => {
  //     formRef?.current?.setData({
  //       titulo: 'A Era do Gelo'
  //     })
  //   }, 2000)
  // }, [])

  return (
    <S.FormContainer
      ref={formRef}
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <Input name="titulo" label="Título *" type="text" />

      <S.Time>
        <Input name="tempo" label="Tempo de duração *" type="time" />
        <Input name="data_de_estreia" label="Data de estreia *" type="date" />
      </S.Time>

      <Textarea
        name="resumo"
        label="Sinopse"
        placeholder="No máximo 300 caracteres"
        rows={8}
        maxLength={300}
      />

      <Textarea
        name="titulos_equivalentes"
        label="Títulos equilvalentes"
        placeholder="Exemplo: Titulo 1, Título 2, Título 3"
        rows={2}
      />

      {/* <Input
        name="capa"
        label="Capa"
        type="file"
        accept="image/png, image/jpeg"
      /> */}

      <ImageInput name="capa" label="Capa" />

      <S.Buttons>
        <Button
          type="submit"
          label="Salvar"
          rightIcon
          icon={<ArrowRightIcon />}
        />
      </S.Buttons>
    </S.FormContainer>
  );
}
