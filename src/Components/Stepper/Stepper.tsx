import React, { useState } from "react";
import { MdContentPasteSearch } from "react-icons/md";
import { BiSolidBriefcase } from "react-icons/bi";
import { BsArrowRightSquare, BsFillPersonVcardFill } from "react-icons/bs";
import styled from "styled-components";
import tw from "twin.macro";
import SeatDetails from "./SeatDetails";
import YourInfo from "./YourInfo";
import Summary from "./Summary";

const Stepper: React.FC<{ rentSeat: () => void }> = ({ rentSeat }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [modelVisible, setModelVisible] = useState<boolean>(false);

  return (
    <>
      <Container>
        <StepWrapper>
          <Step $focused={currentStep === 1}>
            <StepIcon>
              <MdContentPasteSearch color={"#4f5250"} size={45} />
            </StepIcon>
            <StepBody $focused={currentStep === 1}>
              <StepTitle>Details of the Seat</StepTitle>
              <StepDescription $focused={currentStep === 1}>
                Check out the details of the seat you will rent.
              </StepDescription>
            </StepBody>
          </Step>
        </StepWrapper>
        <StepArrow>
          <BsArrowRightSquare size={30} color={"#4f5250"} />
        </StepArrow>

        <StepWrapper>
          <Step $focused={currentStep === 2}>
            <StepIcon>
              <BsFillPersonVcardFill color={"#4f5250"} size={45} />
            </StepIcon>
            <StepBody $focused={currentStep === 2}>
              <StepTitle> Your Info</StepTitle>
              <StepDescription $focused={currentStep === 2}>
                Enter your information for seat rent.
              </StepDescription>
            </StepBody>
          </Step>
        </StepWrapper>
        <StepArrow>
          <BsArrowRightSquare size={30} color={"#4f5250"} />
        </StepArrow>

        <StepWrapper>
          <Step $focused={currentStep === 3}>
            <StepIcon>
              <BiSolidBriefcase color={"#4f5250"} size={45} />
            </StepIcon>
            <StepBody $focused={currentStep === 3}>
              <StepTitle>Summary</StepTitle>
              <StepDescription $focused={currentStep === 3}>
                Review the seat rental summary to confirm your seat reservation.
              </StepDescription>
            </StepBody>
          </Step>
        </StepWrapper>
      </Container>

      {/* Render the appropriate step component based on the currentStep */}
      {currentStep === 1 && <SeatDetails />}
      {currentStep === 2 && <YourInfo />}
      {currentStep === 3 && <Summary />}

      {/* Add navigation buttons for moving between steps */}
      <ButtonContainer>
        {currentStep > 1 && (
          <NavigationButton onClick={() => setCurrentStep(currentStep - 1)}>
            Previous
          </NavigationButton>
        )}
        {currentStep < 3 && (
          <NavigationButton onClick={() => setCurrentStep(currentStep + 1)}>
            Next
          </NavigationButton>
        )}
        {currentStep === 3 && (
          <NavigationButton onClick={() => setModelVisible(!modelVisible)}>
            Finish
          </NavigationButton>
        )}
      </ButtonContainer>

      {/* <----- Confirm Modal -----> */}
      <ModelContainer $visible={modelVisible}>
        <ContentContainer>
          <ModalHeader>
            <ModalTitle>Confirm the Rental</ModalTitle>
            <ModalDescription>
              If you confirm, your details will be shared with the car owner who
              is renting the seat. If you believe there is an error or something
              missing in your information, please click 'Cancel' to make the
              necessary edits.
            </ModalDescription>

            <ModalButtonContainer>
              <NavigationButton onClick={() => setModelVisible(!modelVisible)}>
                Cancel
              </NavigationButton>
              <NavigationButton onClick={rentSeat}>Confirm</NavigationButton>
            </ModalButtonContainer>
          </ModalHeader>
        </ContentContainer>
      </ModelContainer>
    </>
  );
};

export default Stepper;

const Container = styled.div`
  ${tw`flex`}
`;

const StepWrapper = styled.div`
  ${tw`w-1/3 text-center px-6`}
`;

const Step = styled.div<{ $focused: boolean }>`
  ${({ $focused }) => ($focused ? tw`bg-indigo-300` : tw`bg-gray-300`)}
  ${tw`rounded-lg flex items-center justify-center border border-gray-200`}
`;

const StepIcon = styled.span`
  ${tw`w-1/3 bg-transparent h-20 flex items-center justify-center`}
`;

const StepBody = styled.div<{ $focused: boolean }>`
  ${tw`w-2/3 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg`}
  ${({ $focused }) =>
    $focused ? tw`bg-indigo-400 text-white` : tw`bg-gray-200 text-black`}
`;

const StepTitle = styled.h2`
  ${tw`font-bold text-sm`}
`;

const StepDescription = styled.p<{ $focused: boolean }>`
  ${tw`text-xs`}
  ${({ $focused }) => ($focused ? tw`text-white` : tw`text-gray-600`)}
`;

const StepArrow = styled.div`
  ${tw`flex-1 flex items-center justify-center`}
`;

const ButtonContainer = styled.div`
  ${tw`flex justify-center text-center `}
`;

const NavigationButton = styled.button`
  &:hover {
    ${tw`bg-indigo-500 text-white`}
  }
  ${tw`flex [min-width: 15ch] justify-center items-center text-indigo-500 border border-indigo-500 font-bold uppercase  text-base px-4 py-2 mr-2 rounded outline-none mb-1 ease-linear transition-colors duration-150`}
`;

// <----- Confirm Modal Styles ----->
const ModelContainer = styled.div<{ $visible: boolean }>`
  ${tw`fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10`}
  ${({ $visible }) =>
    $visible ? tw`[visibility: visible]` : tw`[visibility: hidden]`}
`;

const ContentContainer = styled.div`
  ${tw`max-h-full w-full max-w-xl overflow-y-auto rounded-2xl bg-white`}
`;

const ModalHeader = styled.div`
  ${tw`m-4 max-w-[400px] mx-auto`}
`;

const ModalButtonContainer = styled.div`
  ${tw`flex items-center justify-center space-x-3`}
`;

const ModalTitle = styled.h1`
  ${tw`mb-4 text-3xl font-extrabold text-center`}
`;

const ModalDescription = styled.p`
  ${tw`text-gray-600 mb-6 text-center`}
`;
