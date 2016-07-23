var pubKey = "pub-c-568f9a32-f440-4d58-9cee-e23cd1d12e7a";
var subKey = "sub-c-2e615be4-439b-11e6-971e-02ee2ddab7fe";
var chan = "Spectra";

var pollOptions = {
    eon: {
        "Mushu" : 0.0, 
        "Erlich" :0.0,
        "Stephen" : 0.0,
        "Tomomi" : 0.0,
        "Ian" : 0.0
    }
};

var pb = PUBNUB.init({
    publish_key: pubKey,
    subscribe_key: subKey
});

//button layout, click action
function setupButtons() {   //buttons  
    var buttonColor;   
    for(key in pollOptions.eon) {
        var b = document.createElement('BUTTON');
        b.setAttribute('id', 'button' + key);
        b.setAttribute('style', 'left:10%;width:6%;margin-left:4%;margin-top:4%;margin-bottom:5%;background-color:buttonColor;color:white;'); 
        b.innerHTML = key;
        b.addEventListener("click", voteUp(key)); 
        document.body.appendChild(b);

    } //for
} //setup
setupButtons(); //buttons 

//get history
function initOlderVotes() {
    pb.history({
        channel: chan,
        count: 1,
        callback: function(msg) {
            console.log("msg is ", msg);
            var voteHistory = msg[0];
            if(voteHistory.length) {
                pollOptions = voteHistory[0];
            }
        }, //callback
    }); //history 
} //initOlderVotes()

initOlderVotes();


//publish -> keeps tally 
function publishResults() {
    pb.publish({
        channel: chan,
        message: pollOptions,
        callback: function(m) {
            console.log("publishing!");
        }
    });
} //publishResults()


function voteUp(pollOptionKey) {
    return function() {
        console.log(pollOptions);
        pollOptions.eon[pollOptionKey] += 1.0;
        publishResults();
    } //JS closure each button has unique function 
}

//embed
function drawChart() {
    eon.chart({
        pubnub: pb, //same pubnub object, gets data from channel
        channel: chan, //same channel
        history: true,
        generate: {
            bindto: '#chart',
            data: {
                labels: true,
                type: 'bar',
                colors: {
                    'Mushu': '#cc6699',
                    'Erlich': '#0099cc',
                    'Stephen': '#ffcc99',
                    'Tomomi': '#33cccc',
                    'Ian': '#0000ff'      
                }
            },
            bar: {
                width: {
                    ratio: 0.5
                }
            },
            tooltip: {
                show: false //hover over and see chart of counts
            }
        }
    });
}

drawChart();


//fb 
window.fbAsyncInit = function() {
    FB.init({
        appId      : 'your-app-id',
        xfbml      : true,
        version    : 'v2.7'
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s); 

    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Only works after `FB.init` is called
function myFacebookLogin() {
    FB.login(function(){
    // Note: The call will only work if you accept the permission request
        FB.api('/me/feed', 'post', {message: 'Hello, world! Having fun building a realtime voting app with #PubNub and #Twitter and #Facebook APIs #sospectra'});
    }, {scope: 'publish_actions'});
} 