function greet(name,callback){
    console.log('hello' + name);
    callback();
}

function welcome() {
    console.log('welcome!!!!  back');
    
}

greet('Nawaid', welcome);



// caollback with asynchoronous 


function printinfo(name,callback){
    setTimeout(function () {
        console.log('print info for '+name);
        callback('plz call me back');
        
    },10000);
}

function displayMessage(message){
    console.log(message);
}
printinfo("lisa",displayMessage)