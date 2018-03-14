jQuery.get('http://example.com/data.json',function(data){
    doSomething(data);
});

function doSomething(dataFromServer){
    //lakukans esuatu disini;
    console.log(dataFromServer);
};