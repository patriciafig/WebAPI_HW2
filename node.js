var http = require('http');
var express = require('express');
var app = express();
app.all('/', function (req, res) {
  
   res.status(403).send('Request Rejected: no URN specified');
});


app.all('/gets', function (req, res) {
  
if(req.method == 'GET') {
  
if(Object.keys(req.query).length > 0) {
res.send(req.query);
  
} else {
res.send('No query parameters were sent in.');
}
  
} else {
  
res.status(403).send('Request Rejected: HTTP Method not supported.');
}
});

app.all('/posts', function (req, res) {
  
if(req.method == 'POST') {
  
if(Object.keys(req.query).length > 0) {
res.send(req.query);

} else {
res.send('No query parameters were sent in.');
}
  
} else {
  
   res.status(403).send('Request Rejected: HTTP Method not supported.');
}
});

app.all('/puts', function (req, res) {
  
if(req.method == 'PUT') {
  
if(Object.keys(req.query).length > 0) {
res.send(req.query);
  
} else {
res.send('No query parameters were sent in.');
}

} else {
  
   res.status(403).send('Request Rejected: HTTP Method not supported.');
}
});


app.all('/deletes', function (req, res) {
  
if(req.method == 'DELETE') {
  
if(Object.keys(req.query).length > 0) {
res.send(req.query);
  
} else {
res.send('No query parameters were sent in.');
}
  
} else {
  
   res.status(403).send('Request Rejected: HTTP Method not supported.');
}
});


app.all('*', function (req, res) {
  
res.status(403).send('Request Rejected: URN does not support the HTTP Method.');
});


var server = app.listen(8080, function() {
   var host = server.address().address;
   var port = server.address().port;
  
   console.log('Node.js server listening at http:%s:%s', host, port)
});

