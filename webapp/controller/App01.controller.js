sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	return Controller.extend("sap.ui.demo.walkthrough01.controller.App01", {
		
		onOpenDialog : function(){
			this.getOwnerComponent().openHelloDialog();
		}
	});
});