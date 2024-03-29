export interface ISeatItem {
  _id: string; // we use auto id generated by mongodb
  name: string;
  surname: string;
  gender: string;
  age: number;
  email: string;
  phoneNumber: number;

  carModel: string;
  carType: string;
  smokeAllow: boolean | string; // Since I needed to display the SmokeAllow status on the frontend as a string, I made the type string or boolean.
  travelingPeopleQuantity: number;

  departurePlace: string;
  departureTime: Date;
  destination: string;
  estimatedArrival: number;
}

export interface IUserFormData {
  name: string;
  surname: string;
  gender: string;
  bagQuantity: number;
  email: string;
  phoneNumber: number;
  age: number;
  havePet: string;
  extraTextArea: string;
}

export interface IAppDataContext {
  userFormData: IUserFormData;
  seatData: ISeatItem;
  updateUserForm: (data: IUserFormData) => void;
  updateSeatData: (data: ISeatItem) => void;
  resetContextData: () => void;
}
