# Memory Game

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Instructions

Start server:
       
    ./server  -->   node index.js
    api: localhost:3001/api/scoreBoard
    
Start client:
    
    ng serve
    app: localhost:4200/home
    

After Step 7 you have to checkout ngx-list-lib project(https://github.com/ricsard/day3-lib), build and link to this project.
After checkout you must change in lib the BrowserModule and BrowserAnimationModule to CommonModule.

in ngx-list-lib:
  -  npm install
  -  npm build 
  -  npm link

in our project:
  -  npm link ngx-list-lib

## App structure
Components:
  - card
  - game
  - scoreboard
  - menu / nav
  - home

Modulok:
  - AppModule (menu / nav, home)
  - GameModule (card, game, scoreboard)
  
Routing:
  - AppModule:
  	- /home - HomeComponent
    - /game - GameModule
  - GameModule:
  	- / - GameComponent
    - /scoreboard - ScoreBoard

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
