var url = 'https://randomuser.me/api/';
var fullnameDisp = document.querySelector('#fullname');
var avatar = document.querySelector('#avatar');
var username = document.querySelector('#username');
var city = document.querySelector('#city');
var email = document.querySelector('#email');

var btn = document.querySelector('#btn');
btn.addEventListener("click", function() {
    fetch(url)
        .then(handleErros)
        .then(parseJSON)
        .then(updateProfile)
        .then(displayErros);
});

function handleErros(res) {
    if (!res.ok) {
        throw Error(res.status);
    }
    return res;
}

function parseJSON(res) {
    return res.json().then(function(parsedData) {
        return parsedData.results[0];
    })
}

function updateProfile(data) {
    var fullname = data.name.first + " " + data.name.last;
    fullnameDisp.innerText = fullname;
    avatar.src = data.picture.medium;
    username.innerText = data.login.username;
    city.innerText = data.location.city;
    email.innerText = data.email;
}
function displayErros(err){
    console.log("INSIde display");
    console.log(err);
}