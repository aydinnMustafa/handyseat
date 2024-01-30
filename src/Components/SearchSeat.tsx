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

interface SeatItem {
  id: number;
  name: string;
  surname: string;
  gender: string;
  age: number;
  email: string;
  phoneNumber: number;

  carModel: string;
  carType: string;
  smokeAllow: boolean;
  travelingPeopleQuantity: number;

  departurePlace: string;
  departureTime: Date;
  destination: string;
  estimatedArrival: number;
}

const SearchSeat: React.FC = () => {
  const [searchDate, setSearchDate] = useState<DateRangeType>({
    startDate: null,
    endDate: null,
  });
  const [data, setData] = useState<SeatItem[]>([]);
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
        <button onClick={fetchData}>TEST</button>
      </SearchContainer>
      {data.map((seat) => (
        <SeatItem
          key={seat.id}
          id={seat.id}
          name_surname={seat.name + seat.surname}
          departure_place={seat.departurePlace}
          departure_time={new Date(seat.departureTime)} // Since the data comes as a string, we convert it to date.
          destination={seat.destination}
          smoke={seat.smokeAllow == true ? "Yes" : "No"}
          estimated_arrival={seat.estimatedArrival.toString()}
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