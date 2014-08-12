var http = require('http');
var soap = require('soap');

var OCPP = require('./ocpp.js');

var ocppCentralSystemService = {
  CentralSystemService: {
    CentralSystemServiceSoap12: {
      BootNotification: function (args) {
        console.log("/BootNotification");
        return OCPP.wsdl['BootNotificationResponse'];
      },

      Heartbeat: function(args) {
        console.log("/Heartbeat");
        var dateTime = new Date();
        console.log(dateTime.toString());
        OCPP.wsdl['HeartbeatResponse']['currentTime'] = dateTime;
   			return OCPP.wsdl['HeartbeatResponse'];
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
        console.log("/MeterValues");
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
