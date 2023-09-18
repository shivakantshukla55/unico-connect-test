import styled from "styled-components";
import { Navbar } from "../components/Navbar";

export function Home() {
  return (
    <Container>
      <Navbar />
      <div>hello world</div>
    </Container>
  );
}

const Container = styled.div``;
