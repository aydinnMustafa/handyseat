// AppDataContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface UserFormData {
  name: string;
  surname: string;
  gender: string;
  bagQuantity: number;
  email: string;
  phoneNumber: number;
  age: number;
  havePet: string;
  extraTextArea: string; // Maybe you could consider making a string within an array. NOTICE
  isSubmit: boolean;
}

interface SeatFormData {
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
  departureTime: null | Date;
  destination: string;
  estimatedArrival: number;
}

interface AppDataContextType {
  userFormData: UserFormData;
  seatFormData: SeatFormData;
  updateUserForm: (data: UserFormData) => void;
  updateSeatForm: (data: SeatFormData) => void;
}

const AppDataContext = createContext<AppDataContextType | undefined>(undefined);

export function AppDataProvider({ children }: { children: ReactNode }) {
  const [userFormData, setUserFormData] = useState<UserFormData>({
    name: "",
    surname: "",
    gender: "Male",
    bagQuantity: 0,
    email: "",
    phoneNumber: 0,
    age: 0,
    havePet: "No",
    extraTextArea: "",
    isSubmit: false
  });
  const [seatFormData, setSeatFormData] = useState<SeatFormData>({
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
    estimatedArrival: new Date().getHours(),
  });

  const updateUserForm = (newData: UserFormData) => {
    setUserFormData(newData);
  };

  const updateSeatForm = (newData: SeatFormData) => {
    setSeatFormData(newData);
  };

  return (
    <AppDataContext.Provider
      value={{
        userFormData,
        seatFormData,
        updateUserForm,
        updateSeatForm,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
}

export function useAppDataContext() {
  const appDataContext = useContext(AppDataContext);
  if (!appDataContext) {
    throw new Error(
      "useAppDataContext has to be used within <AppDataProvider>"
    );
  }
  return appDataContext;
}
