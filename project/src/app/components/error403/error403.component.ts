import { Component, OnInit } from '@angular/core';
import {showAnimate} from "../../animations/fading-away.animate";

@Component({
  selector: 'app-error403',
  templateUrl: './error403.component.html',
  styleUrls: ['../shared/error.component.css'],
  animations: [showAnimate]
})
export class Error403Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
