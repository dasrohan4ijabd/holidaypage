var chalk=require("chalk");
var figlet=require("figlet");
var readline=require("readline");
var reader=readline.createInterface(
{
    input:process.stdin,
    output:process.stdout,
    prompt: ">"
});

console.log(chalk.cyan(figlet.textSync("Tasker")));
console.log(chalk.blue("type a command(type help to see the list of commands"));
// reader.on("line",function(data)
// {
    
//     reader.prompt();
// });
// // reader.on("line",function(data)
// {
//     if(data=="2")
//     {

//     }
//     if(data=="1")
//     {
//         console.log("add task ");
//         reader.on()
//     }n
// })
var  print=console.log;
var tasks=[];
reader.prompt();
reader.on("line",function(data)
{var cmd=data.split(" ")[0];
var sarr=data.split(" ");
sarr.shift();
if(cmd=="ls")
{
    for(var i=0;i<tasks.length;i++)
    {
        print(i+1+"."+tasks[i]);
    }
}
    else if(cmd=="add" && sarr.length>0)
    {
        tasks.push(sarr.join(","));
        console.log("added");
    }
    else if(cmd=="delete" && sarr.length>0)
    {
        var id=parseInt(sarr[0]);
        tasks.splice(id-1,1);


    }
    else{
        print(chalk.red("wrong command"));
    }
    reader.prompt();

});

