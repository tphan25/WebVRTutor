import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vive',
  templateUrl: './vive.component.html',
  styleUrls: ['./vive.component.scss']
})
export class ViveComponent implements OnInit {
  imgLink = 'assets/logos/htcvive.jpg';
  constructor() { }

  ngOnInit() {
  }

}
