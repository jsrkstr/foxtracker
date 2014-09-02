App.models.Task = Backbone.Model.extend({

	defaults : {
		totalTime : 0, // timer seconds
		starred : false, // starred will come at top
		description : "Task Description",
		title : "Task Title",
		state : "todo"// then - doing -> done
	},


	// validate : function(attrs){
	// },


	initialize : function(){

	},

	isStarred : function(){
		return this.get("starred");
	},

	startTimer : function(){
		this.timerId = window.setInterval($.proxy(function(){
			var totalTime = this.get("totalTime");
			this.save({totalTime : totalTime + 1 });
		}, this), 1000);
	},

	stopTimer : function(){
		window.clearInterval(this.timerId);
	}

});