import { Component, OnInit, Input } from '@angular/core';
import { Resource } from 'src/app/models/resource.model';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  resourceDescription = 'This page contains several links to WebVR content that you can test with, including X3DOM content accessible in' +
    ' WebVR. Follow the links below to test out your HMD.';
  resourceList: Resource[] = [
    {
      image: '',
      link: 'https://www.google.com/',
      title: 'yeahtitle',
      description: 'yee123t'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
