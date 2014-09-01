App.models.Task = Backbone.extend({

	defaults : {
		// id : 
		executionTime : 0, // timer
		starred : false, // starred will come at top
		// description : "",
		// created_at : 
		// updated_at : 
		// project_id // will be sent by projects collection
		state : "todo"// then - doing -> done
	},


	// validate : function(attrs){
	// },


	// initialize : function(${4:args}){
		
	// }

});