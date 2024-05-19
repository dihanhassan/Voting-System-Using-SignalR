// create connection
var connectionUserCount = new signalR.HubConnectionBuilder().withUrl("/hubs/UserCount").build();

// connect to methods that hub invoke recieve notification

connectionUserCount.on("updateTotalView", (value) => {
    var newCountSpan = document.getElementById("totalViewsCounter");
    newCountSpan.innerHTML = value.toString();
});

connectionUserCount.on("updateTotalUsers", (value) => {
    var newCountSpan = document.getElementById("totalUsersCounter");
    newCountSpan.innerHTML = value.toString();

})

// invoke hub methode aka send notification to hub

function NewWindowLoadedOnClient() {
    // send don't have any retuen value
    // connectionUserCount.send("NewWindowLoaded");
    // invoke method with return value
    connectionUserCount.invoke("NewWindowLoaded","Shihab").then((value) => {
        console.log(value);
    });

}

// start connection

function fulfilled() {
    console.log("connection to user hub successful");
    NewWindowLoadedOnClient();
}
function rejected() {

}

connectionUserCount.start().then(fulfilled, rejected);