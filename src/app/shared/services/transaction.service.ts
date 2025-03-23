import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl="http://localhost:8080/transactions";
  constructor(private http:HttpClient) { }
  // get transactions
  getTransactions(pageable:any){
    return this.http.get<any>(`${this.apiUrl}`,{params:pageable});
  }
  // get transaction
  getTransaction(id:number){
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  // add transaction
  addTransaction(transaction:any,idSource?:number,idDestination?:number){
    return this.http.post<any>(`${this.apiUrl}`,transaction,{params:{idSource:idSource || 0,idDestination:idDestination|| 0}});

  }


}
