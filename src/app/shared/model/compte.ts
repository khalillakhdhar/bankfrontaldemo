import { BaseInterface } from './base-interface';
import { Transaction } from "./transaction";
import { Utilisateur } from "./utilisateur";

export interface Compte extends BaseInterface{
    
    solde: number;
    utilisateur: Utilisateur;
    transactions: Transaction[]
}
