var btn = document.querySelector('button');
var span = document.querySelector('#price');
var currency ="USD";

btn.addEventListener("click", function(){
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            var price = JSON.parse(XHR.responseText);
            var priceDetail = price.bpi[currency].rate;
            console.log(price.bpi[currency].rate);
            span.innerText = price + " " + currency;
        }
    }
    var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    XHR.open("GET",url);
    XHR.send();
}) 