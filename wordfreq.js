$(document).ready(function(){
  $('#go').click(function() {
    var words = {};
    //need to clean the input - newlines, punctiation etc
    var text = $('textarea').val();
    //cleanup
    text = text
      .replace(/\W/g, ' ') //non letters to whitespace
      .replace(/\d/g, '') //remove digits
      .replace(/\s+/g, ' ') //multiple spaces
      .replace(/\n/g, ' ') //newlines
      .replace(/^\s*|\s*$/g, '') //lead/trail whitespace
      .toLowerCase()
      .split(' ')
      .sort();
    text.forEach(function(item) {
      words[item] = 0;
    });
    text.forEach(function(item) {
      words[item] += 1;
    })
    $('#results').empty()
    for (var key in words) {
      $('#results').append("<tr><td>"
                           + key
                           + "</td><td>"
                           + words[key]
                           + "</td></tr>");
    }
  });
});