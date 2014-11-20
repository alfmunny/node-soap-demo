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
  console.log("Operation: BootNotification");
  console.log(client.describe().CentralSystemService.CentralSystemServiceSoap12.BootNotification);
  console.log("=====================");

  console.log("Operation: Heartbeat");
  console.log(client.describe().CentralSystemService.CentralSystemServiceSoap12.Heartbeat);
  console.log("=====================");

  console.log("Operation: Authorize");
  console.log(client.describe().CentralSystemService.CentralSystemServiceSoap12.Authorize);
  console.log("=====================");

  console.log("Operation: Start Transaction");
  console.log(client.describe().CentralSystemService.CentralSystemServiceSoap12.StartTransaction);
  console.log("=====================");

  console.log("Operation: Meter Values");
  console.log(client.describe().CentralSystemService.CentralSystemServiceSoap12.MeterValues);
  console.log("=====================");

  console.log("Operation: Stop Transaction");
  console.log(client.describe().CentralSystemService.CentralSystemServiceSoap12.StopTransaction);
  console.log("=====================");

  console.log("Operation: StatusNotification");
  console.log(client.describe().CentralSystemService.CentralSystemServiceSoap12.StatusNotification);
  console.log("=====================");

  console.log("Operation: FirmwareStatusNotification");
  console.log(client.describe().CentralSystemService.CentralSystemServiceSoap12.FirmwareStatusNotification);
  console.log("=====================");

  console.log("Operation: DiagnosticsStatusNotification");
  console.log(client.describe().CentralSystemService.CentralSystemServiceSoap12.DiagnosticsStatusNotification);
  console.log("=====================");

  console.log("Operation: DataTransfer");
  console.log(client.describe().CentralSystemService.CentralSystemServiceSoap12.DataTransfer);
  console.log("=====================");


//  client.addSoapHeader(soapHeader);

//  client.BootNotification(args, function(err, result) {
//    if (err) throw err;
//    console.log(result);
//  });
//
//  client.Authorize(args, function(err, result) {
//    if (err) throw err;
//    console.log(result);
//  });
//
//  client.Heartbeat(args, function(err, result) {
//    if (err) throw err;
//    console.log(result);
//  });
});
