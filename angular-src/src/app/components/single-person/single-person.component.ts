import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';  

@Component({
  selector: 'app-single-person',
  templateUrl: './single-person.component.html',
  styleUrls: ['./single-person.component.css']
})
export class SinglePersonComponent implements OnInit {
  personData: any;
  personId: string;
  formatedDate: string;   

  constructor(
    private dataServ: DataService, 
    private router: Router,
    private activeRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(result => {
      
      this.personId = result.personId; 
      this.getPersonData(this.personId);
    }); 
  }

  getPersonData(index){
    let persons; 
    this.dataServ.currentData.subscribe(data => {
      persons = data;
      this.personData = persons[index]; 

      // create clear date 
      let newDate = new Date(this.personData.dob.date); 
      let day = newDate.getDay(); 
      let month = newDate.getMonth(); 
      let year = newDate.getFullYear(); 
      this.formatedDate = year+'/'+month+'/'+day; 
      console.log(this.personData)
    }); 

  }

  returnToMain(){
    this.router.navigate(['/'])
  }

}
