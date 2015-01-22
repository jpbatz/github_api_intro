$(document).ready(function() {

  $('button').on('click', function() {

    var input = $('input').val();

    if(input !== "") {
      listUserRepos(input);
    } else {
      listDevLeagueRepos();
      listGeemailCommits();
      listTheRemixCommits();
    }

  });

  var listUserRepos = function(username) {
    $('.result').append("<h2>"+username+"</h2>");
    $.get( "https://api.github.com/users/"+username+"/repos", function( data ) {
      $('.result').append("&nbsp;&nbsp;&nbsp;&nbsp;<h3>Repos</h3>");
      for(var i=0; i < data.length; i++) {
        $(".result").append("&nbsp;&nbsp;&nbsp;&nbsp;" + data[i].name + "<br/>");
      }
    });
  };

  var listDevLeagueRepos = function() {
    $.get( "https://api.github.com/orgs/devleague/repos", function( data ) {
      $('.result').append("<h3>devleague repos</h3>");
      for(var i=0; i < data.length; i++) {
        $(".result").append("&nbsp;&nbsp;&nbsp;&nbsp;" + data[i].name + "<br/>");
      }
    });
  };

  var listGeemailCommits = function() {
    $.get( "https://api.github.com/repos/devleague/gee-mail/commits", function( data ) {
      $('.result').append("&nbsp;&nbsp;&nbsp;&nbsp;<h3>gee-mail commits</h3>");
      for(var i=0; i < data.length; i++) {
        $(".result").append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + data[i].commit.message + "<br/>");
      }
    });
  };  

  var listTheRemixCommits = function() {
    $.get("https://api.github.com/repos/devleague/100-Specs/commits?author=theRemix", function( data ) {
      $('.result').append("&nbsp;&nbsp;&nbsp;&nbsp;<h3>theRemix commits</h3>");
      for(var i=0; i < data.length; i++) {
        $('.result').append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + data[i].commit.message + "<br/>");
      }
    });
  };

});