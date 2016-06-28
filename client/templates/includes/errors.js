Template.errors.helpers({
	errors:function(){
		return Errors.find();
	}
});

Template.errors.onRendered(function(){
	var error = this.data;
	Meteor.setTimeout(function(){
		Errors.remove(error.id);
	},3000);
});