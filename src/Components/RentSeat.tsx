import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Stepper from "./Stepper/Stepper";

const RentSeat: React.FC = () => {
//  const { id } = useParams<{ id: string }>();

const rentSeat = () => {
  console.log('rentSeat Function');
};
 
  return (
    <Container>
      <Stepper rentSeat={rentSeat}  />
    </Container>
  );
};

export default RentSeat;

const Container = styled.div`
  ${tw`relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded px-4 py-2 flex-auto`}
`;
