import { Component, OnInit, Input } from '@angular/core';
import { Browser } from 'src/app/models/browser.model';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  @Input() browserList: Browser[];
  constructor() { }

  ngOnInit() {
  }

}

