import { BaseModel } from "./base-model";
import { User } from "./user";

export interface Address extends BaseModel {

  street: string;
  city:string;
  state:string;
  postalCode:string;
  country:string;
  user:User;

}
