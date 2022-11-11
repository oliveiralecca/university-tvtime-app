import { ReactNode } from "react";
import { Container } from "../../components/Container";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";

type AppSkeletonProps = {
  children: ReactNode;
  title: string;
}

export function AppSkeleton({ children, title }: AppSkeletonProps) {
  return (
    <Container>
      <NavBar />
      <main>
        <Header title={title} />
        {children}
      </main>
    </Container>
  );
}
