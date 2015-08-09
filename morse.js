//Dots = new Mongo.Collection("dots");

var string = localStorage.getItem('string');
string = '';

simply.on('singleClick', function(e) {
  if (e.button === 'up') {

    /*Dots.insert({
      type: 'dot',
      at: count
    });*/
    string += ''+'.';
    simply.subtitle(string);
  } else if (e.button === 'down') {
    /*Dots.insert({
      type: 'dash',
      at: count
    });*/
    string += ''+'-';
    simply.subtitle(string);
  } else if (e.button === 'select') {
    /*Dots.insert({
      type: ' ',
      at: count
    });*/
    string += ''+' ';
    simply.subtitle(string);
  }
  localStorage.setItem('string', string);
});

simply.text({ title: 'MorsePebble', subtitle: '' });

simply.on('longClick', function(e) {
  if(e.button === 'select') {
    sendMsg(localStorage.getItem('string'));
    simply.vibe('short');
    simply.subtitle('');
    string = '';
    getMsg();
  }
});

function sendMsg(msg) {
  console.log(msg);
  var URL = 'http://morsepebble.meteor.com/api/messages/new/'+msg;
  ajax({url: URL, type: 'json'},
  function(json) {
    // Data is supplied here
    simply.subtitle('loading..');


  },
  function(error) {
    subtitle('Ajax failed');
  }
);
}

function getMsg() {
  var newUrl = 'http://morsepebble.meteor.com/api/messages/new/';
  ajax({url: newUrl, type: 'json'},
  function(json) {
  // Data is supplied here
  simply.subtitle(json);
},
function(error) {
  console.log('Ajax failed: ' + error);
}
);
}
