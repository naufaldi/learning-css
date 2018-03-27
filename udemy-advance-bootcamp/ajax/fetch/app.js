 var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
 fetch(url, {
     method : 'POST',
     body : JSON.stringify({
         name: 'blue',
         loginb: 'bluecat',
     })
 })
 .then(function(response){
     console.log(response);
     return response.json()
     
 })
 .then(function(data){
    console.log(data.bpi.EUR.rate); 
});