sap.ui.define([
	"sap/ui/core/util/MockServer"
],function(MockServer){
	"use strict";
	
	return {
		init: function() {
			//create
			var oMockerServer = new MockServer({
				rootUri: "https://services.odata.org/V2/Northwind/Northwind.svc/"	
			});
			var oUriParameters = jQuery.sap.getUriParameters();
			//configure
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: oUriParameters.get("serverDelay") || 1000
			});
			//Simulate
			var sPath = jQuery.sap.getModulePath("sap.ui.demo.walkthrough01.localService");
			oMockerServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");
			//start
			oMockerServer.start();
			
		}	
	};
});