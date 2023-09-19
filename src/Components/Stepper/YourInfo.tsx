import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useAppDataContext } from "../../context/AppDataContext";

const YourInfo: React.FC = () => {
  const { userFormData, updateUserForm } = useAppDataContext();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    // Function that updates the value of our data according to input names
    const { name, value } = e.target;

    updateUserForm({ ...userFormData, [name]: value });
  };
  console.log(userFormData);
  return (
    <>
      <Container>
        {/* First four inputs */}
        <GridDiv>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={userFormData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <Label>Gender</Label>
          <Select
            name="gender"
            value={userFormData.gender}
            onChange={handleChange}
          >
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
            <Option value="Other">Other</Option>
          </Select>
          <Label>Email Address</Label>
          <Input
            type="text"
            name="email"
            value={userFormData.email}
            onChange={handleChange}
            placeholder="Email Address"
          />
          <Label>Age</Label>
          <Input
            type="number"
            name="age"
            value={userFormData.age}
            onChange={handleChange}
            placeholder="Age"
          />
        </GridDiv>
        {/* Second four inputs */}
        <GridDiv>
          <Label>Surname</Label>
          <Input
            type="text"
            name="surname"
            value={userFormData.surname}
            onChange={handleChange}
            placeholder="Surname"
          />
          <Label>How many bags do you have?</Label>
          <Input
            type="number"
            name="bagQuantity"
            value={userFormData.bagQuantity}
            onChange={handleChange}
            placeholder="Number of Bags"
          />
          <Label>Cellphone Number</Label>
          <Input
            type="number"
            name="phoneNumber"
            value={userFormData.phoneNumber}
            onChange={handleChange}
            placeholder="Cellphone Number"
          />
          <Label>Is there a pet traveling with you?</Label>
          <Select
            name="havePet"
            value={userFormData.havePet}
            onChange={handleChange}
          >
            <Option value="No">No</Option>
            <Option value="Yes">Yes</Option>
          </Select>
        </GridDiv>

        {/* Textarea on the right */}
        <GridDiv>
          <Label>What would you like to add?</Label>
          <Textarea
            name="extraTextArea"
            value={userFormData.extraTextArea}
            onChange={handleChange}
            maxLength={250}
            placeholder="What would you like to add..."
          ></Textarea>
        </GridDiv>
      </Container>
    </>
  );
};

export default YourInfo;

const Container = styled.div`
  ${tw`flex h-customHeight justify-center items-center`}
`;

const GridDiv = styled.div`
  ${tw`w-1/4 p-4`}
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
  ${tw`w-full h-10 mb-4 p-2 rounded-lg border border-gray-300 px-2`}
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
  ${tw`w-full p-2 mb-4 border border-gray-300 rounded-lg`}
`;

const Option = styled.option`
  ${tw`bg-white text-black`}
`;

const Textarea = styled.textarea`
  &:focus {
    ${tw`outline-none ring ring-blue-500/40`}
  }
  ${tw`w-96 h-72 p-2 border border-gray-300 rounded-lg resize-none`}
`;
