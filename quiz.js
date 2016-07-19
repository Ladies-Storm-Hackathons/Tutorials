var pubKey = "pub-c-568f9a32-f440-4d58-9cee-e23cd1d12e7a";
var subKey = "sub-c-2e615be4-439b-11e6-971e-02ee2ddab7fe";
var chan = "Spectra";

var pollOptions = {
    eon: {
        "Mushu" : 0, 
        "Erlich" :0,
        "Stephen" : 0,
        "Tomomi" : 0,
        "Ian" : 0
    }
};

var pb = PUBNUB.init({
    publish_key: pubKey,
    subscribe_key: subKey
});

//button layout, click action
function setup() {   //buttons     
    for(key in pollOptions.eon) {
        var b = document.createElement('BUTTON');
        b.setAttribute('id', 'button' + key);
        b.setAttribute('style', 'left:10%;width:6%;margin-left:4%;margin-top:4%;margin-bottom:5%;');
        b.innerHTML = key;
        b.addEventListener("click", voteUp(key)); 
        document.body.appendChild(b);
    } //for
} //setup
setup(); //buttons 

//get history
function initOlderVotes() {
    console.log("history here");
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
} //init_votes()
initOlderVotes();

//publish -> keeps tally in individual browser of each vote but !of each different browser
function pubRes() {
    pb.publish({
        channel: chan,
        message: pollOptions
    });
} //pubRes()


function voteUp(msg) {
    return function() {
        console.log(pollOptions);
        pollOptions.eon[msg] = pollOptions.eon[msg] + 1;
        pubRes();
    } //JS closure only publishes on click     
}

//embed
function draw() {
    eon.chart({
        pubnub: pb, //same pubnub object
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
                show: false
            }
        }
    });
}

draw();

//fb
window.fbAsyncInit = function() {
    FB.init({
        appId      : '151344775270854',
        xfbml      : true,
        version    : 'v2.7'
    });
};

(function(d, s, id){
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) {return;}
js = d.createElement(s); js.id = id;
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