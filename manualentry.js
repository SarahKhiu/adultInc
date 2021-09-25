function addNew() {
    var node = document.createElement('li');
    node.appendChild(document.createTextNode('MYDigi'));
    
    document.querySelector('ul').appendChild(node);
    document.getElementById("btnAdd").disabled=true;
    }
    
    var formatDate = function(d) {
        //2014-07-09
        var d = d.split('-');//Since we know the value comes yyyy-mm-dd…
        
        var dt = new Date(d[0],d[1],d[2]);//Note: The month is off by +1 - for JS Date object, 
        
        var formattedDate = '';
        
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];//Now we can get the month like this:
        
        formattedDate += months[ dt.getMonth()-1 ]; //Months are 0-11 for getDate
    
        var formattedDay;//We are gonna store the formatted day here.
        
        switch( d[2].substring(1) ) {//We can use the string of the day (dd format) to access the last number, which determines what we append...
          case '1':
            formattedDay = parseInt(d[2]) + "st"; //1st, 21st, etc
            break;        
          case '2':
            formattedDay = parseInt(d[2]) + "nd"; //2nd
            break;        
          case '3':
            formattedDay = parseInt(d[2]) + "rd"; //etc…
            break;  
          default:
            formattedDay = parseInt(d[2]) + "th";
        }
        //Add a space and the day, now correctly appended
        formattedDate += ' ' + formattedDay;
        //Return nice formatted date!
        return formattedDate;
      }