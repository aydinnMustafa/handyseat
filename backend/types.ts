export interface IRenter {
  name: string;
  surname: string;
  gender: string;
  bagQuantity: number;
  email: string;
  phoneNumber: number;
  age: number;
  havePet: string;
  extraTextArea?: string;
}

export interface ISeat {
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
