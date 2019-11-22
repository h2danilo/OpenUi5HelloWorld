sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/demo/walkthrough01/controller/HelloDialog"
], function(UIComponent, JSONModel, ResourceModel, HelloDialog) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.walkthrough01.Component", {
		metadata : {
			manifest: "json"	
		},
		
		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			//set data model
			var oData = {
				recipient : {
					name : "Mundo"
				}
			};
				
			var oModel = new JSONModel(oData);
			
			this.setModel(oModel);
			
			//set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName: "sap.ui.demo.walkthrough01.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");
			
			//set dialog
			this._helloDialog = new HelloDialog(this.getRootControl());
		//	this._helloDialog.setModel(i18nModel, "i18n");
			//create the views based on the url/hash
			this.getRouter().initialize();
		},
		
		exit: function() {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},
		
		openHelloDialog: function() {
			this._helloDialog.open();
		}
	});
});