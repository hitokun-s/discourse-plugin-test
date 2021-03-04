import { withPluginApi } from "discourse/lib/plugin-api";
// import { Button } from "discourse/views/post-menu";

function initializeWadaTest(api) {
  console.log("===initialize");
  console.log("user: " + api.getCurrentUser());
  // https://github.com/discourse/discourse/blob/master/app/assets/javascripts/discourse/lib/plugin-api.js.es6
}

export default {
  name: "wada-test",

  initialize() {
    withPluginApi("0.8.31", initializeWadaTest);

    // var PostMenuView = container.lookupFactory("view:post-menu");
    //
    // PostMenuView.reopen({
    //   buttonForHide: function (post, buffer) {
    //     var direction = !!post.getWithDefault("temporarily_hidden", false) ? "down" : "up";
    //     return new Button("hide", direction, "chevron-" + direction);
    //   },
    //
    //   clickHide: function () {
    //     $("#post_" + this.get("post.post_number") + " .cooked").toggle();
    //     this.toggleProperty("post.temporarily_hidden");
    //   }
    // });
  }
};
