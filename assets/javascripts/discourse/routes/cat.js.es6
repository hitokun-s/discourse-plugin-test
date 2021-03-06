import DiscourseRoute from 'discourse/routes/discourse'
import { ajax } from 'discourse/lib/ajax';
import { withPluginApi } from "discourse/lib/plugin-api";

// export default DiscourseRoute.extend({
export default Ember.Route.extend({
  controllerName: "cat",

  init() {
    this._super(...arguments);
    console.log("init");
    // withPluginApi("0.8.31", function(api){
    //   console.log(api.getCurrentUser());
    // });
  },

  model: function(params, transition) {
    // return this.store.find('entry', params['id']);
    console.log(params);
    return ajax('/wada-test/cat/show.json?name=' + params['cname']);
  },

  // renderTemplate() {
  //   this.render("cat");
  // },

  setupController: function(controller, model) {
    console.log("setupController");
    console.log(model);
    model.topics.forEach(function(t){
      t.q = t.posts[0];
      t.topAnswer = t.posts[1];
    });
    controller.setProperties(model);
  }
});
