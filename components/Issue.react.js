/** @jsx React.DOM */

var React = require('react');

module.exports = Issue = React.createClass({
  render: function(){
    var issue = this.props.issue;
    return (
      <li>
        {issue.fields.summary}
      </li>
    )
  }
});
