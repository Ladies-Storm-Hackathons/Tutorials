//publish, subscribe keys
//channel
var pubKey = "pub-c-568f9a32-f440-4d58-9cee-e23cd1d12e7a";
var subKey = "sub-c-2e615be4-439b-11e6-971e-02ee2ddab7fe";
var chan = "Spectra";

var pollOptions = {
    eon: {
        "Olaf" : 0.0, 
        //add in your own!
        // "Erlich" :0.0,
        // "Stephen" : 0.0,
        // "Tomomi" : 0.0,
        // "Ian" : 0.0
    }
};

//init PubNub object with keys

//button layout function with click action->loop through dictionary, add it to DOM list with appendChild
 

//get history, init olderVotes
function initOlderVotes() {
    pb.history({
    });
}


//publishResults() -> keeps tally 


//vote function, on button click, publish results! ->JS closure each button has unique function 
function voteUp(pollKey) {

}
//embed chart
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
                    //dictionary key: '#cc6699',
                    //key : '#0099cc',
                    //key: '#ffcc99',
                    //key: '#33cccc',
                    //key: '#0000ff'      
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

// //fb async, init, version, etc...

// //fill in function
// (function(d, s, id){

// }(document, 'script', 'facebook-jssdk'));
// // Only works after `FB.init` is called

// //customizable
// function myFacebookLogin() {
//     FB.login(function(){
//     // Note: The call will only work if you accept the permission request
//         FB.api('/me/feed', 'post', {message: 'Hello, world! Having fun building a realtime voting app with #PubNub and #Twitter and #Facebook APIs #sospectra'});
//     }, {scope: 'publish_actions'});
// } 
