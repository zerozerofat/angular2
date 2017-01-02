import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-samaple',
  templateUrl: './ng-switch-samaple.component.html',
  styleUrls: ['./ng-switch-samaple.component.css']
})
export class NgSwitchSamapleComponent implements OnInit {
  choice: number;

  constructor() {
    this.choice = 1;
  }

  nextChoice() {
    this.choice += 1;

    if (this.choice > 5) {
      this.choice = 1;
    }
  }
  ngOnInit() {
  }

}
