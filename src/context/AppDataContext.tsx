import { createContext, useContext, useState, ReactNode } from "react";
import { ISeatItem } from "../types";
import { IAppDataContext, IUserFormData } from "../types";

const AppDataContext = createContext<IAppDataContext | undefined>(undefined);

export function AppDataProvider({ children }: { children: ReactNode }) {
  const defaultUserFormData: IUserFormData = {
    name: "",
    surname: "",
    gender: "Male",
    bagQuantity: 0,
    email: "",
    phoneNumber: 0,
    age: 0,
    havePet: "No",
    extraTextArea: "",
  };

  const defaultSeatData: ISeatItem = {
    _id: "",
    name: "",
    surname: "",
    gender: "Male",
    age: 0,
    email: "",
    phoneNumber: 0,

    carModel: "",
    carType: "",
    smokeAllow: false,
    travelingPeopleQuantity: 1,

    departurePlace: "",
    departureTime: new Date(),
    destination: "",
    estimatedArrival: 1,
  };

  const [userFormData, setUserFormData] =
    useState<IUserFormData>(defaultUserFormData);
  const [seatData, setSeatData] = useState<ISeatItem>(defaultSeatData);

  const updateUserForm = (newData: IUserFormData) => {
    setUserFormData(newData);
  };

  const updateSeatData = (newData: ISeatItem) => {
    setSeatData(newData);
  };

  const resetContextData = () => {
    setUserFormData(defaultUserFormData);
    setSeatData(defaultSeatData);
  };

  return (
    <AppDataContext.Provider
      value={{
        userFormData,
        updateUserForm,
        seatData,
        updateSeatData,
        resetContextData,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
}

export function useAppDataContext() {
  // To access the AppDataContext more easily, we define the useAppDataContext hook.
  const appDataContext = useContext(AppDataContext);
  if (!appDataContext) {
    throw new Error(
      "useAppDataContext has to be used within <AppDataProvider>"
    );
  }
  return appDataContext;
}
