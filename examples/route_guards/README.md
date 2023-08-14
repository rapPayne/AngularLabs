## Features
- Route Guards (functional, not class-based)
- Signals
- Authentication faked through an Auth Service
- Standalone components

## Route Guards

We have a nav menu with a few protected choices.
- /home, /about, /contact are all wide open to anyone
- /my-secrets is available if you're logged in
- /all-secrets is available only to admin users ({role="admin"})

Route guards don't make the menu choices appear/disappear. They only decide if you can get to those components. Clicking on the `[routerLink]` will do nothing if the route guard returns a false.

As of NG15 route guards are written as functions that are of type `CanActivateFn` or similar and not classes that implement the `CanActivate` interface. This project features the new way.

## Angular version
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0-rc.4.

