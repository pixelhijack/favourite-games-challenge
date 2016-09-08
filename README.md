Your Favourite Game Challenge
===================

Usage
-------------
```
npm install
npm run build
npm run dev
```
check localhost:8080

The challenge
--------------

As a user I want to have the ability to create a personal portfolio with my favorite games. To add games to the favourites, I need to be able to search and browse through all the games and have a way of adding and removing them from my personal game portfolio.I also want to be able to browse and search through my portfolio once I have added games to it. I would also like to have a view for each game with the possibility to add/remove them from my portfolio and the possibility to play (the actual playing is not required, just show that there is a way to navigate there, it doesn't have to do anything).

Architectural considerations
-------------
- Solution uses React, React-dom, Babel, Webpack for build and Http-server for serving static assets
- Solution would be even more complete with involving 
	* Redux or MobX for a better state handling
	* Immutable.js for true immutability
	* SASS or LESS for a better organized, modular CSS
- All state is based on one central (quasi-immutable) model 
- App is stateful component, every other should be stateless and dumb
- Lazy load style optimisation: content pagination renders more view items on scroll from the model
- almost all methods are pure reducer, responsible for only state transitions
- One real tricky part is the favouriting call on individual game items: event handler passed down from App(parent) -> CardList(parent) -> Card(child), event bubbling up to the topmost parent (App) handling model changes. This could be more decoupled with Redux. 
- React router could have been involved to create nicer shareable routes (#all, #favourites, #detailed, #play), omitted for the sake of simplicity
