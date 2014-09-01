App.views.ProjectsView = Backbone.View.extend({

	tagName : "div",

	className : "projects-area",

	events : {
		"click .new-project" : "createProject"
	},


	initialize : function(){
		this.template = _.template($("#projects-templ").html());
	},


	render : function(){
		
		this.$el.html(this.template({}));

		this.addAll();
		return this;
	},


	addAll : function(){
		this.collection.each(function(model){
			this.addOne(model);
		}, this);
	},


	addOne : function(model, viewType){
		var view = new App.views.ProjectView({model : model});
		if(viewType == "edit"){
			this.$(".projects-list").append(view.edit().el);	
		} else {
			this.$(".projects-list").append(view.render().el);
		}
		
	},

	createProject : function(e){
		if(e) e.preventDefault();

		var model = new App.models.Project();
		this.collection.add(model);
		this.addOne(model, "edit");
	}

});