App.views.TaskView = Backbone.View.extend({

	tagName : "div",

	className : "task-item",

	attributes : {
		draggable :"true"
	},

	events : {
		"click .task-edit" : "edit",
		"click .task-edit-done" : "update",
		"click .task-delete" : "del",
		"click .toggle-timer" : "toggleTimer",
		"mouseover" : "addHover",
		"mouseout" : "removeHover",
		"dragstart" : "onDragstart"
	},


	initialize : function(){
		this.template = _.template($("#task-templ").html());
		this.editTemplate = _.template($("#task-edit-templ").html());

		this.model.on("sync", this.render, this);
	},


	render : function(){

		this.$el.html(this.template(this.model.toJSON()));

		if(this.isTimerRunning)
			this.$('.toggle-timer').removeClass("icon-play").addClass("icon-stop");

		return this;
	},


	edit : function(e){
		if(e) e.preventDefault();

		this.stopTimer();

		this.$el.html(this.editTemplate(this.model.toJSON()));
		return this;
	},


	update : function(){
		this.model.save({
			title : this.$(".task-title-edit").val(),
			description : this.$(".task-desc-edit").val()
		});
	},


	del : function(){
		this.$el.remove();
		this.model.destroy();
	},

	toggleTimer : function(e){

		if(this.isTimerRunning)
			this.model.stopTimer();
		else
			this.model.startTimer();

		this.isTimerRunning = !this.isTimerRunning;

		this.$('.toggle-timer').toggleClass("icon-play icon-stop");
	},

	stopTimer : function(){
		this.model.stopTimer();
	},

	addHover : function(){
		this.$el.addClass("hover");
	},

	removeHover : function(){
		this.$el.removeClass("hover");
	},

	onDragstart : function(e){
		 App.dragElm = e.target;
	}

});