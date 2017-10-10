import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Component({
  selector: 'demo-ajax-people-list',
  templateUrl: './ajax-people-list.component.html',
  styleUrls: ['./ajax-people-list.component.css']
})
export class AjaxPeopleListComponent implements OnInit {
  people: Array<any> = [];
  fetching: boolean;

  constructor(private _http: Http) { }

  ngOnInit() {
    this.getPeople(10);
    window.addEventListener('scroll', (e) => {
      this.scrolled(e);
    });
  }

  scrolled(e) {
    console.log('scrolling')
    if (this.fetching)
      return;
    var w = e.path[1];
    let d = e.path[0];
    let pos = (w.innerHeight + w.scrollY) / d.body.offsetHeight;
    if (pos >= 0.85) {
      this.getPeople(5);
    }
  }

  getPeople(numberOfPeople) {
    this.fetching = true;
    console.log("getting")
    this._http.get(`https://randomuser.me/api/?results=${numberOfPeople}`)
      .toPromise().then(
      res => {
        const ppl = res.json().results;
        console.log("got", ppl)
                this.people.push(...ppl);
        this.fetching = false;
      },
      err => { console.error(err); }
      );

  }
  deletePerson(person) {
    this.people = this.people.filter(p => p.name.first !== person.name.first && p.name.last !== person.name.last);
  }

}
