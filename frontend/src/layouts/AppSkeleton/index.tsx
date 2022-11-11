import { ReactNode } from "react";
import { Container } from "../../components/Container";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";

type AppSkeletonProps = {
  children: ReactNode;
}

export function AppSkeleton({ children }: AppSkeletonProps) {
  return (
    <Container>
      <NavBar />
      <main>
        <Header />
        {children}
      </main>
    </Container>
  );
}
