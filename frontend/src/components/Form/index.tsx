import { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { ArrowRightIcon } from "../Icons";
import { FormHandles, SubmitHandler } from "@unform/core";
import * as S from "./styles";
import { Textarea } from "./components/Textarea";
import api from "../../services/api";
import ImageInput from "./components/ImageInput";
import { Checkbox } from "./components/Checkbox";
import { genres } from "../../utils";

type FormData = {
  titulo: string;
  tempo: string;
  data_de_estreia: string;
  resumo?: string;
  titulos_equivalentes?: string;
  capa?: string | null;
  generos?: number[];
};

type FormProps = {
  action: "create" | "update";
  movieData?: FormData;
  movieId?: number;
};

export function FormModel({ action, movieData, movieId }: FormProps) {
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

      if (action === "create")
        api.post("/filme/register", data, {
          headers: { "content-type": "multipart/form-data" },
        });
      if (action === "update")
        api.put(`/filme/update/${movieId}`, data, {
          headers: { "content-type": "multipart/form-data" },
        });

      formRef?.current?.setErrors({});
      reset();
      toast.loading('Cadastrando o novo filme...', { autoClose: 3000 });
      setTimeout(() => {
        window.location.replace("/home");
      }, 3100);
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

  useEffect(() => {
    movieData && formRef?.current?.setData(movieData);
  }, []);

  return (
    <S.FormContainer ref={formRef} onSubmit={handleSubmit}>
      <ToastContainer />
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
        placeholder="Exemplo: Título 1, Título 2, Título 3"
        rows={2}
      />

      <Checkbox
        name="generos"
        options={genres}
        checkedOptions={movieData?.generos}
      />

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
