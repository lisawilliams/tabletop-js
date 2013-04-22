$(document).ready(function () {
  Tabletop.init({
  
  // key only: 0AppPPX-L4ABKdExWaVBqWFFuVnFYU0Y1OHUwc0dNb3c'
  // full public url to spreadsheet: https://docs.google.com/spreadsheet/ccc?key=0AppPPX-L4ABKdExWaVBqWFFuVnFYU0Y1OHUwc0dNb3c&usp=sharing
  // currently this gives a 400:Bad Request error on 
  // GET https://spreadsheets.google.com/feeds/worksheets/0AppPPX-L4ABKdExWaVBqWFFuV…/basic?alt=json-in-script&callback=Tabletop.callbacks.tt136665610463249112 400 (Bad Request) 
  // at tabletop.js line 184
  
    key: '0AppPPX-L4ABKdExWaVBqWFFuVnFYU0Y1OHUwc0dNb3c',
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
