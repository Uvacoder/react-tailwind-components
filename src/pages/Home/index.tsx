import { Button } from "@/components/Button";
import React from "react";
import tw, { styled } from "twin.macro";

const Container = styled.div`
  ${tw`px-4 flex w-full justify-center md:(px-12 py-40)`}
`;
const Content = styled.div`
  ${tw`flex flex-wrap gap-4 w-full md:(w-3/4)`}
`;
const Home = () => {
  return (
    <Container>
      <Content>
        <Button>Buttons</Button>
        <Button>Modals</Button>
        <Button>Navbars</Button>
        <Button>Cards</Button>
        <Button>Footers</Button>
        <Button>Lists</Button>
      </Content>
    </Container>
  );
};

export default Home;
