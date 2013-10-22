$(function(){

$('[data-template-name]').each(function() {
  var $this = $(this);
  Thorax.templates[$this.attr('data-template-name')] = Handlebars.compile($this.html());
});

});
