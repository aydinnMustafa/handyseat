import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { useAppDataContext } from "../../context/AppDataContext";


const SeatDetails: React.FC = () => {
  const { seatFormData } = useAppDataContext();
  return (
    <Container>
      <GridDiv>
        {/* Divs on the left */}
        <TitleP>Personal Informations</TitleP>
        <Label>Name</Label>
        <InformationDiv>{seatFormData.name}</InformationDiv>
        <Label>Surname</Label>
        <InformationDiv>{seatFormData.surname}</InformationDiv>
        <Label>Gender</Label>
        <InformationDiv>{seatFormData.gender}</InformationDiv>
        <Label>Age</Label>
        <InformationDiv>{seatFormData.age}</InformationDiv>
      </GridDiv>
      <GridDiv>
        {/* Divs in the middle*/}
        <TitleP>Car Informations</TitleP>
        <Label>Car Model</Label>
        <InformationDiv>{seatFormData.carModel}</InformationDiv>
        <Label>Car Type</Label>
        <InformationDiv>{seatFormData.carType}</InformationDiv>
        <Label>How many people will be traveling in the car?</Label>
        <InformationDiv>{seatFormData.travelingPeopleQuantity}</InformationDiv>
        <Label>Smoking Allowed</Label>
        <InformationDiv>{seatFormData.smokeAllow}</InformationDiv>
      </GridDiv>
      <GridDiv>
        {/* Divs on the right */}
        <TitleP>Seat Informations</TitleP>
        <Label>Departure Place</Label>
        <InformationDiv>{seatFormData.departurePlace}</InformationDiv>
        <Label>Departure Time</Label>
        <InformationDiv>{seatFormData.departureTime.toLocaleDateString()}</InformationDiv>
        <Label>Destination</Label>
        <InformationDiv>{seatFormData.destination}</InformationDiv>
        <Label>Estimated Arrival</Label>
        <InformationDiv>{seatFormData.estimatedArrival}</InformationDiv>
      </GridDiv>
    </Container>
  );
};

export default SeatDetails;

const Container = styled.div`
  ${tw`flex h-customHeight justify-center items-center`}
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
  ${tw`w-1/4 p-4`}
`;
