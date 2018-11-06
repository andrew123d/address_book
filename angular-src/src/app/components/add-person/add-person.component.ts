import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router'; 
import { ValidationService } from '../../services/validation.service'; 
import { FlashMessagesService } from 'angular2-flash-messages';     

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  showData: boolean = false;
  persData: any;
  newPersonNameTitle: string; 
  newPersonFirstName: string; 
  newPersonLastName: string; 
  newPersonBirthday: string; 
  newPersonPhone: string; 
  newPersonCell: string; 
  newPersonEmail: string; 
  newPersonPostCode: string; 
  newPersonState: string; 
  newPersonCity: string; 
  newPersonStreet: string; 
  newPersonImageMeddium: string; 
  newPersonImageSmall: string;
  newPersonImageLg: string;  

  constructor(
    private dataServ: DataService,
    private router: Router,
    private validServ: ValidationService,
    private flashMess: FlashMessagesService
  ) { }

  ngOnInit() {
    this.dataServ.currentData.subscribe(data => {
      let countRecords; 
      if(Object.keys(data).length == undefined || Object.keys(data).length == null){
        countRecords = data.length; 
      } else {
        countRecords = Object.keys(data).length; 
      }

      if(countRecords > 0){
        this.showData = true;
        this.persData = data;
        
      } else {
        this.showData = false;
      }
    })
  }

  addNewPerson(){
    //console.log(this.persData)

    let convertedDate = new Date(this.newPersonBirthday); 
    
    let newPerson = {
      name:{
        title: this.newPersonNameTitle, 
        first: this.newPersonFirstName,
        last: this.newPersonLastName
      },
      dob: {
        date: convertedDate
      },
      cell: this.newPersonCell,
      phone: this.newPersonPhone,
      email: this.newPersonEmail,
      location: {
        street: this.newPersonStreet, 
        city: this.newPersonCity, 
        state: this.newPersonState, 
        postcode: this.newPersonPostCode 
      },
      picture: {
        thumbnail: this.newPersonImageSmall,
        medium: this.newPersonImageMeddium,
        large: this.newPersonImageLg
      } 

    }

    if(!this.validServ.checkNewPerson(newPerson)){
      this.flashMess.show('All fields required!', {cssClass:'alert alert-danger' , timeout: 2000}); 
      return false; 
    }

    if(!this.validServ.checkEmail(newPerson)){
      this.flashMess.show('Email address not valid!', {cssClass:'alert alert-danger' , timeout: 2000}); 
      return false; 
    }

    
    this.persData.push(newPerson); 
    this.dataServ.changePersonsData(this.persData); 
    this.flashMess.show('New person added!', {cssClass:'alert alert-success' , timeout: 2000}); 
    this.newPersonNameTitle = '';  
    this.newPersonFirstName = ''; 
    this.newPersonLastName = ''; 
    this.newPersonCell = ''; 
    this.newPersonPhone = '';
    this.newPersonEmail = '';
    this.newPersonStreet = ''; 
    this.newPersonCity = '';
    this.newPersonState = ''; 
    this.newPersonPostCode = '';
    this.newPersonImageSmall = ''; 
    this.newPersonImageMeddium = ''; 
    this.newPersonImageLg = ''; 
    this.router.navigate(['/']);

  }

  skipPerson(){
    this.router.navigate(['/'])
  }

}
