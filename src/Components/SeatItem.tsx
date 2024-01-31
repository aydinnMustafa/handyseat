import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

import { ISeatItem } from "../types";
import { useAppDataContext } from "../context/AppDataContext";
import userIcon from "../assets/userIcon.png";

const SeatItem: React.FC<ISeatItem> = (props) => {
  const navigate = useNavigate();
  const { updateSeatData } = useAppDataContext();

  return (
    <Container>
      <UserImage src={userIcon} alt="Default User Picture" />
      <InfoContainer>
        <InfoWrapper>
          <div>
            <Title>Name Surname</Title>
            <Info>{props.name + " " + props.surname}</Info>
          </div>
          <div>
            <Title>Departure Place</Title>
            <Info>{props.departurePlace}</Info>
          </div>
          <div>
            <Title>Departure Time</Title>
            <Info>{props.departureTime.toLocaleString()}</Info>
          </div>
          <div>
            <Title>Destination</Title>
            <Info>{props.destination}</Info>
          </div>
          <div>
            <Title>Smoking Allowed</Title>
            <Info>{props.smokeAllow}</Info>
          </div>
          <div>
            <Title>Estimated Arrival</Title>
            <Info>{props.estimatedArrival + " " + "Hours"}</Info>
          </div>
          <RentButtonDiv>
            <RentButton
              type="button"
              onClick={() => {
                navigate(`/rentseat/${props._id}`);
                // Since we bring all the data of the seats in the SearchSeat component, if the "Rent" button of any seat is pressed, we transfer all props coming to the SeatItem to the seatData state of our context.
                //In this way, the user can continue the rental process without sending a request to the server again.
                updateSeatData({ ...props }); //
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
  ${tw`xl:pl-20 mt-2`}
`;

const RentButton = styled.button`
  &:hover {
    ${tw`bg-indigo-500 text-white`}
  }
  ${tw`flex justify-center items-center  text-indigo-500 border border-indigo-500 font-bold uppercase text-base px-20 py-1 lg:px-6 lg:py-3 rounded-full outline-none mb-1 ease-linear transition-all duration-150`}
`;
