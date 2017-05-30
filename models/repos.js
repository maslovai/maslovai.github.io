'use strict';

(function(module) {
  const repos = {};
  repos.all = [];
  repos.requestRepos = function(callback){
    //console.log("HEEEEYYYY!");
    // $.ajax({
    //  url : 'https://api.github.com/user/repos?type=owner',
    //  method: 'GET',
    //  headers: {
    //    Authorization: `token ${process.env.TOKEN}`}
    // })
    $.get('/github/user/repos')
    .then(results => {
      repos.all = results;
      console.log(repos.all);
      // var render = Handlebars.compile($('#repo-template').html());
      // repos.all.forEach(ele=> {
      //   $('#repos').append('<li>' + render(ele) + '</li>')
      // })
      // callback(repos);
    },
    error => {
      console.log(error);
    }).then(callback);
  }
  module.repos = repos;
})(window);
