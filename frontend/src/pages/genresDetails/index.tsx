import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";
// import { Card } from "../../components/GenreCard";
import { Container } from "../../components/Container";
import { useDataResults } from "../../contexts/dataContext";

export function GenresDetails() {
  // const { users } = useDataResults();
  const { user } = useParams();

  // const userDetails = user ? users?.[+user] : undefined;
  // const genderIdentify =
  //   userDetails?.gender.toUpperCase() === "M" ? "do" : "da";
  // const firstName = userDetails?.name.split(" ")[0];

  return (
    <Container>
      {/* {userDetails && (
        <Card
          name={userDetails.name}
          age={userDetails.age}
          gender={userDetails.gender}
        />
      )} */}
    </Container>
  );
}
