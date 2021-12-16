# Demonstrations (Demos)

We can run these demos together in class. Or you can do them on your own for just the ones you're interested in.

You'll see these folders:

| Folder   | Purpose 
| ---------|--------
| starters | Starter files for the demo. Sometimes there are no starters for a demo.
| solutions| Finalized files for that demo. Look here for the 'solution'
| current  | An empty folder for you to work in

## How to run a demo

If it has a starter, cd to the starter folder

```Shell
$ cd <pathToStarterFolder>
$ npm install
$ npm start
```

Then you can edit the code in that folder.

## If you want to keep the starter pristine

Copy everything from the `starter` to the `current` folder and edit the code there. Do something like this ...

```Shell
$ cd <pathToCurrentFolder> 
$ cp ../starter/<nameOfStarter> .
$ npm install
$ npm start
```

## If it has no starter

Then there's nothing to copy. You can 

```Shell
$ ng new <appName>
$ cd <appName>
$ npm start
```

## The solutions folder

It is just there to show you where you'd be heading while doing the demo/challenge. If you just want to see the solution work ...

```Shell
$ cd <pathToSolutionFolder> 
$ npm install
$ npm start
```
