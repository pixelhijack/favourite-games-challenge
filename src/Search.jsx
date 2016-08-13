import React from 'react';

var Search = React.createClass({
    getInitialState: function(){
        return {
            placeholder: ''
        };
    },
	componentWillReceiveProps: function(nextProps){
	    if(nextProps.placeholder !== this.state.placeholder){
	        this.setState({ placeholder: nextProps.placeholder });
	    }
	},
	handleKeyUp: function(e){
        console.log('button clicked', e);
    },
    render: function() {
		return (
			<input className='search'
                type='text'
                onKeyUp={this.props.onKeyUp || this.handleKeyUp} 
                placeholder={this.state.placeholder}
                value={this.props.text}/>
		);
	}
});

module.exports = Search;