import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

// Services
import { PersonsService } from './services/persons.service';
import { DataService } from './services/data.service'; 
import { ValidationService } from './services/validation.service';   

// Components
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SinglePersonComponent } from './components/single-person/single-person.component';
import { AddPersonComponent } from './components/add-person/add-person.component';



const AppRouter : Routes = [
{path: '', component: MainComponent},
{path: 'person/:personId', component: SinglePersonComponent},
{path: 'add-person', component: AddPersonComponent},
{path: '**', redirectTo: ''}
]; 

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent,
    SinglePersonComponent,
    AddPersonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRouter),
    FormsModule,
    HttpModule,
    FlashMessagesModule
  ],
  providers: [
    PersonsService,
    DataService,
    ValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
