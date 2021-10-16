import {CarType} from "./car-type";

export interface Car {
  carId: number;
  garage?: string;
  licensePlates?: string;
  carType?: CarType;
  startAddress?: string;
  endAddress?: string;
  phone?: string;
  email?: string;
  startHour?: string;

}
