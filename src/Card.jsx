import React from 'react';

var Card = React.createClass({
    render: function(){
        
        // image sizes: 60x60, 81x46, 170x80, 764x260
        const imgSrc = 'http://royal1.midasplayer.com/images/games/'+ this.props.short +'/'+ this.props.short +'_170x80.gif';
        
        /*
            2-way data binding in react is tricky. Here a card view should update the parent's parent model!
            State goes down: grandparent -> parent -> child
            so you should pass a handler down as props which can be called from the child then.
            This can be overcome with Redux dispatchers. 
        */
        return (
			<article 
			    className='card' 
			    onClick={this.props.onCardClick.bind(null, this.props.id)}>
                <h3>
                    <span 
                        className='card__isFavourite' 
                        onClick={this.props.onFavourited.bind(null, this.props.id)}>
                            {this.props.isFavourite ? '★' : '☆'}
                    </span>
                    <span 
                        className='card__name'>
                            {this.props.name}
                    </span>
                </h3>
                <img 
                    className='card__image' 
                    src={imgSrc}/>
            </article>        
		);
    }
});

module.exports = Card;