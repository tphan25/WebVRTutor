import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rift',
  templateUrl: './rift.component.html',
  styleUrls: ['./rift.component.scss']
})
export class RiftComponent implements OnInit {

  imageLink = './oculus-rift.png';
  constructor() { }

  ngOnInit() {
  }

}
