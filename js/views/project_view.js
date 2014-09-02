App.views.ProjectView = Backbone.View.extend({

	tagName : "li",

	className : "project-item",


	events : {
		"click .project-edit" : "edit",
		"click .project-delete" : "del",
		"click .project-edit-done" : "update"
	},


	initialize : function(){
		this.template = _.template($("#project-templ").html());
		this.editTemplate = _.template($("#project-edit-templ").html());
		this.model.on("sync", this.render, this);
	},


	render : function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	edit : function(e){
		if(e) e.preventDefault();

		this.$el.html(this.editTemplate(this.model.toJSON()));
		return this;
	},


	update : function(){
		this.model.save({
			name : this.$(".project-name-edit").val(),
			description : this.$(".project-desc-edit").val()
		});
	},


	del : function(e){
		e.preventDefault();
		this.$el.remove();
		this.model.destroy();
	}

});