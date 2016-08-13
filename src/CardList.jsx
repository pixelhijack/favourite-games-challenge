import React from 'react';
import Card from './Card.jsx';

var CardList = React.createClass({
    render: function(){
        var cardlist = this.props.items.map(function(item){
            return (
                <Card key={item.id}
                      id={item.id}
                      name={item.name}
                      short={item.short}
                      isFavourite={item.isFavourite}
                      onFavourited={this.props.onFavourited}
                      onCardClick={this.props.onCardClick}
                      image={item.url} />
            );
        }.bind(this));
        
        return (
            <section className='cardList'>
                {cardlist}
            </section>
        );
    }
});

module.exports = CardList;