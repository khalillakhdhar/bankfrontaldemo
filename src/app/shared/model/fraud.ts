import { BaseModel } from "./base-model";
import { Transaction } from "./transaction";

export interface Fraud extends BaseModel {

  type: string;
  status: string;
  date: Date;
  transaction: Transaction;

}
