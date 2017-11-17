import { Component, OnInit } from '@angular/core';
import { people } from '../../../assets/people';
import { Http } from '@angular/http';
import { PeopleService } from '../services/people.service';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'demo-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
  providers: [ PeopleService ],
})
export class PeopleListComponent implements OnInit {
  people = [];
  fetching:boolean;
  constructor(private _http:Http, 
    private _peopleService:PeopleService) { }

  ngOnInit() {
    this.people = this._peopleService.people;
    this.getMorePeople();
    console.log(people);
    window.addEventListener('scroll', (e) => {
      this.scrolled(e);
    });
  }

  getMorePeople() {
    this.fetching = true;
    this._http.get("https://randomuser.me/api/?results=5")
    .toPromise().then(
      (res) => {
        const ppl = res.json().results;
        console.log("Got people",ppl);
        this.fetching = false;
        this.people.push(...ppl)
      }
    );
  }
  deleteUserFromList(user) {
    console.log("deleting user", user);
    this.people = this.people.filter(p => p !== user);
  }

  scrolled(e) {
    if (this.fetching) 
      return; 
    var w = e.path[1];
    let d = e.path[0];
    let pos = (w.innerHeight + w.scrollY) / d.body.offsetHeight;
    if (pos >= 0.85) {
      this.getMorePeople();
    }
  }
}
