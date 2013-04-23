$(document).ready(function () {
  Tabletop.init({
  
 // This code gives an error:
 // "Uncaught TypeError: Uncaught TypeError: Cannot read property'1' of null" 
 //on tabletop.js line 75. Here's the relevant code: 
 /* Be friendly about what you accept */ 
 //if(/key=/.test(this.key)) { 
 //  this.log("You passed a key as a URL! Attempting to parse."); 
 //this.key = this.key.match("key=(.*?)&")[1];
  
    key: 'https://docs.google.com/spreadsheet/ccc?key=0AiT9esEM1Yc5dEp6MnRtT0cwNUJZOGgxY0FVNnV1RlE',
    
    callback: function(data, tabletop) { 
      var i,
          dataLength = data.length;
          
      for (i=0; i<dataLength; i++) {
        $('#politicians').append(
          $('<li>', {
            text: data[i].politician + ', ' + data[i].position
          })
        );
      }
    },
    simpleSheet: true 
  });
});
