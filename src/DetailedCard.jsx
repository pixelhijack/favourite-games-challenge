import _ from 'underscore';
import React from 'react';

var DetailedCard = React.createClass({
    getDefaultProps: function(){
        return {
            item: {
                short: '',
                name: '',
                id: 0,
                isFavourite: false
            }
        };
    },
    getInitialState: function(){
        return {
            isPlaying: false
        };
    },
    onPlay: function(){
        this.setState({
            isPlaying: true
        });
    },
    onQuit: function(){
        this.setState({
            isPlaying: false
        });
        this.props.onClose();
    },
    render: function(){
        // image sizes: 60x60, 81x46, 170x80, 764x260
        const imgSrc = 'http://royal1.midasplayer.com/images/games/'+ this.props.item.short +'/tournamentPage/'+ this.props.item.short +'_764x260.jpg';
    
        return (
			<div className={ (this.props.item && this.props.item.short.length) ? 'card__detailed-wrapper' : 'card__detailed-wrapper hidden'}>
    			<article className='card__detailed'>
                    <h3>
                        <span className='card__isFavourite' onClick={this.props.onFavourited.bind(null, this.props.item.id)}>
                            {this.props.item.isFavourite ? '★' : '☆'}
                        </span>
                        <span className='card__name'>{this.props.item.name}</span>
                    </h3>
                    <span className='card__close' onClick={this.onQuit}> ✖ </span>
                    <button className='card__CTA' onClick={this.onPlay}>PLAY!</button>
                    <span className={this.state.isPlaying ? 'card__progressbar playing' : 'card__progressbar'}></span>
                    <img className='card__image' src={ !!this.props.item.short.length ? imgSrc : '' }/>
                </article>
            </div>
		);
    }
});

module.exports = DetailedCard;