import DiscourseRoute from 'discourse/routes/discourse'
import { ajax } from 'discourse/lib/ajax';
import { withPluginApi } from "discourse/lib/plugin-api";

// export default DiscourseRoute.extend({
export default Ember.Route.extend({
  controllerName: "qa",

  init() {
    this._super(...arguments);
    console.log("init qa");
  },

  // params: pid, qid
  model: function(params, transition) {
    // return this.store.find('entry', params['id']);
    console.log(params);
    this.params = params;
    return ajax('/t/' + params['qid'] + ".json");
  },

  setupController: function(controller, model) {
    console.log("setupController");
    console.log(model);
    console.log(this.params.cname);

    console.log(moment(model.created_at).format("yyyy/MM/DD HH:mm:ss"))

    controller.setProperties({
      title: model.title,
      cname: this.params.cname,
      created_at: model.created_at,
      details: model.details,
      q: model.post_stream.posts[0],
      answers: model.post_stream.posts.slice(1)
    });
  }
});
