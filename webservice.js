var soap = require('soap');
var http = require('http');

var service = {
    ws: {
        calc: {
            sumar : function(args) {
                var n = args.a + args.b
                return { res : n };
            },

            multiplicar : function(args) {
                var n = args.a * args.b;
                return { res : n };
            }
        }
    }
}

var xml = require('fs').readFileSync('wscalc1.wsdl', 'utf8'),

server = http.createServer(function(request,response) {
    response.end("404: Not Found: "+request.url)
});

server.listen(8000);
soap.listen(server, '/wscalc1', service, xml);
