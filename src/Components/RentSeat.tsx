import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaSearchLocation } from "react-icons/fa";
const RentSeat: React.FC = () => {
  const [isDirty, setIsDirty] = useState(true);
  console.log(isDirty);
  console.log(isDirty);
  const location = useLocation();
  console.log(location);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded">
        <div className="px-4 py-2 flex-auto">
          <div className="tab-content tab-space">
            <div>
              <div className="flex">
                <div className="w-1/3 text-center px-6">
                  <div className="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200 ">
                    <div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
                      <FaSearchLocation color={"#4f5250"} size={25} />
                      {/* BÜTÜN İCONLARI BUNUN GİBİ YAP  */}
                    </div>
                    <div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                      <h2 className="font-bold text-sm">Personal Info</h2>
                      <p className="text-xs text-gray-600">
                        Just your personal information
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z" />
                  </svg>
                </div>
                <div className="w-1/3 text-center px-6">
                  <div className=" bg-indigo-300 rounded-lg flex items-center justify-center border border-gray-200">
                    <div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      >
                        <path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-4 13v1h-4v-1h4zm-6.002 1h-10.997l-.001-.914c-.004-1.05-.007-2.136 1.711-2.533.789-.182 1.753-.404 1.892-.709.048-.108-.04-.301-.098-.407-1.103-2.036-1.305-3.838-.567-5.078.514-.863 1.448-1.359 2.562-1.359 1.105 0 2.033.488 2.545 1.339.737 1.224.542 3.033-.548 5.095-.057.106-.144.301-.095.41.14.305 1.118.531 1.83.696 1.779.41 1.773 1.503 1.767 2.56l-.001.9zm-9.998-1h8.999c.003-1.014-.055-1.27-.936-1.473-1.171-.27-2.226-.514-2.57-1.267-.174-.381-.134-.816.119-1.294.921-1.739 1.125-3.199.576-4.111-.332-.551-.931-.855-1.688-.855-.764 0-1.369.31-1.703.871-.542.91-.328 2.401.587 4.09.259.476.303.912.13 1.295-.342.757-1.387.997-2.493 1.252-.966.222-1.022.478-1.021 1.492zm18-3v1h-6v-1h6zm0-3v1h-6v-1h6zm0-3v1h-6v-1h6z" />
                      </svg>
                    </div>
                    <div className="w-2/3 text-white bg-indigo-400 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                      <h2 className="font-bold text-sm">Account Info</h2>
                      <p className="text-xs text-white">
                        Anything you want for your credentials
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z" />
                  </svg>
                </div>
                <div className="w-1/3 text-center px-6">
                  <div className="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
                    <div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
                      <svg
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      >
                        <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
                      </svg>
                    </div>
                    <div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                      <h2 className="font-bold text-sm">Confirmation</h2>
                      <p className="text-xs text-gray-600">Finish it!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentSeat;
