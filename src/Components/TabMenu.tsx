import React, { useState, useEffect } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { MdCarRental, MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useBeforeUnload } from "../hooks/useBeforeUnload";
const TabMenu: React.FC = () => {
  const location = useLocation();
  const [isDirty, setIsDirty] = useState(false);
  const [openTab, setOpenTab] = useState<number>(1);
  useBeforeUnload(isDirty);

  useEffect(() => {
    const isRentSeat =
      location.pathname.startsWith("/rentseat/") &&
      location.pathname !== "/rentseat/";
    // Eğer URL /rentseat/ ile başlıyorsa ve sadece /rentseat/ değilse, "Rent a Seat" sekmesini aç
    setOpenTab(
      location.pathname === "/searchseat" ? 1 :
      location.pathname === "/rentmyseat" ? 3 :
      isRentSeat ? 2 : 1
    );

    setIsDirty(isRentSeat); // Rent Seat sayfasına girildiyse eğer çıkılırsa bütün verilerin kaybolacağı uyarısını aktif et.
  }, [location.pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {  // Function to warn the user if the data will be deleted
    if (isDirty) {
      if (
        !window.confirm(
          "If you switch to a different menu, all the operations you have done on this page will be cancelled."
        )
      ) {
        e.preventDefault();
      }
    }
  };

  return (
    <>
      <div className="flex flex-wrap px-3 py-3">
        <div className="w-full border-2 border-slate-100 rounded">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row px-1"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                to="/searchseat"
                className={
                  "flex justify-center items-center text-xs font-bold uppercase px-5 py-3 shadow-lg rounded leading-normal " +
                  (openTab === 1
                    ? "text-white bg-indigo-400"
                    : "text-black bg-white")
                }
                onClick={handleLinkClick}
              >
                <span className="mr-1">
                  <FaSearchLocation size={20} />
                </span>
                Search Seat
              </Link>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <div
                className={
                  "flex justify-center items-center text-xs font-bold uppercase px-5 py-3 shadow-lg rounded leading-normal " +
                  (openTab === 2
                    ? "text-white bg-indigo-400"
                    : "text-gray-600 bg-gray-300 pointer-events-none")
                }
              >
                <span className="mr-1">
                  <MdOutlineAirlineSeatReclineExtra size={20} />
                </span>
                Rent a Seat
              </div>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                to="/rentmyseat"
                className={
                  "flex justify-center items-center text-xs font-bold uppercase px-5 py-3 shadow-lg rounded leading-normal " +
                  (openTab === 3
                    ? "text-white bg-indigo-400"
                    : "text-black-100 bg-white")
                }
                onClick={handleLinkClick}
              >
                <span className="mr-1">
                  <MdCarRental size={20} />
                </span>
                Rent my Seat
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TabMenu;
