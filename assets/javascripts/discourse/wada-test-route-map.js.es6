export default function() {
  // this.route("wada-test", function() {
  //   this.route("actions", function() {
  //     this.route("show", { path: "/:id" });
  //   });
  // });
  // this.route('wada-test', { path: '/wada-test' });
  this.route('wada-test', function(){});
  this.route('cat',   { path: '/wada-test/cat/:cname' });
  this.route('qa',   { path: '/wada-test/cat/:cname/:qid' });
  this.route('name',   { path: '/wada-test/name' });
};
