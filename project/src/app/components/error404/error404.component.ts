import { Component, OnInit } from '@angular/core';
import {showAnimate} from "../../animations/fading-away.animate";

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['../shared/error.component.css'],
  animations: [showAnimate]
})
export class Error404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
