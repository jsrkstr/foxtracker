App.collections.Tasks = Backbone.Collection.extend({


	//url : ${2:// url...},

	
	model : App.models.Task,


	initialize : function(){
		// do something...
	},


	// sort tasks in order of modified date with starred first
	comparator : function(model){
		var modified_timestamp = model.get("modified_at");
		if(model.isStarred())
			modified_timestamp += 1000000000000;
		return -modified_timestamp;
	}

});