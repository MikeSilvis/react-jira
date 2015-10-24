/** @jsx React.DOM */

var React = require('react');
var Issue = require('./Issue.react.js');

module.exports = Issues = React.createClass({

  // Render our tweets
  render: function(){
    // Build list items of single tweet components using map
    var content = this.props.issues.map(function(issue){
      return (
        <Issue key={issue.id} issue={issue} />
      )
    });

    // Return ul filled with our mapped tweets
    return (
      <ul className="issues">{content}</ul>
    )

  }

});
