import { ajax } from 'discourse/lib/ajax';

// export default Ember.Route.extend({
//   model() {
//     return ajax('/wada-test/hoge.json');
//   }
// });
// export default Discourse.Route.extend({
export default Ember.Route.extend({

  model() {
    console.log("testes");
    var res = ajax('/wada-test/hoge.json').then(function(json){
      json.message = "sjodf";
      return json;
    });
    console.log(res);
    return res;
  },
  // renderTemplate(controller, model) {
  //   console.log("testes2");
  //   // Renders the template `../templates/notebook.hbs`
  //   this.render('wada-test', {model: model});
  // },

  setupController: function(controller, params) {
    console.log("setupController");
    console.log(params);
    controller.setProperties(params);
  }
});
