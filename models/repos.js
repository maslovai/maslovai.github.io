'use strict';

(function(module) {
  const repos = {};
  repos.all = [];
  repos.requestRepos = function(){
    $.get('/github/user/repos?type=owner')
    .then(repos => {
      //console.log(repos);
      var render = Handlebars.compile($('#repo-template').html());
      repos.all = repos;
      //console.log(repos.all);
      repos.forEach(ele => {
      $('#repos').append('<li>' + render(ele) + '</li>')})
    });
}
  repos.requestRepos();
  module.repos = repos;
})(window);



// const ui = function() {
// let $repos = $('#repos');
//   $repos.empty();
//   $repos.show().siblings().hide();
// };
// var render = Handlebars.compile($('#repo-template').html());
// myPortfolio.listRepos = function(){
//   ui();
//   console.log(repos.all);
//   $('#about ul').append(repos.all.map(render));
//  };
