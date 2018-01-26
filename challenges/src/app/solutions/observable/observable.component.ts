import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: 'demo-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  numbers = [];
  nextNumber = 0;
  observable$;
  subscription;
  running: boolean;
  timerId;

  constructor() { }

  ngOnInit() {
    this.observable$ = Observable.create(
      obs => {
        this.timerId = setInterval(() => {
          this.nextNumber++;
          obs.next(this.nextNumber);
        }, 1000);
        console.log("Observable is created",this.timerId);
      }
    );
  }

  startTheObservable() {
    this.running = true;
    this.subscription = this.observable$
      .takeWhile((number) => this.running)
      .subscribe((number) => {
        this.numbers.unshift(number);
      })
      .add(() => clearInterval(this.timerId));
  }

  //Unsubscribe doesn't stop the observable from running, it just makes us stop listening to it.
  pauseTheObservable() {
    this.subscription.unsubscribe();
  }

  restartTheObservable() {
    console.log('restarting');
  }

  stopTheObservable() {
    this.running = false;
  }
}