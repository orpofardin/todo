import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hotelbooking';

  // Implement ngOnInit properly
  ngOnInit(): void {
    console.log('AppComponent initialized');
  }
}
