import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useAppDataContext } from "../../context/AppDataContext";

const YourInfo: React.FC = () => {
  const { userFormData, updateUserForm } = useAppDataContext();
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

  const validateInput = (name: string, value: any) => {
    if (name === "name" && !value) {
      return "Name is required";
    }
    if (name === "surname" && !value) {
      return "Surname is required";
    }
    if (name === "age" && value < 18) {
      return "You must be over 18 years of age.";
    }
    if (name === "email" && !value) {
      return "Email cannot be empty.";
    }
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Incorrect E-mail address.";
    }
    return null;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    // Function that updates the value of our data according to input names
    const { name, value } = e.target;

    updateUserForm({ ...userFormData, [name]: value });

    const error = validateInput(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  console.log(userFormData);

  return (
    <>
      <Container>
        {/* First four inputs */}
        <GridDiv>
          <Label>Name</Label>
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          <Input
            type="text"
            name="name"
            value={userFormData.name}
            onChange={handleChange}
            placeholder="Name"
            $error={!!errors.name}
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
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          <Input
            type="text"
            name="email"
            value={userFormData.email}
            onChange={handleChange}
            placeholder="Email Address"
            $error={!!errors.email}
          />

          <Label>Age</Label>
          {errors.age && <ErrorMessage>{errors.age}</ErrorMessage>}
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
          {errors.surname && <ErrorMessage>{errors.surname}</ErrorMessage>}
          <Input
            type="text"
            name="surname"
            value={userFormData.surname}
            onChange={handleChange}
            placeholder="Surname"
            $error={!!errors.surname}
          />
          <Label>How many bags do you have?</Label>
          <RangeDiv>
          <Input
            type="range"
            min={0}
            max={5}
            name="bagQuantity"
            value={userFormData.bagQuantity}
            onChange={handleChange}
            placeholder="Number of Bags"
          />
          <Label>{userFormData.bagQuantity}</Label>
          </RangeDiv>
          <Label>Cellphone Number</Label>
          <Input
            type="text"
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
  ${tw`flex h-96 justify-center items-center`}
`;

const GridDiv = styled.div`
  ${tw`w-1/4 p-4`}
`;

const Label = styled.label`
  ${tw`block mb-1 font-semibold`}
`;

const RangeDiv = styled.div`
  ${tw`flex`}
`;

const Input = styled.input<{ $error?: boolean }>`
  &:hover {
    ${tw`border-blue-500`}
  }
  &:focus {
    ${tw`outline-none ring ring-blue-500/40`}
  }
  &:active {
    ${tw`ring ring-blue-500/40`}
  }
  ${({ $error }) => ($error ? tw`border-red-600` : tw`border-gray-300`)}
  ${tw`w-full h-10 mb-5 p-2 rounded-lg border px-2`}
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
  ${tw`w-full p-2 mb-5 border border-gray-300 rounded-lg`}
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

const ErrorMessage = styled.div`
  ${tw`text-red-400 absolute mt-10 ml-2`}
`;
