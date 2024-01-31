import React, { useState, useEffect } from "react";
import axios from "axios";
import Datepicker, {
  DateRangeType,
  DateValueType,
} from "react-tailwindcss-datepicker";
import styled from "styled-components";
import tw from "twin.macro";
import ReactPaginate from "react-paginate";
import SeatItem from "./SeatItem";
import { ISeatItem } from "../types";

const SearchSeat: React.FC = () => {
  const [searchDate, setSearchDate] = useState<DateRangeType>({
    startDate: null,
    endDate: null,
  });
  const [data, setData] = useState<ISeatItem[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handleValueChange = (newDate: DateValueType) => {
    newDate !== null ? setSearchDate(newDate) : null; // If date is not null, we assign it to states
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]); // It will run every time currentPage changes

  const fetchData = async () => {
    try {
      // If startDate is not null, we add searchDate to the request.
      // We only need to check startDate. Since the date picker we use has a range, endDate is definitely selected as well.
      const response = await axios.get(
        `http://localhost:3000/api/seats?page=${currentPage + 1}&pageSize=5${
          searchDate.startDate !== null
            ? `&startDate=${searchDate.startDate?.toString()}&endDate=${searchDate.endDate?.toString()}`
            : ""
        }`
      );
      setData([]);
      setData(response.data.seats);
      setPageCount(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageClick = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <Container>
      <SearchContainer>
        <DatePickerStyle>
          <Datepicker
            primaryColor={"indigo"}
            minDate={new Date()}
            value={searchDate}
            useRange={true}
            displayFormat={"DD/MM/YYYY"}
            onChange={handleValueChange}
          />
        </DatePickerStyle>
        <SearchButton onClick={fetchData}>SEARCH</SearchButton>
      </SearchContainer>
      {data.map((seat) => (
        <SeatItem
          key={seat._id}
          _id={seat._id}
          name={seat.name}
          surname={seat.surname}
          departurePlace={seat.departurePlace}
          departureTime={new Date(seat.departureTime)} // Since the data comes as a string, we convert it to date.
          destination={seat.destination}
          smokeAllow={seat.smokeAllow === true ? "Yes" : "No"}
          estimatedArrival={seat.estimatedArrival}
          gender={seat.gender}
          age={seat.age}
          email={seat.email}
          phoneNumber={seat.phoneNumber}
          carModel={seat.carModel}
          carType={seat.carType}
          travelingPeopleQuantity={seat.travelingPeopleQuantity}
        />
      ))}

      <CustomReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </Container>
  );
};

export default SearchSeat;

const Container = styled.div`
  ${tw`relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded px-4 py-6 flex-auto`}
`;
const DatePickerStyle = styled.div`
  ${tw`w-96 border-2 rounded-md`}
`;
const CustomReactPaginate = styled(ReactPaginate)`
  ${tw`flex justify-center space-x-4 font-bold`}
`;

const SearchContainer = styled.div`
  ${tw`flex space-x-12 justify-center`}
`;

const SearchButton = styled.button`
  &:hover {
    ${tw`bg-indigo-500 text-white`}
  }
  ${tw`flex justify-center items-center  text-indigo-500 border border-indigo-500 font-bold uppercase text-base px-20 py-1 lg:px-6 lg:py-3 rounded-md outline-none mb-1 ease-linear transition-all duration-150`}
`;
