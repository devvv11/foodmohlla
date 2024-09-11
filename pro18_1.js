var http=require('http');
    var fs=require('fs');

       http.createServer(function(req,res){
	fs.readFile('prog13.html',function(err,data){
	if(err){
		res.writeHead(500,{'content-type':'text/html'});
		res.end("Server Error");		
	}	
	else{
			res.writeHead(200,{'content-type':'text/html'});
			res.end(data);
	}	
	});
            }).listen(8082)
