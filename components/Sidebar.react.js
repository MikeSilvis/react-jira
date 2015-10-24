/** @jsx React.DOM */

var React = require('react');
var User = require('./User.react.js');

module.exports = Sidebar = React.createClass({

  getInitialState: function(props) {
    var userOne = {
      id: '1',
      name: 'mike',
      avatar: 'https://s.gravatar.com/avatar/1bb5f2e12dcbfb8c103689f4ae94f431?s=80',
      username: 'mike'
    };

    var userTwo = {
      id: '2',
      name: 'Adrian',
      avatar: 'https://avatars2.githubusercontent.com/u/2415840?v=3&s=460',
      username: 'adrian'
    };

    var userThree = {
      id: '3',
      name: 'Matt Banach',
      avatar: 'https://avatars0.githubusercontent.com/u/5855556?v=3&s=460',
      username: 'mbanach'
    };

    return {
      users: [userOne, userTwo, userThree],
    };
  },

  render: function(){
    var content = this.state.users.map(function(user){
      return (
        <User key={user.id} user={user} />
      )
    });

    // Return ul filled with our mapped tweets
    return (
      <div id='sidebar-wrapper'>
        <ul className="users">{content}</ul>
      </div>
    )
  }
});
