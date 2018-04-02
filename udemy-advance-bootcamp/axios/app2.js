var btn = document.querySelector("button");
var section = document.querySelector("#comments");
btn.addEventListener("click", sendRequest);

function sendRequest(){
    axios.get("https://jsonplaaskjldceholder.typicode.com/comments", {
        parms: {
            postId: 1
        }
    })
    .then(addComments)
    .catch(handleErrors)
}

function addComments(res){
    res.data.forEach(function(comment){
        appendComment(comment);
    });
}

function appendComment(comment){
    var newP = document.createElement("p");
    newP.innerText = comment.email;
    section.appendChild(newP);
}

function handleErrors(err){
    if(err.response){
        console.log("Problem with response ",err.response.status);
    } else if (err.request){
        console.log("PRoblem with request");
    } else {
        console.log('Error', err.message);
    }
}