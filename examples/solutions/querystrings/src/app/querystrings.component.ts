import { Component, OnInit } from '@angular/core';
import { people } from './listOfPeople';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'demo-querystrings',
  templateUrl: './querystrings.component.html',
})
export class QuerystringsComponent implements OnInit {
  people;
  showPhoto;
  showGender;
  constructor(private _ar:ActivatedRoute) { }

  ngOnInit() {
    this.people = people;
    console.log(this.people);
    this._ar.queryParams.subscribe(
      params => {
        this.showPhoto = (params['showPhoto'] === 'true');
        this.showGender = (params['showGender'] === 'true');
        console.log(this.showPhoto, this.showGender);
      });
  }

}
