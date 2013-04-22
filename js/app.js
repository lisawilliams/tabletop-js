$(document).ready(function () {
  Tabletop.init({
    key: 'YOUR GOOGLE SPREADSHEET KEY HERE',
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
