App.views.TasksView = Backbone.View.extend({

	tagName : "div",

	className : "tasks-area",

	events : {
		"click .new-task" : "createTask",
		"dragover .list" : "onDragover",
		"drop .list" : "onDrop"
	},


	initialize : function(args){
		this.project = args.project;
		this.template = _.template($("#tasks-templ").html());
	},


	render : function(){
		this.$el.html(this.template(this.project.toJSON()));

		this.addAll();
		return this;
	},


	addAll : function(){
		this.collection.each(function(model){
			this.addOne(model);
		}, this);
	},


	addOne : function(model, viewType){
		var view = new App.views.TaskView({model : model});
		var listType = model.get("state");

		if(viewType == "edit"){
			this.$("." + listType + "-list .tasks-list").append(view.edit().el);
		} else {
			this.$("." + listType + "-list .tasks-list").append(view.render().el);
		}
	},

	createTask : function(e){
		if(e) e.preventDefault();

		var model = new App.models.Task({state : $(e.target).data("state")});
		this.collection.add(model);

		this.addOne(model, "edit");
		
	},

	onDrop : function(e){
		e.preventDefault();
		var list = $(e.target).closest(".list");
		list.find(".tasks-list").append(App.dragElm);
		var taskId = $(App.dragElm).find(".task-title").data("task-id");
		var state = list.find(".new-task").data("state");
		var model = this.collection.get(taskId);
		model.save({state : state});
	},

	onDragover : function(e){
		e.preventDefault();
	}

});