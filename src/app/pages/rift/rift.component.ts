import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rift',
  templateUrl: './rift.component.html',
  styleUrls: ['./rift.component.scss']
})
export class RiftComponent implements OnInit {

  imgLink = 'assets/logos/oculus-rift.png';
  headDesc = 'The Oculus Rift, released March 28, 2016, is a VR device developed and manufactured by Oculus VR, a subdivision of ' +
   'Facebook, inc. It works using an integrated IMU to determine orientation and external sensors to determine position. ' +
   'The device can also be used with Touch Controllers also developed by Oculus VR, which are also tracked by an IMU and sensors. ' +
   'The Oculus Rift has access to several apps through the Oculus Store and SteamVR.';
  browsers = [
    {
      imageLink: 'assets/browsers/chrome.png',
      name: 'Google Chrome',
      instructions: [
        {
          title: 'Set up your headset',
          description: 'This tutorial is intended to help set up WebVR; as such, you should go through the Oculus ' +
            'Rift setup with the instructions here before proceeding: https://support.oculus.com/857827607684748/'
        },
        {
          title: 'Configure your Oculus Settings',
          description: 'To use the Oculus Rift with VR apps not in the Oculus Store, you have to enable ' +
            'Unknown Sources for your headset. To do so, open the Oculus application (should open automatically ' +
            'if headset is plugged in and on). Then, hit the Settings button and navigate to the tab labelled "General". ' +
            'Check off the box named Unknown Sources, allowing you to run apps outside the Oculus Store (i.e. WebVR, SteamVR, Unity).'
        },
        {
          title: 'Configure Chrome settings',
          description: 'In Chrome, WebVR must be enabled within the browser in order to work. To do so, navigate to chrome://flags ' +
            'in your navigation bar. Then, type "VR" into the search bar at the top and several options should show up. Enable the ' +
            '"WebVR" and "Oculus hardware support" options. Now, WebVR is ready with your Oculus Rift and you can get started!'
        },
        {
          title: 'Test it out!',
          description: 'Test out your device for WebVR! You can use any of the samples linked under the "Resources" tab to do so. ' +
            'In general, WebVR apps can be started in your headset by navigating to a website and clicking on the VR logo in the ' +
            'bottom corner.'
        }

    ]}
  ];

   constructor() { }

  ngOnInit() {

  }

}
