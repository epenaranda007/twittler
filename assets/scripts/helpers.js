var formatDate = function(date){
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

  switch(month){
    case 0: month = "Jan"; break;
    case 1: month = "Feb"; break;
    case 2: month = "Mar"; break;
    case 3: month = "Apr"; break;
    case 4: month = "May"; break;
    case 5: month = "Jun"; break;
    case 6: month = "Jul"; break;
    case 7: month = "Aug"; break;
    case 8: month = "Sep"; break;
    case 9: month = "Oct"; break;
    case 10: month = "Nov"; break;
    case 11: month = "Dec"; break;
  }
  return time + ' - ' + day + ' ' + month + ' ' + year;
}