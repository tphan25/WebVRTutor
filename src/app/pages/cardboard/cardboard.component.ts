import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardboard',
  templateUrl: './cardboard.component.html',
  styleUrls: ['./cardboard.component.scss']
})
export class CardboardComponent implements OnInit {
  imgLink = 'assets/logos/cardboard.png';
  constructor() { }

  ngOnInit() {
  }

}
