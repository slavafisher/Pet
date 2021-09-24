import { animate, transition, trigger, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fade } from '../animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [fade],
})
export class MainComponent implements OnInit {
  constructor() {}
  activated = false;
  clicked = false;

  toggle() {
    this.activated = !this.activated;
  }
  skillsClick() {
    this.clicked = !this.clicked;
  }

  ngOnInit(): void {}
}
