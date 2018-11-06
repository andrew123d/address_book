import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 


@Injectable()
export class DataService {
  personsData: any = []; 

  private personsDataSource = new BehaviorSubject(this.personsData);
  currentData = this.personsDataSource.asObservable();

  constructor(
    
  ) { }

  changePersonsData(data: any) {
    this.personsDataSource.next(data)
  }

}
