export default function() {
  // this.route("wada-test", function() {
  //   this.route("actions", function() {
  //     this.route("show", { path: "/:id" });
  //   });
  // });
  // this.route('wada-test', { path: '/wada-test' });
  this.route('wada-test', function(){
    // this.route('/');
    // this.route('cat',   { path: '/cat/:id' });
    // this.route('cat',   { path: '/:id' });
  });
  this.route('cat',   { path: '/wada-test/cat/:id' });
  this.route('name',   { path: '/wada-test/name' });
};
