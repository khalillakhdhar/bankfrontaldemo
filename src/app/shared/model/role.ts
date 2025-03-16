import { BaseModel } from "./base-model";
import { User } from "./user";

export interface Role extends BaseModel {
 name: string;
 users:User[];

}
