 var btn = document.querySelector("button");
 btn.addEventListener("click", function(){
     var url = 'https://api.github.com/users/coltasdas';
     fetch(url)
     .then(handleErrors)
     .then(function(request){
        console.log("EVERITHING FINE");
        console.log(request);
     })
     .catch(function(error){
         console.log(error);
     });
 });

 function handleErrors(request){
     if(!request.ok){
         throw Error(request.status);
     }
     return request;
 }