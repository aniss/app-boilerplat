/*

*/

var Application = window.Application = new Thorax.LayoutView({
    name: 'application'
});


/*


*/

Application.Templates = Thorax.templates;
Application.Views = Thorax.Views;
Application.Models = Thorax.Models;
Application.Collections = Thorax.Collections;

/*


*/

Application.View = Thorax.View;
Application.Model = Thorax.Model;
Application.Collection = Thorax.Collection;

/*


*/

Thorax.setRootObject(Application);

/*


*/

$(function(){
Backbone.history.start({
    pushState: false,
    root: '/',
    silent: true
});

Application.appendTo('body');

Backbone.history.loadUrl();

});


