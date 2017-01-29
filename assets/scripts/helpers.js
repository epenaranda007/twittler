var formatDate = function(date){
  var monthWord = {0:'Jan', 1:'Feb', 2:'Mar', 3:'Apr', 4:'May', 5:'Jun', 6:'Jul', 7:'Aug', 8:'Sep', 9:'Oct', 10:'Nov', 11:'Dec'};
  var hour = date.getHours();
  var min = date.getMinutes();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  var time = "";

  min = min < 10 ? ('0' + min) : min;
  if(hour > 12){
    time = ((hour % 12) !== 0 ? (hour%12 + ':' + min + " PM") : (12 + ':' + min + " AM")) ;
  }  
  else{
    time = ((hour % 12) !== 0 ? (hour%12 + ':' + min + " AM") : (12 + ':' + min + " PM")) ;
  } 

  return time + ' - ' + day + ' ' + monthWord[month.toString()] + ' ' + year;
}