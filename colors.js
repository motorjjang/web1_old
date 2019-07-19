var Links = {
  setColor : function(color) {
    var a = document.querySelectorAll('a');
    var i = 0;
    while(i < a.length) {
      a[i].style.color = color;
      i++;
    }
  }
}
var Body = {
  setColor : function(color) {
    document.querySelector('body').style.color=color;
  },
  setBackgroundColor : function(color) {
    document.querySelector('body').style.backgroundColor=color;
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if (self.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Links.setColor('pink');
    self.value = 'day';
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Links.setColor('blue');
    self.value = 'night';
  }
}
