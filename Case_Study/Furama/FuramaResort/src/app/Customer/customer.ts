import {CustomerType} from "./customer-type";

export interface Customer {
  id: number;
  customerName?: string;
  customerCode?: string;
  customerType?: CustomerType;
  customerBirthday?:Date;
  customerCar?:string;
  customerPhone?:string;
  customerEmail?:string;
  customerAddress?:string;


}
