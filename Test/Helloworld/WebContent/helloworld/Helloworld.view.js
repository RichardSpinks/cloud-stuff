sap.ui.jsview("helloworld.Helloworld", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf helloworld.Helloworld
	*/ 
	getControllerName : function() {
		return "helloworld.Helloworld";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf helloworld.Helloworld
	*/ 
	createContent : function(oController) {

		return new sap.ui.commons.Button({
			text: "Hello World",
			press: function(oEvent) {
			alert(this.getText());
			}
			});
	}

});
