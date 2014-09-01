App.models.Project = Backbone.Model.extend({

	defaults : {
		starred : false, // starred will come at top
		description : "Project Description",
		name : "Project Title"
	},


	// validate : function(attrs){
	// },


	initialize : function(args){
		this.tasks = new App.collections.Tasks();

		if(this.id)
			this.loadTasks();
		else
			this.once("sync change:sync", this.loadTasks, this);

		this.on("destroy", this.onDestroy, this);
	},


	loadTasks : function(){
		var projectId = this.id;
		this.tasks.localStorage = new Store('tasks-' + projectId);
		this.tasks.fetch();
	},


	onDestroy : function(){
		this.tasks.reset();
		// explicitly remove tasks collection of this project from localStorage
		localStorage.removeItem("tasks-" + this.id);
	}

});