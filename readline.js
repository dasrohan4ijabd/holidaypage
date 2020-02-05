var readline=require("readline");
var reader =readline.createInterface(
{
    input:process.stdin,
    output: process.stdout,
    prompt:"$$"
});
var arr=[];
console.clear();
reader.prompt();

reader.on("line",function(data)
{
    
    if(data=="add")
    {
        arr.push(data);
        console.log(data+"added");

    }
    
    // console.log("did you said"+data);
    reader.prompt();

});

reader.on("close",function()
{
    console.log("thank you for using ");
});