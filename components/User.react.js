/** @jsx React.DOM */

var React = require('react');

module.exports = User = React.createClass({
  render: function(){
    var user = this.props.user;

    return (
      <li>
        <a href={'/users/' + user.username}>
          <img src={user.avatar} />
        </a>
      </li>
    )
  }
});
