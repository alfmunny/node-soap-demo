var soap = require('soap');
var url = 'http://localhost:9000/?wsdl';
var args = {};
/*var soapHeader = '<tns:chargeoxIdentity soap:mustUnderstand="true">' +
                    'boxid' +
                  '</tns:chargeBoxIdentity>' +
                  '<wsa5:To soap:mustUnderstand="true">' +
                    'http://localhost:9000' +
                  '</wsa5:To>' +
                  '<wsa5:Action soap:mustUnderstand="true">' +
                    '/Authorize' +
                  '</wsa5:Action>';*/
soap.createClient(url, {endpoint:'http://localhost:9000/'}, function(err, client) {
  if (err) throw err;
  //console.log(client.describe().CentralSystemService.CentralSystemServiceSoap12.Heartbeat);
//  client.addSoapHeader(soapHeader);

  client.BootNotification(args, function(err, result) { 
    if (err) throw err;
    console.log(result);
  });

  client.Authorize(args, function(err, result) { 
    if (err) throw err;
    console.log(result);
  });

  client.Heartbeat(args, function(err, result) { 
    if (err) throw err;
    console.log(result);
  });
});
