import { BaseModel } from "./base-model";
import { User } from "./user";

export interface Account extends BaseModel {

  id?: number;
  iban: string;
  user: User;
  locked: boolean;
}
