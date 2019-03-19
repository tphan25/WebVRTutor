import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardboard',
  templateUrl: './cardboard.component.html',
  styleUrls: ['./cardboard.component.scss']
})
export class CardboardComponent implements OnInit {
  imgLink = 'assets/logos/cardboard.png';
  headDesc = 'Google Cardboard is a platform for viewing VR content through the use of a mobile device (i.e. smartphone). ' +
    'Released by Google on June 25, 2014, it is to this day one of the lowest cost of entry VR platforms, as you can simply ' +
    'install the software to your mobile device and use it without necessarily purchasing a HMD (head-mounted display). It is ' +
    'available for both Android and iOS, and you can even build your own "cardboard" headset from scratch to use with ' +
    'VR applications.';
  browsers = [
    {
      imageLink: 'assets/browsers/yandex.png',
      name: 'Yandex Browser App',
      instructions: [
        {
          title: 'Install Yandex Browser to your device',
          description: 'Yandex is a freeware web browser built by the web search corporation "Yandex". It is compatible with WebVR ' +
          ' on mobile devices. First, we have to install the browser for usage with your mobile device. ' +
          'On your device, navigate to your app store (Google Play for Android, App Store for iOS). Then, search for Yandex ' +
            'browser (or click the links below), and go through the installation process.'
        },
        {
          title: 'Test it out!',
          description: 'Test out your device for WebVR! You can use any of the samples linked under the "Resources" tab to do so. ' +
            'In general, WebVR apps can be started in your headset by navigating to a website and clicking on the VR logo in the ' +
            'bottom corner. With Yandex browser and Google Cardboard, simply navigate to a webpage with WebVR content, and click ' +
            'the WebVR icon in the content, then slide your mobile device into the Google Cardboard to try it out.'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
