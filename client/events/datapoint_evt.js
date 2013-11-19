  Template.datapoint.events = {
    'click': function () {
      Session.set("selected_datapoint", this._id);
    }
  };


