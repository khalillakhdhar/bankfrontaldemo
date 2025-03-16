import { BaseModel } from "./base-model";
import { Fraud } from "./fraud";
import { User } from "./user";

export interface Transaction  extends BaseModel{

  description: string;
  amount: number;
  date: Date;
  status: string;
  destinationIban: string;
  sourceIban: string;
  type: string;
  user:User;
  fraud: Fraud;
}
