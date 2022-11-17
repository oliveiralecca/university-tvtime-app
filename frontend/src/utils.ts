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

export const genres = [
  { value: 1, label: 'Ação' },
  { value: 2, label: 'Aventura' },
  { value: 3, label: 'Comédia' },
  { value: 4, label: 'Drama' },
  { value: 5, label: 'Fantasia' },
  { value: 6, label: 'Terror' },
  { value: 7, label: 'Mistério' },
  { value: 8, label: 'Romance' },
  { value: 9, label: 'Ficção' },
  { value: 10, label: 'Sobrenatural' },
  { value: 11, label: 'Suspense' },
]
