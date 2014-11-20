var http = require('http');
var soap = require('soap');

var OCPP = require('./ocpp.js');

var ocppCentralSystemService = {
  CentralSystemService: {
    CentralSystemServiceSoap12: {
      BootNotification: function (args) {
        console.log("/BootNotification");
        var dateTime = new Date();
        OCPP.wsdl['BootNotificationResponse']['currentTime'] = dateTime.toString();
        return OCPP.wsdl['BootNotificationResponse'];
      },

      Heartbeat: function(args) {
        console.log("/Heartbeat");
        var dateTime = new Date();
        OCPP.wsdl['HeartbeatResponse']['currentTime'] = dateTime.toString();
        return OCPP.wsdl.HeartbeatResponse;
			},

      StartTransaction: function (args) {
        console.log("/StartTransaction");
   			return OCPP.wsdl['StartTransactionResponse'];
      },

      StopTransaction: function (args) {
        console.log("/StopTransaction");
   			return OCPP.wsdl['StopTransactionResponse'];
      },

      MeterValues: function (args) {
        console.log("/MeterValues: this operation contains no return data.");
   			return OCPP.wsdl['MeterValues'];
      },

      DataTransfer: function (args) {
        console.log("/DataTransfer");
        return OCPP.wsdl['DataTransfer'];
      },

			Authorize: function(args) {
		    console.log("/Authorize");
        var expiryData = new Date('05-05-2015');
			  return OCPP.wsdl['AuthorizeResponse'];
      },

      StatusNotification: function(args) {
        console.log("/StatusNotification: this operation contains no return data.");
        return OCPP.wsdl['StatusNotification'];
      },

      FirmwareStatusNotification: function(args) {
        console.log("/FirwareStatusNotification: this operation contains no return data.");
        return OCPP.wsdl['FirwareStatusNotification'];
      },

      DiagnosticsStatusNotification: function(args) {
        console.log("/DiagnosticsStatusNotification: this operation contains no return data.");
        return OCPP.wsdl['DiagnosticsStatusNotification'];
      },

      DataTransfer: function(args) {
        console.log("/DataTransfer: this operation contains no return data.");
        return OCPP.wsdl['DataTransfer'];
      }
    }
  }
};

var xml = require('fs').readFileSync('ocpp_centralsystemservice_1.5_final.wsdl', 'utf8'),
      server = http.createServer(function(request,response) {
          response.end("404: Not Found: "+request.url)
      });

server.listen(9000);
soap.listen(server, '/', ocppCentralSystemService, xml);
