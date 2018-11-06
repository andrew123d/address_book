import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'; 
import 'rxjs/add/operator/map'

@Injectable()
export class PersonsService {

  constructor(
    private http: Http
  ) { }


  getPersonsExample(){
    let headers = new Headers(); 
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://randomuser.me/api/?results=100', {headers: headers})
    .map(res => res.json());  
  }

}
