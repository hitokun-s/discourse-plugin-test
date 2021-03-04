import DiscourseRoute from 'discourse/routes/discourse'
import { ajax } from 'discourse/lib/ajax';
import { withPluginApi } from "discourse/lib/plugin-api";

// export default DiscourseRoute.extend({
export default Ember.Route.extend({
  controllerName: "cat",

  init() {
    this._super(...arguments);
    console.log("init");
    withPluginApi("0.8.31", function(api){
      console.log(api.getCurrentUser());
    });
  },

  model: function(params, transition) {
    // return this.store.find('entry', params['id']);
    console.log(params);
    console.log("cat1");

    return ajax('/wada-test/hoge.json?catId=' + params['id']);
  },

  // renderTemplate() {
  //   this.render("cat");
  // },

  setupController: function(controller, params) {
    console.log("setupController");
    console.log(params);
    params.topics.forEach(function(t){
      t.topComment = t.comments[0];
    });
    controller.setProperties(params);
  }
});
