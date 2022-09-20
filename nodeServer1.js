var http=require("http");
const server=http.createServer((req,res)=>{
    
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write('<h1>hello from krish hiii</h1>');
    res.end();
});
server.listen(3000);
