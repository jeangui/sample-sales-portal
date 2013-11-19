Meteor.startup(function () {
	
console.log("# publish.js # starting ...");

      Meteor.publish("global_sales", function () {
      if (this.userId) {  // only visible to logged in users
       return Sales2013.find({}, {fields: {"region": 1, "total":1 }}); // restrict the owner field from client access
      }
     });
});


