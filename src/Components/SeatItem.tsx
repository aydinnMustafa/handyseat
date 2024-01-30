import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

import userIcon from "../assets/userIcon.png";

interface ItemProps {
  id: number;
  name_surname: string;
  departure_place: string;
  departure_time: Date;
  destination: string;
  smoke: string;
  estimated_arrival: string;
}

const SeatItem: React.FC<ItemProps> = ({
  id,
  name_surname,
  departure_place,
  departure_time,
  destination,
  smoke,
  estimated_arrival,
}) => {
  const navigate = useNavigate();
  return (
    <Container>
      <UserImage src={userIcon} alt="Default User Picture" />
      <InfoContainer>
        <InfoWrapper>
          <div>
            <Title>Name Surname</Title>
            <Info>{name_surname}</Info>
          </div>
          <div>
            <Title>Departure Place</Title>
            <Info>{departure_place}</Info>
          </div>
          <div>
            <Title>Departure Time</Title>
            <Info>{departure_time.toLocaleString()}</Info>
          </div>
          <div>
            <Title>Destination</Title>
            <Info>{destination}</Info>
          </div>
          <div>
            <Title>Smoking Allowed</Title>
            <Info>{smoke}</Info>
          </div>
          <div>
            <Title>Estimated Arrival</Title>
            <Info>{estimated_arrival}</Info>
          </div>
          <RentButtonDiv>
            <RentButton
              type="button"
              onClick={() => {
                navigate(`/rentseat/${id}`);
              }}
            >
              <span className="mr-1">
                <BsArrowRightCircle size={25} />
              </span>{" "}
              Rent
            </RentButton>
          </RentButtonDiv>
        </InfoWrapper>
      </InfoContainer>
    </Container>
  );
};

export default SeatItem;

const Container = styled.div`
  &:hover {
    ${tw`transform scale-101`}
  }
  ${tw`container flex flex-col xl:flex-row items-center bg-white rounded-lg shadow-gray-300 shadow-custominner p-3 xl:space-x-4 my-3 transition-transform`}
`;

const UserImage = styled.img`
  ${tw`w-16 h-16 rounded-full mx-auto`}
`;

const InfoContainer = styled.div`
  ${tw`grow`}
`;

const InfoWrapper = styled.div`
  ${tw`flex flex-col xl:flex-row pl-4 space-x-3 text-center`}
`;

const Title = styled.div`
  ${tw`text-base font-semibold bg-white rounded-lg shadow-md px-6 uppercase`}
`;
const Info = styled.div`
  ${tw`text-neutral-600 font-semibold text-center mt-2`}
`;

const RentButtonDiv = styled.div`
  ${tw`xl:pl-20 mt-2`} // mt-2 eklendi
`;

const RentButton = styled.button`
  &:hover {
    ${tw`bg-indigo-500 text-white`}
  }
  ${tw`flex justify-center items-center  text-indigo-500 border border-indigo-500 font-bold uppercase text-base px-20 py-1 lg:px-6 lg:py-3 rounded-full outline-none mb-1 ease-linear transition-all duration-150`} // px-20 py-1 değişti
`;
