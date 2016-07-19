var chan = "Spectra"
  var pollOptions = [
    { name: "Mushu", numVotes: 0 },
    { name: "AaronBurrSir", numVotes: 0 },
    { name: "Stephen", numVotes: 0 },
    { name: "Tomomi", numVotes: 0 },
    { name: "ErlichBachman", numVotes: 0 }
  ];

//init
var pub_key = "pub-c-568f9a32-f440-4d58-9cee-e23cd1d12e7a";
var sub_key = "sub-c-2e615be4-439b-11e6-971e-02ee2ddab7fe";
var pb = PUBNUB.init({
  channel: chan,
  publish_key: pub_key,
  subscribe_key: sub_key
});

  pb.subscribe({
    channel: chan,
    message: voteUp
  });

  function sendData(msg) {
    pb.publish({
      ssl: true,
        channel: chan,
        message: msg
    });
  }

  function draw(pollOptions) {
    var bars = d3.select(".container")
      .selectAll(".bar-wrapper")
      .data(pollOptions);
    var barEnter = bars
      .enter()
      .append("div")
      .attr("class", "bar-wrapper")
    barEnter
      .append("button")
      .text(function(d) { return d.name; })
      .attr("class", "vote-btn btn-default btn-primary")
      .on("click", function(d) {
        sendData(d.name);
      });
    barEnter
      .append("div")
      .attr("class", "bar")
      .style("width", function (d) {
        return (d.numVotes*10)+15 + "px";
      })
      .text(function(d) { return d.numVotes });
    bars.selectAll("div")
      .text(function(d) { return d.numVotes })
      .style("width", function (d) {
        return (d.numVotes*10)+15 + "px";
      });
    bars
      .exit()
      .remove()
  };

  function voteUp(msg) {
    for (var i=0; i< pollOptions.length; i++) {
      var el = pollOptions[i];
      if (el.name == msg) {
        el.numVotes += 1;
      }
    }
    //redraw when vote ++ 
    draw(pollOptions);
  }

  function init_votes() {
    pb.history({
      channel: chan,
      start: 0,
      callback: function(msg) {
        var vote_history = msg[0];
        for (var i=0; i<vote_history.length; i++) {
          voteUp(vote_history[i]);
        }
      }
    });
  }

  init_votes();
  draw(pollOptions);