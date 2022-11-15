import { useParams } from "react-router-dom";
import { Form } from "@unform/web";

import { Content } from "../Content";
import { Input } from "./components/Input";
import { initialData } from "./mockInitialData";

export function FormModel() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Content>
      <Form
        initialData={initialData ?? {}}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <Input name="titulo" />
        <Input name="capa" type="file" accept="image/png, image/jpeg" />

        <button type="submit">salvar</button>
      </Form>
    </Content>
  );
}
