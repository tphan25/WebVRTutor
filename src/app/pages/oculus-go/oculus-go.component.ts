import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oculus-go',
  templateUrl: './oculus-go.component.html',
  styleUrls: ['./oculus-go.component.scss']
})
export class OculusGoComponent implements OnInit {
  imgLink = 'assets/logos/oculusgo.png';
  headDesc = 'The Oculus Go, released May 1, 2018, is a standalone VR headset release by Oculus, a subsidiary of Facebook. ' +
    'As a standalone VR device, the Oculus Go does not require a mobile device or PC to function; it can be used entirely wirelessly. ' +
    'It works with 3DOF (degrees of freedom) instead of 6DOF, so it only tracks the rotation and orientation of the headset for viewing ' +
    'content in the headset, which can be used quite effectively for WebVR media.';
  browsers = [
    {
      imageLink: 'assets/browsers/oculusgo.png',
      name: 'Oculus Browser',
      instructions: [
        {
          title: 'Initial Setup',
          description: 'First, go through initial setup of your headset. You will actually require a mobile device for this step, ' +
            'and you can find the instructions at this link: ',
          link: 'https://support.oculus.com/183135912238400/'
        },
        {
          title: 'Open Oculus Browser',
          description: 'Then, with your controller, access the menu panel. Within the menu panel, click the button labelled "Internet". ' +
            'If a pop-up asking which browser to use shows up, then select "Oculus Browser". '
        },
        {
          title: 'Test it out!',
          description: 'Test out your device for WebVR! You can use any of the samples linked under the "Resources" tab to do so. ' +
            'In general, WebVR apps can be started in your headset by navigating to a website and clicking on the VR logo in the ' +
            'bottom corner. With Oculus Browser on Oculus Go, simply navigate to a webpage with WebVR content, and click ' +
            'the WebVR icon in the content.'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
