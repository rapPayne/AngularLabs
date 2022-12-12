# ObservableNumbers

## Shows
- Simple observables
- Making observable from an interval timer
- fromEvent
- Brute force creation by instantiating an Observable class

## Unsubscribing
Run it without the `return () => clearInterval(intId)`. Then stop and restart several times. You'll see that the setInterval function continues to run!! Unsubscribing does not kill the things inside of the observable. You have to make sure you kill it. And you'll do that by returning a function from the observable. This is run when you unsubscribe. 
