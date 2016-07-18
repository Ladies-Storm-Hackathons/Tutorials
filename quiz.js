var pub_key = "pub-c-568f9a32-f440-4d58-9cee-e23cd1d12e7a";
var sub_key = "sub-c-2e615be4-439b-11e6-971e-02ee2ddab7fe";
var chan = "Spectra";

var pb = PUBNUB.init({
    publish_key: pub_key,
    subscribe_key: sub_key
});

   function sub() {
        pb.subscribe({
            channel: chan,
            message: voteUp
        });
    }

    sub();

function init_votes() {
    pb.history({
        channel: chan,
        start: 0,
        callback: function(msg) {
            console.log("msg is ", msg)
            var vote_history = msg[0];
            for (var i=0; i<vote_history.length; i++) {
                voteUp(vote_history[i]);
            } //for
        } //callback
    }); //history //
} //init_votes()

init_votes(); //call init_votes()

var mushuNumVotes = 0;
var hamiltonNumVotes = 0;
var stephenNumVotes = 0;
var tomomiNumVotes = 0;
var erlichNumVotes = 0;

function voteUp(msg) {
    return function() {
        if(msg == "Mushu") {
            mushuNumVotes++;
            console.log("Mushu msg voteup", mushuNumVotes);
        }
        else if (msg == "Hamilton") {
            hamiltonNumVotes++;
            console.log("Ham msg voteup", hamiltonNumVotes);
        }
        else if(msg == "Stephen") {
            stephenNumVotes++;
            console.log("Stephen msg voteup", stephenNumVotes);
        }
        else if(msg == "Tomomi") {
            tomomiNumVotes++;
        }
        else if(msg == "Erlich") {
            erlichNumVotes++;
        }
        pubRes();
        //sendData(msg);
    }
    draw();
}

//publish
function pubRes() {
    console.log('mushuNumVotes', mushuNumVotes)
    console.log('hamiltonNumVotes', hamiltonNumVotes)
    console.log('stephenNumVotes', stephenNumVotes)
    console.log('erlichNumVotes', erlichNumVotes)

    pb.publish({
        channel: chan,
        message: {
            eon: {
                "Mushu" : mushuNumVotes,
                "Hamilton" : hamiltonNumVotes,
                "Stephen" : stephenNumVotes,
                "Tomomi" : tomomiNumVotes,
                "Erlich" : erlichNumVotes
            }
        },
        callback: function(m) {
            console.log("callback in pubres", m);
        }
    });

} //pubRes()


    //embed
    function draw() {
        eon.chart({
            channel: chan,
            pubnub: pb,
            generate: {
                bindto: '#chart',
                data: {
                    labels: true,
                    type: 'bar',
                    colors: {
                        'Mushu': '#cc6699',
                        'Hamilton': '#0099cc',
                        'Stephen': '#ffcc99',
                        'Tomomi': '#33cccc',
                        'Erlich': '#0000ff'      
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
   
    var pollOptions = [
        "Mushu", "Hamilton", "Stephen", "Tomomi", "Erlich"
    ];
   
    function setup() {   //buttons     
        var buttonsArr = [];
        for(var i = 0; i < pollOptions.length; i++) {
            var b = document.createElement('BUTTON');
            b.setAttribute('id', 'button' + i);
            b.setAttribute('width', '30%');
            b.innerHTML = pollOptions[i];
            document.body.appendChild(b);
            buttonsArr.push(b);
            buttonsArr[i].addEventListener("click", voteUp(pollOptions[i])); 
        }
    } //setup

    setup(); //buttons 

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
