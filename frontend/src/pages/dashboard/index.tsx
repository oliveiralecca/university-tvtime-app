import { Content } from "../../components/Content";
import { GenresFilters } from "./components/GenresFilters";
import { Movies } from "./components/Movies";

export function Dashboard() {
  return (
    <Content>
      <GenresFilters />
      <Movies />
    </Content>
  );
}
