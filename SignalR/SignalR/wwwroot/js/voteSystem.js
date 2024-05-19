
var tCountSpan = document.getElementById("contestant2");
var jCountSpan = document.getElementById("contestant1");

// create connection


var connectionVoteCount = new signalR.HubConnectionBuilder().withUrl("/hubs/VoteSystem").build();


// connect to methods that hub invoke recieve notification

connectionVoteCount.on("updateTotalVoteCount", (tom,jerry) => {
   
    tCountSpan.innerHTML = tom.toString();
    jCountSpan.innerHTML = jerry.toString();
});



// invoke hub methode aka send notification to hub
function NewWindowLoadedOnClient () {
    // send don't have any retuen value
    // connectionUserCount.send("NewWindowLoaded");
    // invoke method with return value
    connectionVoteCount.invoke("GetUpdateVoteStatus").then((voteMapper) => {
        tCountSpan.innerHTML = voteMapper.tom.toString();
        jCountSpan.innerHTML = voteMapper.jerry.toString();
    });

}


// start connection

function fulfilled() {
    console.log("connection to Vote system hub successful");
    NewWindowLoadedOnClient();

}
function rejected() {

}

connectionVoteCount.start().then(fulfilled, rejected);