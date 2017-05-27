'use strict';

(function(module) {
  const repos = {};
  repos.all = [];
  repos.requestRepos = function() {
    //console.log("HEEEEYYYY!");
    $.ajax({
     url : 'https://api.github.com/user/repos?type=owner',
     method: 'GET',
     headers: {
       Authorization: 'token e0011944bb3563aad669a28dc83e0815472a4b9d'
     }
    })
    .then(results => {
      console.log(results);
      var render = Handlebars.compile($('#repo-template').html());
      results.forEach(ele=> {
        $('#repos').append('<li>' + render(ele) + '</li>')
      })
      // callback(repos);
    },
    error => {
      console.log(error);
    });
  }
  module.repos = repos;
})(window);
