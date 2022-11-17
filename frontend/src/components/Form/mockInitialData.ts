export const initialData = {
  titulo: "", // input text
  tempo: "", // 00:00 => input time
  data_de_estreia: "", // input date
  resumo: "", // textarea
  titulos_equivalentes: "", // pensar nesse
  capa: "", // input image
  generos: [], // numbers => input checkbox
};

// exemplo de envio
// {
//   "titulo": "Meu filme", 
//   "tempo": "01:35", 
//   "data_de_estreia": "2022-11-14", 
//   "titulos_equivalentes": "A Era do Gelo, A paciente silenciosa",
//   "generos": [1, 5] 
// }

// get /filme/index (formulário de cadastro)
// {
//     id_genero:Int,
//     nome:tiposgenero,
//     icone?:string,
// }[]

// post /filme/register
// {
//     titulo: String (max:45), (required)
//     tempo: 00:00, (required)
//     data_de_estreia: Date (retorno do input datetime-local), (required)
//     resumo: String (max:300), (required)
//     titulos_equivalentes: String -> "titulo 1,titulo 2" (estou tratando espaços extras),
//     capa: string,
//     generos: [] (retorno de checkboxes)
// }
