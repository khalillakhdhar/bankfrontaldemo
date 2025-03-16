import { BaseModel } from "./base-model";
import { User } from "./user";

export interface Contact extends BaseModel {

  firstName: string;
  lastName: string;
  iban: string;
  user: User;

}
