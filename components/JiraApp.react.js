/** @jsx React.DOM */

var React = require('react');
var Loader = require('./Loader.react.js');
var NotificationBar = require('./NotificationBar.react.js');
var Issues = require('./Issues.react.js');
var Sidebar = require('./Sidebar.react.js');
var User = require('../models/User.js');

// Export the TweetsApp component
module.exports = JiraApp = React.createClass({

  getInitialState: function(props){

    props = props || this.props;

    // Set initial application state using props
    return {
      issues: props.issues,
      loading: false,
    };
  },

  componentWillReceiveProps: function(newProps, oldProps){
    this.setState(this.getInitialState(newProps));
  },

  render: function(){
    return (
      <div className='wrapper'>
        <Sidebar />
        <Issues issues={this.state.issues} />
        <Loader loading={this.state.loading}/>
      </div>
    )
  }

});
