import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";

import { useAppDataContext } from "../context/AppDataContext";
import axios from "axios";

const RentMySeat: React.FC = () => {
  const { seatFormData, updateSeatForm } = useAppDataContext();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    // Function that updates the value of our data according to input names
    const { name, value } = e.target;

    //Since smokeAllow should be boolean, we convert the type according to the value.
    const isAllowed = name === "smokeAllow" ? value === "Yes" : value;

    updateSeatForm({ ...seatFormData, [name]: isAllowed });
  };

  const handleDateTimeChange = (newDate: Date | null) => { // Since it is datetime, I created a special handler
    // Update the departureTime value of seatFormData
    updateSeatForm({ ...seatFormData, departureTime: newDate });
  };

  const rentMySeatHandler = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/rentmyseat",
        {
          name: seatFormData.name,
          surname: seatFormData.surname,
          gender: seatFormData.gender,
          age: seatFormData.age,
          email: seatFormData.email,
          phoneNumber: seatFormData.phoneNumber,

          carModel: seatFormData.carModel,
          carType: seatFormData.carType,
          smokeAllow: seatFormData.smokeAllow,

          travelingPeopleQuantity: seatFormData.travelingPeopleQuantity,
          departurePlace: seatFormData.departurePlace,
          departureTime: seatFormData.departureTime,
          destination: seatFormData.destination,
          estimatedArrival: seatFormData.estimatedArrival,
        }
      );
    // WHAT TO DO IF THE POST IS SUCCESSFUL // WİLL BE ADDED
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log(seatFormData);
  return (
    <>
      <PageDescriptionText>
        If your seat is rented, the details of the renter will be sent to the
        e-mail address you entered in the contact information. For this, please
        make sure that you enter your information correctly.
      </PageDescriptionText>

      <Container>
        {/* Personal Informations Inputs */}
        <GridDiv>
          <TitleP>Personal Informations</TitleP>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={seatFormData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <Label>Surname</Label>
          <Input
            type="text"
            name="surname"
            value={seatFormData.surname}
            onChange={handleChange}
            placeholder="Surname"
          />
          <Label>Gender</Label>
          <Select
            name="gender"
            value={seatFormData.gender}
            onChange={handleChange}
          >
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
            <Option value="Other">Other</Option>
          </Select>

          <Label>Age</Label>
          <Input
            type="number"
            name="age"
            value={seatFormData.age}
            onChange={handleChange}
            placeholder="Age"
          />
        </GridDiv>
        {/* Car Informations Inputs */}
        <GridDiv>
          <TitleP>Car Informations</TitleP>
          <Label>Car Model</Label>
          <Input
            type="text"
            name="carModel"
            value={seatFormData.carModel}
            onChange={handleChange}
            placeholder="Car Model"
          />
          <Label>Car Type</Label>
          <Input
            type="text"
            name="carType"
            value={seatFormData.carType}
            onChange={handleChange}
            placeholder="Car Type"
          />
          <Label>How many people will be traveling in the car?</Label>
          <Input
            type="number"
            name="travelingPeopleQuantity"
            value={seatFormData.travelingPeopleQuantity}
            onChange={handleChange}
            placeholder="People Quantity"
          />
          <Label>Smoking Allowed</Label>
          <Select
            name="smokeAllow"
            value={seatFormData.smokeAllow == true ? "Yes" : "No"}
            onChange={handleChange}
          >
            <Option value="Yes">Yes</Option>
            <Option value="No">No</Option>
          </Select>
        </GridDiv>

        {/* Seat Informations Inputs */}
        <GridDiv>
          <TitleP>Seat Informations</TitleP>
          <Label>Departure Place</Label>
          <Input
            type="text"
            name="departurePlace"
            value={seatFormData.departurePlace}
            onChange={handleChange}
            placeholder="Departure Place"
          />
          <Label>Departure Time</Label>
          <CustomDateTimePicker
            disableClock={true}
            minDate={new Date()}
            onChange={handleDateTimeChange}
            value={seatFormData.departureTime}
            locale="en-US"
            format="MM/dd/y h:mm a"
            required={true}
          />
          <Label>Destination</Label>
          <Input
            type="text"
            name="destination"
            value={seatFormData.destination}
            onChange={handleChange}
            placeholder="Destination"
          />
          <Label>Estimated Arrival</Label>
          <Input
            type="text"
            name="estimatedArrival"
            value={seatFormData.estimatedArrival}
            onChange={handleChange}
            placeholder="Hour and Minute"
          />
        </GridDiv>
        {/* Contact Informations Inputs */}
        <GridDiv>
          <TitleP>Contact Informations</TitleP>
          <Label>Cellphone Number</Label>
          <Input
            type="number"
            name="phoneNumber"
            value={seatFormData.phoneNumber}
            onChange={handleChange}
            placeholder="Cellphone Number"
          />
          <Label>Email Address</Label>
          <Input
            type="text"
            name="email"
            value={seatFormData.email}
            onChange={handleChange}
            placeholder="Email Address"
          />
          <InformationP>
            In the last step, this information is shown to the person who will
            rent your seat.
          </InformationP>
          <NavigationButton onClick={rentMySeatHandler}>
            Confirm
          </NavigationButton>
        </GridDiv>
      </Container>
    </>
  );
};

export default RentMySeat;

const PageDescriptionText = styled.div`
  ${tw`text-base font-mono font-semibold text-center shadow-lg rounded border-2 border-slate-400 mx-16 text-gray-600`}
`;

const Container = styled.div`
  ${tw`relative flex break-words bg-white w-full shadow-lg rounded px-4 py-6 flex-auto`}
`;

const GridDiv = styled.div`
  ${tw`w-1/4 p-4 mt-1`}
`;
const TitleP = styled.p`
  ${tw`text-xl font-mono font-semibold text-center text-gray-700`}
`;

const Label = styled.label`
  ${tw`block mb-1 font-semibold`}
`;

const Input = styled.input`
  &:hover {
    ${tw`border-blue-500`}
  }
  &:focus {
    ${tw`outline-none ring ring-blue-500/40`}
  }
  &:active {
    ${tw`ring ring-blue-500/40`}
  }
  ${tw`w-full h-11 mb-6 p-2 rounded-lg border border-gray-300 px-2`}
`;

const Select = styled.select`
  &:hover {
    ${tw`border-blue-500`}
  }
  &:focus {
    ${tw`outline-none ring ring-blue-500/40`}
  }
  &:active {
    ${tw`ring ring-blue-500/40`}
  }
  ${tw`w-full h-11 mb-6 p-2 border border-gray-300 rounded-lg`}
`;

const Option = styled.option`
  ${tw`bg-white text-black`}
`;

const InformationP = styled.p`
  ${tw`text-sm font-mono font-normal text-center text-red-400`}
`;

const CustomDateTimePicker = styled(DateTimePicker)`
  ${tw` w-full h-11 mb-6 p-2 rounded-lg border border-gray-300 px-2`}
`;

const NavigationButton = styled.button`
  &:hover {
    ${tw`bg-indigo-500 text-white`}
  }
  ${tw`flex w-full justify-center items-center text-indigo-500 border border-indigo-500 font-bold uppercase  text-base px-4 py-2 mr-2 rounded outline-none mb-1 mt-4 ease-linear transition-colors duration-150`}
`;
