import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oculus-go',
  templateUrl: './oculus-go.component.html',
  styleUrls: ['./oculus-go.component.scss']
})
export class OculusGoComponent implements OnInit {
  imgLink = 'assets/logos/oculusgo.png';
  constructor() { }

  ngOnInit() {
  }

}
