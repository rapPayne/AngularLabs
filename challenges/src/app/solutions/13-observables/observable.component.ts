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
      .subscribe((number) => {
        this.numbers.unshift(number);
      })
      // adds a teardown function to be called when unsubscribing
      .add(() => clearInterval(this.timerId));
  }

  //Unsubscribe doesn't stop the observable from running, it just makes us stop listening to it.
  pauseTheObservable() {
    console.log("Pausing")
    this.subscription.unsubscribe();
  }

  restartTheObservable() {
    this.observable$.subscribe((number) => {
      this.numbers.unshift(number);
    });
    console.log('restarting');
  }

  stopTheObservable() {
    this.running = false;
  }
}