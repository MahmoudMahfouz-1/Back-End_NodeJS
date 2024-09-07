// Importing file system to my project 
const fs = require('fs');
// Reading From Files 
fs.readFile('./docs/blog1.txt', (err,data) => {
    if(err)
    {
        console.log(Error("No Data Found at ./docs/blog1"));
    }
    else 
    {
        console.log(data.toString());
    }
})

// Writing to Files 
fs.writeFile('./docs/blog1.txt', "Hello, Mahmoud",() => console.log("File Written"));
fs.writeFile('./docs/blog2.txt', "Hello, Mahmoud",() => console.log("File Written"));


// Dealing with directiories 
if(!fs.existsSync('./assets'))
{
    fs.mkdir('./assets',(err) =>
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Folder Created")
        }
    })
}
// deleting Files
if(fs.existsSync('./docs/deleteme.txt'))
{
    fs.unlink('./docs/deleteme.txt',(err) =>{
        if(err) 
            console.log(err)
        else
        console.log("file deleted")
    } )
}