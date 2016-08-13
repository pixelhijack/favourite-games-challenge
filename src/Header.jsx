import React from 'react';

var Header = React.createClass({
    render: function(){
        return (
		    <nav className='app__viewSwitch'>
		        <span className={this.props.favouritesOnly ? 'app__viewSwitch-all' : 'app__viewSwitch-all active' }
		              onClick={this.props.onFavouritesShow.bind(null, false)}>
		            All Games
		        </span>
		        <span className={this.props.favouritesOnly ? 'app__viewSwitch-favs active' : 'app__viewSwitch-favs' } 
		              onClick={this.props.onFavouritesShow.bind(null, true)}>
		            Favourites 
		        </span>
		    </nav>
		);
    }
});

module.exports = Header;