App.collections.Projects = Backbone.Collection.extend({


	//url : ${2:// url...},
	localStorage: new Store('projects'),
	
	model : App.models.Project,


	initialize : function(){
		// do something...
	},


	comparator : function(model){
		return model.get("modified_at");
	}


});