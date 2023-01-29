import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchkey = new BehaviorSubject('')
  //to share stream of data
  
  constructor(private http:HttpClient) { }
  
  getAllProducts(){
    return this.http.get('http://localhost:3000/all-products')
  }
}
