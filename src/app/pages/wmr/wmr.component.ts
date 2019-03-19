import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wmr',
  templateUrl: './wmr.component.html',
  styleUrls: ['./wmr.component.scss']
})
export class WmrComponent implements OnInit {
  imgLink = 'assets/logos/wmr.jpg';
  headDesc = '';
  browsers = [
    {
      imageLink: '',
      name: '',
      instructions: [
        {
          title: '',
          description: ''
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
