import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  showAddPerson: boolean = false;
  people;
  constructor(private _peopleService: PeopleService) { }

  ngOnInit(): void {
    this._peopleService.getPeople(12)
      .subscribe(
        res => {
          this.people = res.results;
          console.log(this.people);
        }
      )
  }

  toggleAddPerson() {
    this.showAddPerson = !this.showAddPerson;
  }

  addPersonToList(personToAdd) {
    const imgUrl = "https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/Placeholder_person.png"
    this.people.push({ ...personToAdd, picture: { large: imgUrl } });
  }
}
