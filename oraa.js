var readline=require("readline");
var reader=readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout,
        prompt: ">"
    }
);
var chalk=require("chalk");
var figlet=require("figlet");
console.log(chalk.cyan(figlet.textSync("Tasker")));
console.log(chalk.blue("Type a command(type help to see the lost of commands"));
reader.prompt();
var task=[];
reader.on("line",function(data)
{
    var cmd=data.split(" ")[0];
    var last=data.split(" ");
    
    last.shift();
    if(data=="help" )
    {
        console.log(`                                 1. add task_name
                                 2.ls
                                 3.delete ID
                                                   `);
    }
    else if(cmd=="add" && last.length>0)
    {
        task.push(last);
        console.log(chalk.green(" one task added"));
    }
    else if(cmd=="ls")
    {
        console.log(chalk.blue("Tasks"));
        for(var i in task)
        {
            var j=Number(i);
            console.log(j +"."+task[i]);
        }

    }
    else if(cmd=="delete" && last.length>0)
    {
        var id=parseInt(last);
        task.splice(id-1,1);

    }
    else{
        chalk.red("wrong command");
    }
});