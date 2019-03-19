import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gear-vr',
  templateUrl: './gear-vr.component.html',
  styleUrls: ['./gear-vr.component.scss']
})
export class GearVRComponent implements OnInit {
  imgLink = 'assets/logos/gearvr.png';
  headDesc = 'The Samsung GearVR, initially released on November 27, 2015, is a VR platform and headset compatible with several ' +
    'Samsung Galaxy mobile devices. It is powered by the Oculus App, and requires a compatible Samsung Galaxy Device to use. ' +
    'It can also be used with a one-handed controller to navigate within the Oculus App, and can serve a variety of VR content ' +
    'including some WebVR content.';
  browsers = [
    {
      imageLink: 'assets/browsers/oculusgo.png',
      name: 'Oculus Browser',
      instructions: [
        {
          title: 'Initial Setup',
          description: 'First, go through initial setup of your headset. The Samsung GearVR runs in the Oculus App, so you have to ' +
            'install that to get started. To do so, you can follow the instructions here:',
          link: 'https://support.oculus.com/525882800901618/'
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
