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