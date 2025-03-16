import { Account } from "./account";
import { Address } from "./address";
import { BaseModel } from "./base-model";
import { Contact } from "./contact";
import { Role } from "./role";
import { Transaction } from "./transaction";

export interface User extends BaseModel {

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  contacts: Contact[];
  account: Account;
  transactions: Transaction[];
  active: boolean;
  role: Role;
  address: Address;



}
