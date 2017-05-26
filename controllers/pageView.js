(function(module) {
  var pageView = {};
  pageView.initIndex = function(){
    $("#my-contact").show();
    $("#my-portfolio").show();
    $("#my-resume").show();
    $('#repos').hide();
   var theItem = Handlebars.compile($("#gallery-item-template").html());
   $('#gallery').empty();
   itemContent.map(ele =>{
    $('#gallery').append(theItem(ele))
  });
}
  module.pageView = pageView;
})(window);
