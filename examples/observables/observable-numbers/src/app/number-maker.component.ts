import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, fromEvent, Subscription } from 'rxjs';
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-number-maker',
  templateUrl: './number-maker.component.html',
})
export class NumberMakerComponent {
  // Array that is *ngFor'ed over in the component and displayed.
  numbers: number[] = [];
  // Array of messages. Displayed on the page
  messages: string[] = [];
  // The observable to add numbers to the list
  numbers$?: Observable<number>;
  // Subscription the the numbers observable
  numberSubscription?: Subscription;
  // Get a reference to the "Add random" button so we can slap a fromEvent$ on it.
  @ViewChild('addRandom', { static: true }) addNumberButton?: ElementRef;

  ngOnInit() {
    this.numbers.push(100)
    //setTimeout(() => this.numbers.push(200), 2000)

    this.wireUpTheAddRandomButton()
    this.numbers$ = this.createIntervalObs()
    this.fetchRandomNumber()
  }

  wireUpTheAddRandomButton() {
    const obsClick2$ = fromEvent(this.addNumberButton?.nativeElement, "click")
    obsClick2$.subscribe({
      next: () => this.numbers.push(Math.random())
    })
  }

  fetchRandomNumber() {
    fetch(`http://www.randomnumberapi.com/api/v1.0/random`)
      .then(res => res.json())
      .then(num => this.numbers.push(num))
  }
  num: number = 0;
  createIntervalObs(): Observable<number> {
    return new Observable((subscriber) => {
      const intId = setInterval(() => {
        console.log(this.num);
        subscriber.next(this.num++)
      }, 3000)
      return () => clearInterval(intId)
    })
  }
  startInterval() {
    console.log(`starting`)
    this.numberSubscription = this.numbers$?.subscribe({
      next: num => this.numbers.push(num),
      error: (err: string) => this.messages.push(err),
      complete: () => this.messages.push(`Completed`)
    })
  }
  pauseInterval() {
    this.numberSubscription?.unsubscribe()
  }
}
