$(document).ready(function() {

  $('button').on('click', function() {

    var input = $('input').val();

    if(input !== "") {
      listUserRepos(input);
    } else {
      listDefaultRepo();
    }

  });

  var listUserRepos = function(username) {
    // console.log(username);
    $('.result').append("<h2>"+username+"</h2>");
    $.get( "https://api.github.com/users/"+username+"/repos", function( data ) {
      $('.result').append("&nbsp;&nbsp;&nbsp;&nbsp;<h3>Repos</h3>");
      for(var i=0; i < data.length; i++) {
        console.log(data[i]);
        // $(".result").append(data[i].name + "<br/>");
        $(".result").append("&nbsp;&nbsp;&nbsp;&nbsp;" + data[i].name + "<br/>");
      }
    });
    $.get( "https://api.github.com/repos/devleague/gee-mail/commits", function( data ) {
      $('.result').append("&nbsp;&nbsp;&nbsp;&nbsp;<h3>gee-mail commits</h3>");
      for(var i=0; i < data.length; i++) {
        console.log(data[i]);
        // $(".result").append(data[i].name + "<br/>");
        $(".result").append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + data[i].commit.message + "<br/>");
      }
    });
  };

  var listDefaultRepo = function() {
    $('.result').append("<h2>devleague</h2>");
    $.get( "https://api.github.com/orgs/devleague/repos", function( data ) {
      for(var i=0; i < data.length; i++) {
        console.log(data[i].name);
        // $(".result").append(data[i].name + "<br/>");
        $(".result").append("&nbsp;&nbsp;&nbsp;&nbsp;" + data[i].name + "<br/>");
      }
    });
  };

});