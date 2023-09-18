import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Services } from "../components/Service";

export function Home() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Services />
    </Container>
  );
}

const Container = styled.div``;
