var React = require('react');

var buttonStyle = {
  margin: '10px 10px 10px 0',
  color: 'black'
};

var buttonClass = "btn btn-lg btn-info";

var iconClass = "";

var Button = React.createClass({

	getInitialState: function(){
		return {label: 'Like '};
	},

  render: function () {
    return (
      <button
        className={buttonClass}
        style={buttonStyle}
        onClick={this.handleClick}>{this.state.label}<span className={iconClass}></span></button>
    );
  },
  handleClick: function(){

		console.log('Hello');
		buttonClass = "btn btn-lg btn-success";
    iconClass = "glyphicon glyphicon-ok-circle animated flipInY"
		this.setState({label: 'Liked!! '});
},

  componentDidUpdate: function(){

  }

});

module.exports = Button;