sap.ui.jsview("helloworld.HelloWorld", {

      getControllerName : function() {
         return "helloworld.HelloWorld";
      },

      createContent : function(oController) {
    	  return new sap.ui.commons.Button({
    		  text: "Hello World",
    		  press: function(oEvent) {
    		  alert(this.getText());
    		  }
    		  });
      }

});
