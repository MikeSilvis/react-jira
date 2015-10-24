var JSX = require('node-jsx').install(),
React = require('react'),
JiraApp = require('./components/JiraApp.react'),
JiraApi = require('jira').JiraApi,
Tweet = require('./models/Tweet');

module.exports = {

  index: function(req, res) {
    // Call static model method to get tweets in the db

    config = {
      host: 'gametime.atlassian.net',
      port: '443',
      user: 'mike',
      password: 'ybmpuUJ]n7qUaKKKPkEomvTrBuFmwuMdB8KhDnvCGdtJfpbhDp'
    };

    var jira = new JiraApi('https', config.host, config.port, config.user, config.password, '2');
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

  page: function(req, res) {
    // Fetch tweets by page via param
    //Tweet.getTweets(req.params.page, req.params.skip, function(tweets) {

    // Render as JSON
    res.send([]);

    //});
  }

}
