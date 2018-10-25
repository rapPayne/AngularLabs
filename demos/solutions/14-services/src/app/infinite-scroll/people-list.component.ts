import { Component, OnInit, HostListener } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'demo-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
  providers: [ PeopleService ]
})
export class PeopleListComponent implements OnInit {
  people:Array<any>=[];
  showCoolStuff:boolean=false;
  fetching:boolean;

  constructor(private _pplService:PeopleService) { }

  ngOnInit() {
    this.getPeople();
  }

  //Host listener allows us to have event handlers in a component but listen to an event on an object which is "hosting" this component.
  //Using "window" here but we could also use "document"
  @HostListener('window:scroll', ['$event'])
  scrolled(e) {
    if (this.fetching)
      return;
    let w = e.path[1];
    let d = e.path[0];
    let pos = (w.innerHeight + w.scrollY) / d.body.offsetHeight;
    if (pos >= 0.90) {
      this.getPeople(5);
    }
  }

  deletePerson(person) {
    console.log(person);
    this.people = this.people.filter(p => p !== person);
  }

  getPeople(numberOfPeople:number = 20) {
    this.fetching = true;
    this._pplService.getPeople(numberOfPeople)
    .subscribe(
      res => {
        const ppl = res.json().results;
        this.people.push(...ppl);
        this.fetching = false;
      },
      err => console.error('Oh noes!', err)
    );
  }
}
