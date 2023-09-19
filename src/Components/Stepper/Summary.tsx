import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { useAppDataContext } from "../../context/AppDataContext";

const Summary: React.FC = () => {
  const { userFormData, seatFormData } = useAppDataContext();
  console.log(seatFormData);
  return (
    <>
      <TitlePLeft>Your Informations</TitlePLeft>
      <TitlePRight>Rent Informations</TitlePRight>
      <Container>
        {/* Your Informations */}
        <GridDiv>
          <Label>Name</Label>
          <InformationDiv>{userFormData.name}</InformationDiv>
          <Label>Gender</Label>
          <InformationDiv>{userFormData.gender}</InformationDiv>

          <Label>Email Address</Label>
          <InformationDiv>{userFormData.email}</InformationDiv>
          <Label>Age</Label>
          <InformationDiv>{userFormData.age}</InformationDiv>
        </GridDiv>
        <GridDiv>
          <Label>Surname</Label>
          <InformationDiv>{userFormData.surname}</InformationDiv>
          <Label>How many bags do you have?</Label>
          <InformationDiv>{userFormData.bagQuantity}</InformationDiv>
          <Label>Cellphone Number</Label>
          <InformationDiv>{userFormData.phoneNumber}</InformationDiv>
          <Label>Is there a pet traveling with you?</Label>
          <InformationDiv>{userFormData.havePet}</InformationDiv>
        </GridDiv>
        <GridDiv>
          <Label>What would you like to add?</Label>
          <InformationDivTextArea>
            {userFormData.extraTextArea}
          </InformationDivTextArea>
        </GridDiv>

        <Divider />

        {/* Rent Informations */}
        <GridDiv>
          <Label>Name</Label>
          <InformationDiv>{seatFormData.name}</InformationDiv>
          <Label>Gender</Label>
          <InformationDiv>{seatFormData.gender}</InformationDiv>
          <Label>Email Address</Label>
          <InformationDiv>{seatFormData.email}</InformationDiv>
          <Label>Age</Label>
          <InformationDiv>{seatFormData.age}</InformationDiv>
        </GridDiv>
        <GridDiv>
          <Label>Surname</Label>
          <InformationDiv>{seatFormData.surname}</InformationDiv>
          <Label>Destination</Label>
          <InformationDiv>{seatFormData.destination}</InformationDiv>
          <Label>Cellphone Number</Label>
          <InformationDiv>{seatFormData.phoneNumber}</InformationDiv>
          <Label>Departure Time</Label>
          <InformationDiv>
            {seatFormData.departureTime.toLocaleDateString()}
          </InformationDiv>
        </GridDiv>
      </Container>
    </>
  );
};

export default Summary;

const TitlePLeft = styled.p`
  ${tw`text-xl font-mono font-semibold text-gray-700 absolute top-32 left-60`}
`;

const TitlePRight = styled.p`
  ${tw`text-xl font-mono font-semibold text-gray-700 absolute top-32 right-60`}
`;

const Container = styled.div`
  ${tw`flex h-customHeight justify-center items-center`}
`;

const GridDiv = styled.div`
  ${tw`w-1/4 p-4`}
`;

const Label = styled.label`
  ${tw`block mb-1 font-semibold`}
`;

const InformationDiv = styled.div`
  ${tw`w-full h-9 bg-slate-300 mt-2 rounded-md flex items-center justify-center text-center text-slate-800 font-semibold`}
`;
const InformationDivTextArea = styled.div`
  ${tw`w-56 h-64 p-1 border border-gray-300 rounded-lg bg-slate-300 text-gray-600`}
`;

const Divider = styled.div`
  ${tw`mt-8 mr-9 h-[220px] min-h-[1em] w-0.5 bg-gray-500`}
`;
