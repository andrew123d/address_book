import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  constructor() { }

  checkNewPerson(person){
    if(person.name.title == undefined || person.name.title == null || person.name.title.length < 1 ||
      person.name.first == undefined || person.name.first == null || person.name.first.length < 1 ||
      person.name.last == undefined || person.name.last == null || person.name.last.length < 1 ||
      person.dob.date == undefined || person.dob.date == null ||
      person.cell == undefined || person.cell == null || person.cell.length < 1 ||
      person.phone == undefined || person.phone == null || person.phone.length < 1 ||
      person.email == undefined || person.email == null || person.email.length < 1 ||
      person.picture.thumbnail == undefined || person.picture.thumbnail == null || person.picture.thumbnail.length < 1 ||
      person.picture.medium == undefined || person.picture.medium == null || person.picture.medium.length < 1 ||
      person.picture.large == undefined || person.picture.large == null || person.picture.large.length < 1 ||
      person.location.street == undefined || person.location.street == null || person.location.street.length < 1 ||
      person.location.city == undefined || person.location.city == null || person.location.city.length < 1 ||
      person.location.state == undefined || person.location.state == null || person.location.state.length < 1 ||
      person.location.postcode == undefined || person.location.postcode == null || person.location.postcode.length < 1
    ){
      return false; 
    } else {
      return true; 
    }
  }

  checkEmail(person){
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(person.email).toLowerCase());
  }

}