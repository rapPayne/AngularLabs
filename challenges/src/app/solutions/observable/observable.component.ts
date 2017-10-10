import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'demo-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  numbers = [];
  nextNumber = 0;
  observable;
  subscription;

  constructor() { }

  ngOnInit() {
    this.observable = Observable.create(
      obs => {
        console.log("Observable is created");
        setInterval(() => {
          this.nextNumber++;
          obs.next(this.nextNumber);
        }, 2000);
      }
    );
  }

  runTheObservable() {
    this.subscription = this.observable
    .subscribe((number) => {
      console.log(`Getting a random ${number}`);
      this.numbers.unshift(number);
    });
  }

  //Unsubscribe doesn't stop the observable from running, it just makes us stop listening to it.
  pauseTheObservable() {
    this.subscription.unsubscribe();
  }
}