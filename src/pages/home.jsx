import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";

export function Home() {
  return (
    <Container>
      <Navbar />
      <Hero />
    </Container>
  );
}

const Container = styled.div``;
