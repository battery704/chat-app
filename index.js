const express=require("express");
const http=require("http");
const path=require('path');
const{Server}=require("socket.io");

const app=express();
const server=http.createServer(app);
const io = new Server(server);
app.use(express.static(path.resolve("./public")));
app.get("/",(req,res)=>{
    res.sendFile("./public/index.html");
})
io.on("connection",(socket)=>
{   
    socket.on("user-message",(mess)=>{
        io.emit("message", mess);
    });   
    //console.log("new user connected ", socket.id);
});
server.listen(9000,()=> console.log("server started...."));

///hassannnn