import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '/app.component.html',    //based on selector name in the child component
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training_emilia';
}



/*
<app-root></app-root> is the root tag created by the Angular by default (see index.html).
This tag has the reference in the main.ts file.
*/