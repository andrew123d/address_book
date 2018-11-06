import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../../services/persons.service';
import { FlashMessagesService } from 'angular2-flash-messages';  
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service'; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  personsData: any = [];
  tempPersons: any = [];
  contentLoaded: boolean = false;   

  constructor(
    private perServ: PersonsService,
    private flashMess: FlashMessagesService, 
    private dataServ: DataService
  ) { }

  ngOnInit() {
    this.createPersons(); 
  }

  getTempPersonsData(){
    return new Promise((resolve, reject) => {
      this.perServ.getPersonsExample().subscribe(per => {
          this.tempPersons = per.results;
          resolve(this.tempPersons);           
      })
    })
    
  }

  createPersons(){
    this.checkIfPersonsCreated().then(response => {
      if(response){
        this.dataServ.currentData.subscribe(data => {
          this.personsData = data;
          //console.log(this.personsData)
          this.contentLoaded = true;
        });
      } else {
        this.getTempPersonsData().then(value => {
          this.personsData = value;
          //console.log(this.personsData)
          this.dataServ.changePersonsData(this.personsData); 
          if(Object.keys(this.personsData).length > 0){
            this.contentLoaded = true;
          } else {
            this.contentLoaded = false;
          }
        });
      }
    })    
  }

  checkIfPersonsCreated(){
    return new Promise((resolve, reject) => {
      this.dataServ.currentData.subscribe(data => {
      
        let countRecords; 
        if(Object.keys(data).length == undefined || Object.keys(data).length == null){
          countRecords = data.length; 
        } else {
          countRecords = Object.keys(data).length; 
        }
        
        if(countRecords > 0){
          resolve(true)
        } else {
          resolve(false) 
        }
      }); 
    })
    
  }

  removePerson(index){
    
    this.personsData.splice(index, 1); 
    this.flashMess.show('Person removed', {cssClass:'alert alert-success' , timeout: 2000});
    this.dataServ.changePersonsData(this.personsData); 
           
  }

}
