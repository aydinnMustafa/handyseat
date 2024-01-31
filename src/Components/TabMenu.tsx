import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearchLocation } from "react-icons/fa";
import { MdCarRental, MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import styled from "styled-components";
import tw from "twin.macro";

import { useAppDataContext } from "../context/AppDataContext";
import { useBeforeUnload } from "../hooks/useBeforeUnload";
const TabMenu: React.FC = () => {
  const location = useLocation();
  const { resetContextData } = useAppDataContext();
  const [isDirty, setIsDirty] = useState(false);
  const [openTab, setOpenTab] = useState<number>(1);
  useBeforeUnload(isDirty);

  useEffect(() => {
    const isRentSeat =
      location.pathname.startsWith("/rentseat/") &&
      location.pathname !== "/rentseat/";
    // If the URL starts with /rentseat/ and not just /rentseat/, open the "Rent a Seat" tab
    setOpenTab(
      location.pathname === "/searchseat"
        ? 1
        : location.pathname === "/rentmyseat"
        ? 3
        : isRentSeat
        ? 2
        : 1
    );

    setIsDirty(isRentSeat); // If you have entered the Rent Seat page, activate the warning that all data will be lost if you exit.
  }, [location.pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Function to warn the user if the data will be deleted
    if (isDirty) {
      const confirmed = window.confirm(
        "If you switch to a different menu, all the operations you have done on this page will be cancelled. Do you want to continue?"
      );

      if (!confirmed) {
        e.preventDefault();
      } else {
        resetContextData();
      }
    }
  };

  return (
    <Container>
      <TabWrapper>
        <TabList role="tablist">
          <TabItem>
            <StyledLink
              to="/searchseat"
              $focused={openTab === 1}
              onClick={handleLinkClick}
            >
              <span className="mr-1">
                <FaSearchLocation size={20} />
              </span>
              Search Seat
            </StyledLink>
          </TabItem>
          <TabItem>
            <StyledDiv $focused={openTab === 2}>
              <span className="mr-1">
                <MdOutlineAirlineSeatReclineExtra size={20} />
              </span>
              Rent a Seat
            </StyledDiv>
          </TabItem>
          <TabItem>
            <StyledLink
              to="/rentmyseat"
              $focused={openTab === 3}
              onClick={handleLinkClick}
            >
              <span className="mr-1">
                <MdCarRental size={20} />
              </span>
              Rent my Seat
            </StyledLink>
          </TabItem>
        </TabList>
      </TabWrapper>
    </Container>
  );
};

export default TabMenu;

const Container = styled.div`
  ${tw`flex flex-wrap px-3 py-3`}
`;

const TabWrapper = styled.div`
  ${tw`w-full border-2 border-slate-100 rounded`}
`;

const TabList = styled.ul`
  ${tw`flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row px-1`}
`;

const TabItem = styled.li`
  ${tw`-mb-px mr-2 last:mr-0 flex-auto text-center`}
`;

const StyledLink = styled(Link)<{ $focused: boolean }>`
  ${tw`flex justify-center items-center text-xs font-bold uppercase px-5 py-3 shadow-lg rounded leading-normal`}
  ${({ $focused }) =>
    $focused ? tw`text-white bg-indigo-400` : tw`text-black bg-white`}
  &:hover {
    ${tw`bg-indigo-400 text-white`}
  }
`;

const StyledDiv = styled.div<{ $focused: boolean }>`
  ${tw`flex justify-center items-center text-xs font-bold uppercase px-5 py-3 shadow-lg rounded leading-normal`}
  ${({ $focused }) =>
    $focused
      ? tw`text-white bg-indigo-400`
      : tw`text-gray-600 bg-gray-300 pointer-events-none`}
`;
