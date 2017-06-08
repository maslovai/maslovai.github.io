(function(module){
  const myPortfolio = {};
  myPortfolio.show = function(){
    $("#my-portfolio").show().siblings().hide();
    $('#repos').show();
  }
  module.myPortfolio = myPortfolio;
})(window);
