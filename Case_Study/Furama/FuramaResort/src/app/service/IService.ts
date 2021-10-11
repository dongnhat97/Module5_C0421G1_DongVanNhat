import {RentType} from "./rent-type";

export interface IService {
  id?:number;
  serviceName?:string
  areaService?:number;
  numberFloors?:number
  maxPeople?:number;
  rentCost?:number;
  rentType?: RentType;
  status?: string;
}
