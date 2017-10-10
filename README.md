# neighbor-map
You can be up and running with this cool map in 3 easy steps:
step 1: download index.html, the css file and the js file to the same directory
step 2: dubble click on index.html
step 3: stare in awe...lol(silly little map)

To start off you will be looking at Historical South Street, the true birthplace of the 'Hippie' 
movement. Feel free to check out other parts of Philly by entering them in the search box(BTW Will Smith is from Overbrook
about 10 blocks from where I grew up).

All this was made possible with intellectual funding by; Udacity forum, Google, stackoverflow.com, friends
and people like you(sorry been watching PBS...lol)
hope you like the holloween theme
# Notes
1.Clicking on location list should also animate the associated marker. this.setPin=function(clickedPin) {
  Used .addListener but couldn't get to work no matter where I put it
  
2.Filter functionality hasn't been provided. Added 'type' to myLocations. Figured could use data-bind button to filter dif types
  but can't find clear example
  
3.Marker must animate when it is clicked to indicate its active state. Please note that the current mouse-over animation doesn't count for    this requirement. Got this one but it wont stop bouncing til clicked again. tried timeout, didn't work

4.To be safe, please provide conditional statements to handle the case when the each property of the response data is falsy (undefined, null, empty, etc.). A simple warning message, such as data is not available, can be logged to the UI. should be showing 'failed to get wiki links' but again timeOut isn't working

5.Data manipulation of the DOM must utilize the MVVM pattern, but not by using jQuery nor Javascript DOM methods.
  '$wikiElem.append('<li><a href="'+ url +'">' + articleStr +'</a></li>');' needs to be data-bind but unsure how to do for this part
  
6.It's recommended that we separate JSON data into a file. This was a suggestion but if you have an idea I'll use it
OPTION 1
A quick method is to create a separate JS file and request it before this JS file so that it can access the JSON data.
  With all the 'foo' & 'bars' I can't understand their examples. did a data.json(in js/lib folder) file but couldn't get it into the js file. Was messing with the 'var styles = ' part
  
7. never did the hamberger icon, but need one for the search-box so it'll work on moble device
