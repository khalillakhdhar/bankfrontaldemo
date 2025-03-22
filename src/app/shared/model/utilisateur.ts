import { BaseInterface } from "./base-interface";
import { Compte } from "./compte";
import { Profile } from "./profile";

export interface Utilisateur  extends BaseInterface{

   nom: string;
    email: string;
    password: string;
    comptes: Compte[];
    profile: Profile;
    roles: string;
    etat: string;
   
}
