var http = require('http');
var soap = require('soap');
var ocppCentralSystemService = {
  CentralSystemService: {
    CentralSystemServiceSoap12: {
      Heartbeat: function(args) {
        console.log("/Heartbeat");
        var dateTime = new Date();
        console.log(dateTime.toString());
   			return { currentTime: dateTime.toString() };
			},
			Authorize: function(args) {
		    console.log("/Authorize");
			  return { idTagInfo: {} };
			}
    }
  }
}

var xml = require('fs').readFileSync('ocpp_centralsystemservice_1.5_final.wsdl', 'utf8'),
      server = http.createServer(function(request,response) {
          response.end("404: Not Found: "+request.url)
      });
server.listen(9000);
soap.listen(server, '/', ocppCentralSystemService, xml);
