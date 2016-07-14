 $(document).ready(function() {       //init
        var pub_key = "pub-c-568f9a32-f440-4d58-9cee-e23cd1d12e7a";
        var sub_key = "sub-c-2e615be4-439b-11e6-971e-02ee2ddab7fe";
        var chan = "Spectra";
       
        var pb = PUBNUB.init({
            publish_key: pub_key,
            subscribe_key: sub_key
        });
        var pollOptions = [
            {name: "Mushu" },
            { name: "Hamilton"},
            { name: "Stephen"},
            { name: "Tomomi"},
            { name: "Erlich"}
        ];
        var mushuNumVotes = 0;
        var hamiltonNumVotes = 0;
        var stephenNumVotes = 0;
        var tomomiNumVotes = 0;
        var erlichNumVotes = 0;
        function pubRes() {
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
                    console.log(m);
                }
            });
        } //pubRes()
        function voteUp(msg) {
            return function() {
            if(msg == "Mushu") {
                mushuNumVotes++;
            }
            else if (msg == "Hamilton") {
                hamiltonNumVotes++;
            }
            else if(msg == "Stephen") {
                stephenNumVotes++;
            }
            else if(msg == "Tomomi") {
                tomomiNumVotes++;
            }
            else if(msg == "Erlich") {
                erlichNumVotes++;
            }
            pubRes();
            sendData(msg);
        }
        }
        function setup() {   //buttons     
            var buttonsArr = [];
            for(var i = 0; i < pollOptions.length; i++) {
                var b = document.createElement('BUTTON');
                b.setAttribute('id', 'button' + i);
                b.setAttribute('width', '30%');
                b.innerHTML = pollOptions[i].name;
                var x = b.innerHTML;
                var t = document.createTextNode(pollOptions[i].name);
                document.body.appendChild(b);
                buttonsArr.push(b);
            
            buttonsArr[i].addEventListener("click", voteUp(pollOptions[i].name)); 
        }
            console.log(buttonsArr);
        } //setup
        setup(); //buttons
        function sendData(msg) {
            pb.publish({
                ssl: true,
                channel: chan,
                message: msg
            });
        }

        
// pb.subscribe({
//     channel: chan,
//     message: voteUp
// });

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
}
  init_votes();
});