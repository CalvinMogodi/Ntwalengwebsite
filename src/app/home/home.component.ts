import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToElement(str): void {
    const element = document.getElementById(str)
    if (element) element.scrollIntoView( {behavior: 'smooth', block: 'start' })
  }

}
