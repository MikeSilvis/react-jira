/** @jsx React.DOM */

var React = require('react');
var Loader = require('./Loader.react.js');
var NotificationBar = require('./NotificationBar.react.js');
var Issues = require('./Issues.react.js');

// Export the TweetsApp component
module.exports = JiraApp = React.createClass({

  getInitialState: function(props){

    props = props || this.props;

    // Set initial application state using props
    return {
      issues: props.issues,
      count: 0,
      page: 0,
      paging: false,
      skip: 0,
      done: false,
      loading: false
    };
  },

  componentWillReceiveProps: function(newProps, oldProps){
    console.log(newProps);

    this.setState(this.getInitialState(newProps));
  },

  render: function(){
    return (
      <div className="tweets-app">
        <Issues issues={this.state.issues} />
        <Loader loading={this.state.loading}/>
      </div>
    )
  }

});
