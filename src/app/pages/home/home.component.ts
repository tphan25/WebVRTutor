import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  headerImgLink = 'assets/logos/webvr.png';
  x3dImgLink = 'assets/logos/x3dom_logo.png';

  headerDescription = 'WebVR is a JavaScript API that makes virtual reality experiences accessible within a web browser. ' +
    'It is compatible with several HMDs (head-mounted displays) including Oculus Rift, HTC Vive, and several mobile headsets. ' +
    'Websites can serve visual media directly to the HMD by using the WebVR API, and controllers can also be supported. ' +
    'The intent of this site is to help users to display WebVR content in their HMD, specifically X3D content rendered with WebVR.';
  x3dDescription = 'X3DOM is a JavaScript API that enables users to insert X3D content directly into their webpage using HTML. ' +
    'It only requires developers to inject a JavaScript file into their page to enable X3D nodes to display properly. ' +
    'X3D is an ISO-ratified standard file format for 3D scenes and objects, so several other 3D graphic file formats ' +
    'support conversions to the X3D file format. Thus, supporting X3D graphics in the browser with X3DOM is useful ' +
    'for many forms of graphical representation.';
  learnMore = 'You can learn more about WebVR and X3DOM at the following links below. X3DOM is open source software, and ' +
    'the WebVR repository branch on GitHub can help you learn more about how the implementation works. ';
  constructor() { }

  ngOnInit() {
  }

}
