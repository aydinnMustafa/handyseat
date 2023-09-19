import React, { useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import styled from "styled-components";
import tw from "twin.macro";

import SeatItem from "./SeatItem";

const SearchSeat: React.FC = () => {
  const [value, setValue] = useState<DateValueType>({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleValueChange = (newValue: DateValueType) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const TrashseatData = [
    {
      id: 1,
      info1: "Ahmet Mehmet",
      info2: "Bilecik",
      info3: "İstanbul",
      info4: "23/05/2022 - 15:00",
      info5: "Yes",
      info6: "09:55",
    },
    {
      id: 2,
      info1: "Mehmet Kehribar",
      info2: "Kayseri",
      info3: "Ankara",
      info4: "15:00",
      info5: "No",
      info6: "22:55",
    },
    {
      id: 3,
      info1: "Samet Uçan",
      info2: "Bilecik",
      info3: "İstanbul",
      info4: "15:00",
      info5: "Yes",
      info6: "18:30",
    },
    {
      id: 4,
      info1: "Mustafa Aydın",
      info2: "Bilecik",
      info3: "Dünya",
      info4: "15:00",
      info5: "No",
      info6: "08:20",
    },
  ];

  return (
    <Container>
      <DatePickerStyle>
        <Datepicker
          primaryColor={"indigo"}
          minDate={new Date()}
          value={value}
          useRange={false}
          displayFormat={"DD/MM/YYYY"}
          onChange={handleValueChange}
        />
      </DatePickerStyle>

      {TrashseatData.map((seat) => (
        <SeatItem
          key={seat.id}
          id={seat.id}
          name_surname={seat.info1}
          departure_place={seat.info2}
          departure_time={seat.info4}
          destination={seat.info3}
          smoke={seat.info5}
          estimated_arrival={seat.info6}
        />
      ))}
    </Container>
  );
};

export default SearchSeat;

const Container = styled.div`
  ${tw`relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded px-4 py-6 flex-auto `}
`;
const DatePickerStyle = styled.div`
  ${tw`w-96 border-2 rounded-md`}
`;
