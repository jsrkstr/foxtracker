var App = {

	models : {},
	collections : {},
	views : {},
	routers : {},

	//The main function for the js
	init : function() {
		
		

		App.router = new App.routers.Router();
		// start routing
		Backbone.history.start({silent : false});
	}
};


// Page Ready. JS Start Here...
$(function(){

	// Template Default setting change
	_.templateSettings = {
		interpolate: /\{\{\=(.+?)\}\}/g,
		evaluate: /\{\{(.+?)\}\}/g
	};

	App.init();
});