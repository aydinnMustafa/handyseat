import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAppDataContext } from "../context/AppDataContext";
import axios from "axios";

const RentMySeat: React.FC = () => {
  const { seatData, updateSeatData, resetContextData } = useAppDataContext();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    // Function that updates the value of our data according to input names
    const { name, value } = e.target;

    //Since smokeAllow should be boolean, we convert the type according to the value.
    const isAllowed = name === "smokeAllow" ? value === "Yes" : value;

    updateSeatData({ ...seatData, [name]: isAllowed });
  };

  const handleDateTimeChange = (newDate: Date | null) => {
    // Since it is datetime, I created a special handler
    // Update the departureTime value of seatData
    if (newDate) {
      updateSeatData({ ...seatData, departureTime: newDate });
    }
  };

  const rentMySeatHandler = async () => {
    const toastProgress = toast.loading(
      "Please wait, your rental ad is being created..."
    );
    try {
      await axios.post("http://localhost:3000/api/rentmyseat", {
        name: seatData.name,
        surname: seatData.surname,
        gender: seatData.gender,
        age: seatData.age,
        email: seatData.email,
        phoneNumber: seatData.phoneNumber,

        carModel: seatData.carModel,
        carType: seatData.carType,
        smokeAllow: seatData.smokeAllow,

        travelingPeopleQuantity: seatData.travelingPeopleQuantity,
        departurePlace: seatData.departurePlace,
        departureTime: seatData.departureTime,
        destination: seatData.destination,
        estimatedArrival: seatData.estimatedArrival,
      });
      resetContextData();
      toast.update(toastProgress, {
        render:
          "Your ad has been created successfully. We will email you when someone creates a rental request.",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error) {
      toast.update(toastProgress, {
        render:
          "An error has occured! Please make sure you entered all the information correctly and try again.",
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
      console.error("Error:", error);
    }
  };
  return (
    <>
      <ToastContainer />
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
            value={seatData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <Label>Surname</Label>
          <Input
            type="text"
            name="surname"
            value={seatData.surname}
            onChange={handleChange}
            placeholder="Surname"
          />
          <Label>Gender</Label>
          <Select name="gender" value={seatData.gender} onChange={handleChange}>
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
            <Option value="Other">Other</Option>
          </Select>

          <Label>Age</Label>
          <Input
            type="number"
            name="age"
            value={seatData.age}
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
            value={seatData.carModel}
            onChange={handleChange}
            placeholder="Car Model"
          />
          <Label>Car Type</Label>
          <Input
            type="text"
            name="carType"
            value={seatData.carType}
            onChange={handleChange}
            placeholder="Car Type"
          />
          <Label>How many people will be traveling in the car?</Label>
          <Input
            type="number"
            name="travelingPeopleQuantity"
            value={seatData.travelingPeopleQuantity}
            onChange={handleChange}
            placeholder="People Quantity"
          />
          <Label>Smoking Allowed</Label>
          <Select
            name="smokeAllow"
            value={seatData.smokeAllow == true ? "Yes" : "No"}
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
            value={seatData.departurePlace}
            onChange={handleChange}
            placeholder="Departure Place"
          />
          <Label>Departure Time</Label>
          <CustomDateTimePicker
            disableClock={true}
            minDate={new Date()}
            onChange={handleDateTimeChange}
            value={seatData.departureTime}
            locale="en-US"
            format="MM/dd/y h:mm a"
            required={true}
          />
          <Label>Destination</Label>
          <Input
            type="text"
            name="destination"
            value={seatData.destination}
            onChange={handleChange}
            placeholder="Destination"
          />
          <Label>Estimated Arrival(Please enter only the hour)</Label>
          <Input
            type="text"
            name="estimatedArrival"
            value={seatData.estimatedArrival}
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
            value={seatData.phoneNumber}
            onChange={handleChange}
            placeholder="Cellphone Number"
          />
          <Label>Email Address</Label>
          <Input
            type="text"
            name="email"
            value={seatData.email}
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
