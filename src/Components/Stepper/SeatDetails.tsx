import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { useAppDataContext } from "../../context/AppDataContext";

const SeatDetails: React.FC = () => {
  const { seatData } = useAppDataContext();
  return (
    <Container>
      <GridDiv>
        {/* Divs on the left */}
        <TitleP>Personal Informations</TitleP>
        <Label>Name</Label>
        <InformationDiv>{seatData.name}</InformationDiv>
        <Label>Surname</Label>
        <InformationDiv>{seatData.surname}</InformationDiv>
        <Label>Gender</Label>
        <InformationDiv>{seatData.gender}</InformationDiv>
        <Label>Age</Label>
        <InformationDiv>{seatData.age}</InformationDiv>
      </GridDiv>
      <GridDiv>
        {/* Divs in the middle*/}
        <TitleP>Car Informations</TitleP>
        <Label>Car Model</Label>
        <InformationDiv>{seatData.carModel}</InformationDiv>
        <Label>Car Type</Label>
        <InformationDiv>{seatData.carType}</InformationDiv>
        <Label>How many people will be traveling in the car?</Label>
        <InformationDiv>{seatData.travelingPeopleQuantity}</InformationDiv>
        <Label>Smoking Allowed</Label>
        <InformationDiv>{seatData.smokeAllow}</InformationDiv>
      </GridDiv>
      <GridDiv>
        {/* Divs on the right */}
        <TitleP>Seat Informations</TitleP>
        <Label>Departure Place</Label>
        <InformationDiv>{seatData.departurePlace}</InformationDiv>
        <Label>Departure Time</Label>
        <InformationDiv>
          {seatData.departureTime.toLocaleString()}
        </InformationDiv>
        <Label>Destination</Label>
        <InformationDiv>{seatData.destination}</InformationDiv>
        <Label>Estimated Arrival</Label>
        <InformationDiv>
          {seatData.estimatedArrival + " " + "Hours"}
        </InformationDiv>
      </GridDiv>
    </Container>
  );
};

export default SeatDetails;

const Container = styled.div`
  ${tw`flex h-96 justify-center items-center`}
`;

const Label = styled.label`
  ${tw`block mb-1 font-semibold`}
`;

const InformationDiv = styled.div`
  ${tw`w-full h-9 bg-slate-300 mt-2 rounded-md flex items-center justify-center text-center text-slate-800 font-semibold`}
`;

const TitleP = styled.p`
  ${tw`text-xl font-mono font-semibold text-center text-gray-700`}
`;

const GridDiv = styled.div`
  ${tw`lg:w-1/4 p-4`}
`;
