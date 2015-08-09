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
    string += ''+'_';
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

simply.text({ title: 'PebbleCode', subtitle: '' });

simply.on('longClick', function(e) {
  if(e.button === 'select') {
    sendMsg(localStorage.getItem('string'));
    simply.vibe('short');
    string = '';
  }
});

function sendMsg(msg) {
  console.log(msg);
}
