sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";
	return Controller.extend("sap.ui.demo.walkthrough01.controller.HelloPanel", {
		
		onShowHello : function () {
			//read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			MessageToast.show(sMsg);
		},
		
		onOpenDialog: function () {
			 /*var oView = this.getView();
			 var oDialog = oView.byId("helloDialog");
			 //create dialog lazily
			 if (!oDialog) {
			 	// create dialog via fragment factory
			 	oDialog = sap.ui.xmlfragment(oView.getId(), "sap.ui.demo.walkthrough01.view.HelloDialog", this);
			 	oView.addDependent(oDialog);
			 }
			 
			 oDialog.open();*/
			 
			 this.getOwnerComponent().openHelloDialog();
			 
		}
		
		
		
		//,
		//onInit: function(){
			//var oInput = this.byId("Input1");
			//oInput.attachLiveChange((e) => {
				//debugger;
			//})
		//}
	});
});