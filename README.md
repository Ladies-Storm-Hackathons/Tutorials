<p>This realtime voting web app was made for the first technical workshop I led as an evangelist intern, and also the largest technical workshop I have ever led. I found that the app could appeal to programmers of all skill levels because it was easily customizable, which could make for fun conversation and competition. Stephen, PubNub’s CTO, and Ian, an engineer and evangelist, had a mini contest over who would have the most votes. and could also be easily added to, time-permitting and skills-permitting, with the Facebook and Twitter APIs. </p>
##Layout Setup for Keys, Buttons
<p>First things first--get your PubNub publish and subscribe keys! Even though you are only publishing data, and not subscribing, you stilll need them both to initialize your PubNub object.
</p>
<p>
Next, you create a dictionary of polling options. The values are the counts of the number of votes, starting at zero.
</p>

<p>To set up the buttons in JavaScript, iterate through the keys in the dictionary, call document.createElement(‘BUTTON’) on each, set attributes like ID and style, and set the innerHTML to be the key of the dictionary. The event listener for each button would be the voteUp function, which increments the counts.
</p>

##Update Vote Counts from Button Clicked
<p>VoteUp takes in a key, and increments that key’s value. It then publishes the dictionary to your channel. The incrementing and publishing must be wrapped in a JavaScript closure in order to distinguish the incrementing of counts between the buttons.
</p>

##EON chart
<p>
A bar graph best visualizes voting. To draw the graph in an HTML div titled chart, you just need to call the chart method on your eon object, and pass some parameters into it. Some are required, like your PubNub instance and your channel, but others are completely optional. </p>

#Storage and Playback with PubNub History API
<p>
Now, voting is most fun if lots of people do it! What if someone comes in from another browser after you? You need to keep track of previous votes with PubNub’s storage and playback, or History API. Even though you set history to be true above, you also need to go to your dashboard to enable the History API. Because each publish returns an associative array, or dictionary, of that total vote count, you only need to get the last message. The count of history is set to one, and the callback will take in that one, long message, and see that there is something there. It will then set your chart to be that long message, or associative array, of old votes. 
</p>

##PubNub Voting App Conclusion
<p>
There you have it! This is the bare minimum you need for a realtime voting application. View the project in action <a href = "http://pubnub.github.io/eon-chart/examples/votes.html"> here</a> 
</p>
##Take it further
<p>
To take it further, you could set a timer so the chart only takes in new votes for a certain amount of time, or require a sort of login (with presence, perhaps?) to restrict the number of times someone could vote.
</p>

##App Extras using Social Media Widgets, API
<p>
To make the workshop more fun (and to help fill up two hours), I added some extra features with Twitter widgets and the Facebook API. 
</p>
###Web Intents with Twitter Widgets
<p>
Attendees learned about web intents, which let visitors to your website tweet, reply, like, follow, or reply from your site. The tweet intent let them create a pre-composed tweet that could be tweeted from a button on their site. 
</p>
<p>
Each parameter is optional, but the text, hashtags, and via ones are the most fun. Text sets the tweet, and via lets you include another twitter user. 
</p>
###Working with the Facebook API
<p>
The Facebook API was more complex. Everyone needed their own API keys, and the API features needed to run on a local server. It needed to check that you were logged in to Facebook before it could post a previously-composed status automatically for you, and then made a call to the Facebook API. 
</p>
####What will you use EON for?
