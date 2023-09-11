import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import userIcon from "../assets/userIcon.png";
import { useNavigate } from "react-router-dom";

interface ItemProps {
  id: number;
  name_surname: string;
  departure_place: string;
  departure_time: string;
  destination: string;
  smoke: string;
  estimated_arrival: string;
}

const SeatItem: React.FC<ItemProps> = ({
  id,
  name_surname,
  departure_place,
  departure_time,
  destination,
  smoke,
  estimated_arrival,
  
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center bg-white rounded-lg shadow-gray-300 shadow-custominner p-3 space-x-4 my-3 hover:transform hover:scale-101 transition-transform">
      <div className="flex-shrink-0">
        <img
          src={userIcon}
          alt="Kullanıcı Resmi"
          className="w-16 h-16 rounded-full mx-auto"
        />
      </div>
      <div className="flex-grow">
        <div className="flex pl-4 space-x-4 text-center">
          <div>
            <div className="text-base text-slate-700 font-semibold bg-white rounded-lg shadow-md px-6  uppercase">
              Name Surname
            </div>
            <div className="text-neutral-600 font-semibold text-center mt-2">
              {name_surname}
            </div>
          </div>
          <div>
            <div className="text-base font-semibold bg-white rounded-lg shadow-md px-6 uppercase">
              Departure Place
            </div>
            <div className="text-neutral-600 font-semibold text-center mt-2">
              {departure_place}
            </div>
          </div>
          <div>
            <div className="text-base font-semibold bg-white rounded-lg shadow-md px-6 uppercase">
              Departure Time
            </div>
            <div className="text-neutral-600 font-semibold text-center mt-2">
              {departure_time}
            </div>
          </div>
          <div>
            <div className="text-base font-semibold bg-white rounded-lg shadow-md px-6 uppercase">
              Destination
            </div>
            <div className=" text-neutral-600 font-semibold text-center mt-2">
              {destination}
            </div>
          </div>
          <div>
            <div className="text-base font-semibold bg-white rounded-lg shadow-md px-6 uppercase">
              Smoke
            </div>
            <div className=" text-neutral-600 font-semibold text-center mt-2">
              {smoke}
            </div>
          </div>
          <div>
            <div className="text-base font-semibold bg-white rounded-lg shadow-md px-6 uppercase">
              Estimated Arrival
            </div>
            <div className="text-neutral-600 font-semibold text-center mt-2">
              {estimated_arrival}
            </div>
          </div>
          <div className="flex-shrink-0 pl-20">
          
            <button
              className="flex justify-center items-center text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white active:bg-indigo-600 font-bold uppercase text-base px-6 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {navigate(`/rentseat/${id}`, {replace:true, state:{name_surname,departure_place,departure_time,destination,smoke, estimated_arrival}})}}
            >
              <span className="mr-1">
                <BsArrowRightCircle size={25} />
              </span>{" "}
              Rent
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatItem;
