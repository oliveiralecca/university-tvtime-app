import format from "date-fns/format";

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
  { value: 1, label: "Ação" },
  { value: 2, label: "Aventura" },
  { value: 3, label: "Comédia" },
  { value: 4, label: "Drama" },
  { value: 5, label: "Fantasia" },
  { value: 6, label: "Terror" },
  { value: 7, label: "Mistério" },
  { value: 8, label: "Romance" },
  { value: 9, label: "Ficção" },
  { value: 10, label: "Sobrenatural" },
  { value: 11, label: "Suspense" },
];

export function convertTime(time: string, page?: 'details' | undefined) {
  if (page === 'details') return format(new Date(time.slice(0, -1)), "HH'h'mm'min'");
  return format(new Date(time.slice(0, -1)), "HH:mm");
}

export function convertDate(date: string, page?: 'details' | undefined) {
  if (page === 'details') return format(new Date(date.slice(0, -1)), "dd/MM/yyyy");
  return format(new Date(date.slice(0, -1)), "yyyy-MM-dd");
}
