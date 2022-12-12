import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PaceService } from './pace.service';

@Component({
  selector: 'app-pace-calculator',
  templateUrl: './pace-calculator.component.html',
  styleUrls: ['./pace-calculator.component.css']
})
export class PaceCalculatorComponent implements OnInit {
  pace?: number;
  distance?: number;
  duration: FormControl = new FormControl("00:00:00", [
    Validators.required,
    Validators.pattern(/^(\d{1,2}:)?\d{1,2}:\d{1,2}$/),
  ]);

  constructor(private _paceSvc: PaceService) { }

  ngOnInit(): void {
  }
  deleteMe() {
    console.log('called deleteMe from input box')
  }
  calculatePace() {
    console.log('calculating pace', this.distance, this.duration.value)
    this.distance = this.distance || 26.2;
    const minutes = this._paceSvc.getMinutesFromTimeString(this.duration.value)
    this.pace = this._paceSvc.calcPace(this.distance, minutes)
  }
}
