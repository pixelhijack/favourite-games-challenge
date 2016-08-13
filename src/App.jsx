import _ from 'underscore';
import React from 'react';
import CardList from './CardList.jsx';
import DetailedCard from './DetailedCard.jsx';
import Search from './Search.jsx';
import Header from './Header.jsx';

const PAGINATION = 30;

var App = React.createClass({
    getInitialState: function(){
        return {
            model: [],
            favouritesOnly: false,
            searchExpression: '', 
            detailedGame: undefined,
            page: PAGINATION
        };
    },
    componentDidMount: function(){
        window.addEventListener('scroll', this.onScroll);
        this.loadContent();
    },
    loadContent: function(){
        var xhr = new XMLHttpRequest();
      	xhr.onload = function(e){
      	    this.setState({ 
              model: JSON.parse(xhr.responseText).games.map(function(game, idx){ 
                return _.extend(game, { 
                  id: idx, 
                  isFavourite: false 
                }); 
              })
            });
      	}.bind(this);
      	xhr.open('get', this.props.url, true);
      	xhr.send();
    },
    getModel: function(){
        console.log('app state changed: ', this.state);
        
        var pattern = new RegExp(this.state.searchExpression, 'gi');
        
        var immutableModel = this.state.model.slice();
        var favouritesOrAll = this.state.favouritesOnly ? 
            _.where(immutableModel, { isFavourite: true }) : 
            immutableModel; 
            
        var searchFiltered =  this.state.searchExpression.length ? 
            _.filter(favouritesOrAll, function(item){
                return pattern.test(item.name);
            }) : 
            favouritesOrAll;
        
        return searchFiltered.slice(0, this.state.page);
    },
    getModelItem: function(id){
        return _.findWhere(this.state.model, {id: id});
    },
    loadMore: function(){
        this.setState({
            page: this.state.page + PAGINATION
        });
    },
    onSearch: function(e){
        this.setState({
            searchExpression: e.target.value
        });
    },
    onScroll: function(){
        // lazy loading: load some first then load more only if hit bottom on scrolling
        var yOffset = window.pageYOffset,
            y = yOffset + window.innerHeight;
        if(y >= this.refs.app.clientHeight){
            console.log('hit bottom', yOffset);
            this.loadMore();
        }
    },
    onFavourited: function(id, e){
        // stop favouriting event bubbling up to a general card click event
        e.stopPropagation();
        // never ever modify state directly, i.e. this.state.model[32].isFavourite = true;
        // immutable.js would be handy here. creating new model from prev: 
        this.setState({
            model: this.state.model.map(function(game){
                return game.id === id ? _.extend(game, { isFavourite: !game.isFavourite }) : game;
            })
        });
    },
    onFavouritesShow: function(onlyFavs){
        this.setState({
            favouritesOnly: onlyFavs
        });
    },
    onCardClick: function(id){
        this.setState({
            detailedGame: this.getModelItem(id)
        });
    },
    onDetailedClose: function(){
        this.setState({
            detailedGame: undefined
        });
    },
	render: function() {
		return (
			<section className='app' ref='app'>
			    <Header 
			        favouritesOnly={this.state.favouritesOnly} 
			        onFavouritesShow={this.onFavouritesShow}/>
			    <Search 
			        onKeyUp={this.onSearch} 
			        placeholder={this.state.favouritesOnly ? 'Search your favourites' : 'Search Games'}/>
			    <DetailedCard 
			        item={this.state.detailedGame} 
			        onFavourited={this.onFavourited} 
			        onClose={this.onDetailedClose} />
                <CardList 
                    items={this.getModel()} 
                    onFavourited={this.onFavourited} 
                    onCardClick={this.onCardClick}/>
            </section>        
		);
	}
});

module.exports = App;