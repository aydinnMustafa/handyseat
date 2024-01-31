import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Stepper from "./Stepper/Stepper";
import { useAppDataContext } from "../context/AppDataContext";
import emailjs from "@emailjs/browser";

const RentSeat: React.FC = () => {
  const navigate = useNavigate();
  const { userFormData, seatData, resetContextData } = useAppDataContext();

  const rentSeat = () => {
    const toastProgress = toast.loading(
      "Please wait, your rental request is being created..."
    );
    emailjs
      .send(
        "service_8lqkrdr",
        "template_tqv3eck",
        {
          from_name: "Handy Seat",
          to_email: seatData.email,
          to_name: seatData.name + seatData.surname,
          message: `
        Name: ${userFormData.name}
        Surname: ${userFormData.surname}
        Gender: ${userFormData.gender}
        Bag Quantity: ${userFormData.bagQuantity}
        Email: ${userFormData.email}
        Phone Number: ${userFormData.phoneNumber}
        Age: ${userFormData.age}
        Have Pet: ${userFormData.havePet}
        Extra Text: ${userFormData.extraTextArea}
      `,
        },
        "1sZCbwVePBF58Mw9b"
      )
      .then(() => {
        toast.update(toastProgress, {
          render:
            "Your request has been created successfully. The seat owner will contact you as soon as possible.",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
        setTimeout(() => {
          resetContextData();
          navigate("/searchseat");
        }, 2000);
      })
      .catch((error) => {
        toast.update(toastProgress, {
          render: "An error has occured! Please try again.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        console.error("An error has occurred:", error);
      });
  };

  return (
    <Container>
      <Stepper rentSeat={rentSeat} />
      <ToastContainer />
    </Container>
  );
};

export default RentSeat;

const Container = styled.div`
  ${tw`relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded px-4 py-2 flex-auto`}
`;
