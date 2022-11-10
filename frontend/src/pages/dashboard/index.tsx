import { Oval } from "react-loader-spinner";
import { Container } from "../../components/Container";
import { Title } from "../../components/Title";
import { User } from "../../components/User";
import { useDataResults } from "../../contexts/dataContext";

export function Dashboard() {
  const { users, isLoading } = useDataResults();

  return (
    <Container>
      <aside>navbar</aside>
      <main>
        <header>
          <span>Dashboard</span>
          <span>Foto</span>
        </header>
        <section>filtros gêneros</section>
        <section>filmes</section>
      </main>

      {/* <Title>TV Time App</Title>
      {isLoading ? (
        <Oval
          height={35}
          width={35}
          color="#808080"
          wrapperStyle={{ marginTop: '90px' }}
          ariaLabel='oval-loading'
          secondaryColor="#4f4f4f"
        />
      ) : (
        users?.map((user) => <User key={user?.id} id={user.id} />)
      )} */}
    </Container>
  )
}
