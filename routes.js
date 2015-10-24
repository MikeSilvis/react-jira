var JSX = require('node-jsx').install(),
React = require('react'),
JiraApp = require('./components/JiraApp.react'),
JiraApi = require('jira').JiraApi

var config = {
  host: 'gametime.atlassian.net',
  port: '443',
  user: 'mike',
  password: 'ybmpuUJ]n7qUaKKKPkEomvTrBuFmwuMdB8KhDnvCGdtJfpbhDp'
};

var jira = new JiraApi('https', config.host, config.port, config.user, config.password, '2');

module.exports = {

  index: function(req, res) {
    jira.getUsersIssues('mike', true, function(error, response) {
      var markup = React.renderComponentToString(
        JiraApp({
          issues: response.issues
        })
      );

      //Render our 'home' template
      res.render('home', {
        markup: markup,
        state: JSON.stringify(response.issues)
      });
    });
  },

  users: function(req, res) {
    jira.getUsersIssues(req.params.user, true, function(error, response) {
      var markup = React.renderComponentToString(
        JiraApp({
          issues: response.issues
        })
      );

      //Render our 'home' template
      res.render('home', {
        markup: markup,
        state: JSON.stringify(response.issues)
      });
    });
  },

}
