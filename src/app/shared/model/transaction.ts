import { BaseInterface } from "./base-interface";
import { Compte } from "./compte";

export interface Transaction  extends BaseInterface{
    id: number;
    montant: number;
    source: Compte;
    destination:Compte

}
