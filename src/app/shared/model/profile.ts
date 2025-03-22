import { Utilisateur } from "./utilisateur";

export interface Profile {
    id: number;
 
    phoneNumber: string;
    adresse: string;
    utilisateur: Utilisateur;
    
}
