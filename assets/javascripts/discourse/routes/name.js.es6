import DiscourseRoute from 'discourse/routes/discourse'
import { ajax } from 'discourse/lib/ajax';
import { withPluginApi } from "discourse/lib/plugin-api";

// export default DiscourseRoute.extend({
export default Ember.Route.extend({
  controllerName: "name",

  // init() {
  //   this._super(...arguments);
  //   console.log("init");
  //   withPluginApi("0.8.31", function(api){
  //     console.log(api.getCurrentUser());
  //   });
  // },

  model: function() {
    return new Promise(function(resolve, reject){
        withPluginApi("0.8.31", function(api){
          resolve(api.getCurrentUser());
        });
    });
  },

  // renderTemplate() {
  //   this.render("cat");
  // },

  setupController: function(controller, params) {
    controller.setProperties(params);
  }
});
