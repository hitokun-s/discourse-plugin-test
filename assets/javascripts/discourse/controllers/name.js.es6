import Controller from "@ember/controller";
import { ajax } from 'discourse/lib/ajax';

export default Controller.extend({
  actions: {
    editName: function() {
      console.log('clicked!');

      ajax('/wada-test/update_username',{
        type: "PUT",
        data: { name: this.get("name") }
      }).then(function(){
        console.log("done name");
        alert("succeed!");
      }).catch(function(e){
        console.log(e);
        alert("failed!");
      });
    }
  }
});
