export function genreNameTranslate(genreName: string) {
  if (genreName === "Action") return "Ação";
  if (genreName === "Adventure") return "Aventura";
  if (genreName === "Comedy") return "Comédia";
  if (genreName === "Drama") return genreName;
  if (genreName === "Fantasy") return "Fantasia";
  if (genreName === "Horror") return "Terror";
  if (genreName === "Mistery") return "Mistério";
  if (genreName === "Romance") return genreName;
  if (genreName === "Sci_Fi") return "Ficção";
  if (genreName === "Supernatural") return "Sobrenatural";
  if (genreName === "Thriller") return "Suspense";
  return "";
}
