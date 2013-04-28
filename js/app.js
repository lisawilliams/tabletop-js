$(document).ready(function () {
  Tabletop.init({
  
  
 //on tabletop.js line 75. Here's the relevant code: 
 /* Be friendly about what you accept */ 
 //if(/key=/.test(this.key)) { 
 //  this.log("You passed a key as a URL! Attempting to parse."); 
 //this.key = this.key.match("key=(.*?)&")[1];
  
    key:'0AppPPX-L4ABKdExWaVBqWFFuVnFYU0Y1OHUwc0dNb3c',
    
    callback: function(data, tabletop) { 
      var i,
          dataLength = data.length;
          
      for (i=0; i<dataLength; i++) {
        $('#lawEnforcement').append(
       // old line which puts everything in a list
         $('<li>', {
           text:  data[i].agency + ", " + data[i].per1000 + ",  " + data[i].population 
          }) 
          
          // I would like to put things in a table but I can't make it work
                 
         //  $('<td>', {
       //      text: data[i].agency + '</td><td> ' + data[i].per1000 + '</td><td>  ' + data[i].population '</td>'
        //  })
        );
      }
    },
    simpleSheet: true 
  });
});
