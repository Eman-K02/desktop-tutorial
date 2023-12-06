import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'h1';
  /* ava bo checkbox e ya */
  PL = ['JavaScript', 
  'Python', 
  'Java', 
  'C++'];

  Description = '';
  massage:string="";
  onSubmit(form: NgForm) {
  if (form.valid) {
    console.log('Form Submitted!', form.value);
  } else {
    console.log('Form is invalid!');
  }
  
}
}