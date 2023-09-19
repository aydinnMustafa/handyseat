import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import styled from "styled-components";
import tw from "twin.macro";

const Footer: React.FC = () => {
  return (
    <>
      <FooterContainer>
        <FooterTopContainer>
          <FooterTop>
            <ALinkedin href="https://www.linkedin.com/in/mustafa-aydin0/">
              <BsLinkedin size={30} />
            </ALinkedin>

            <AGithub href="https://github.com/aydinnMustafa">
              <BsGithub size={32} />
            </AGithub>
          </FooterTop>
        </FooterTopContainer>

        <FooterBottom>Created by Mustafa Aydın / 2023</FooterBottom>
      </FooterContainer>
    </>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  ${tw`flex flex-col items-center bg-blue-400 text-center text-white`}
`;

const FooterTopContainer = styled.div`
  ${tw`container px-6 pt-3`}
`;

const FooterTop = styled.div`
  ${tw`mb-3 flex justify-center`}
`;

const FooterBottom = styled.div`
  ${tw`w-full p-2 text-center bg-gray-500`}
`;

const ALinkedin = styled.a`
  &:hover {
    ${tw`bg-black`}
  }
  ${tw`mr-3 h-7 w-7`}
`;

const AGithub = styled.a`
  &:hover {
    ${tw`bg-black`}
  }
  ${tw`h-8 w-8 rounded-full`}
`;
