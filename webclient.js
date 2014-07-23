var soap = require('soap');
var url = 'http://localhost:8000/wscalc1?wsdl';
soap.createClient(url, function(err, client) {

    if (err) throw err;


    console.log(client.describe().ws.calc);

    client.multiplicar({"a":"1","b":"2"},function(err,res){
        if (err) throw err;

        console.log(res);
    });
});
